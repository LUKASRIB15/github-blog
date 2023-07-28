import { ProfileRepository } from '../../components/ProfileRepository'
import { RepositoryLayout } from './styles'
import { api } from '../../lib/api'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ReactMarkDown from 'react-markdown'
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import remarkGfm from 'remark-gfm'

export function Repository() {
  const { id } = useParams()
  const [readme, setReadme] = useState<string | null>(null)

  async function getReadmeContent() {
    const response = await api.get(`/repos/LUKASRIB15/${id}/readme`, {
      headers: {
        Accept: 'application/vnd.github.v3+json',
      },
    })

    if (response.status === 200) {
      const data = response.data
      if (data.content) {
        const readmeContent = atob(data.content)
        setReadme(readmeContent)
      }
    }
  }

  useEffect(() => {
    getReadmeContent()
  }, [])

  return (
    <RepositoryLayout>
      <ProfileRepository />
      <main>
        {readme ? (
          <ReactMarkDown
            children={readme}
            components={{
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || '')
                return !inline && match ? (
                  <SyntaxHighlighter
                    {...props}
                    children={String(children).replace(/\n$/, '')}
                    style={dracula}
                    language={match[1]}
                    PreTag="div"
                    customStyle={{
                      padding: '1rem',
                      background: '#112131',
                      color: '#FFFFFF',
                      margin: '1.5rem 0',
                    }}
                  />
                ) : (
                  <code {...props} className={className}>
                    {children}
                  </code>
                )
              },
            }}
            remarkPlugins={[remarkGfm]}
          />
        ) : (
          <p>Carregando o conteúdo do README...</p>
        )}
      </main>
    </RepositoryLayout>
  )
}
