import { ProfileRepository } from '../../components/ProfileRepository'
import { RepositoryLayout } from './styles'
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter'

export function Repository() {
  return (
    <RepositoryLayout>
      <ProfileRepository />
      <main>
        <p>
          Programming languages all have built-in data structures, but these
          often differ from one language to another. This article attempts to
          list the built-in data structures available in JavaScript and what
          properties they have. These can be used to build other data
          structures. Wherever possible, comparisons with other languages are
          drawn. Dynamic typing JavaScript is a loosely typed and dynamic
          language. Variables in JavaScript are not directly associated with any
          particular value type, and any variable can be assigned (and
          re-assigned) values of all types:
        </p>
        <SyntaxHighlighter
          language="typescript"
          style={docco}
          customStyle={{
            padding: '1rem',
            background: '#112131',
            color: '#FFFFFF',
            margin: '1.5rem 0',
          }}
        >
          {`let foo = 42; // foo is now a number 
foo = ‘bar’; // foo is now a string 
foo = true; // foo is now a boolean`}
        </SyntaxHighlighter>
      </main>
    </RepositoryLayout>
  )
}
