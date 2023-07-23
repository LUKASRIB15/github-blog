import { formattedDate, truncateString } from '../../utils/formatter'
import { CardLayout, HeaderCard } from './styles'

interface CardRepositoryProps {
  name: string
  description: string
  createdAt: string
}

export function CardRepository({
  name,
  description,
  createdAt,
}: CardRepositoryProps) {
  return (
    <CardLayout>
      <HeaderCard>
        <h3>{name}</h3>
        <span>{formattedDate(createdAt)}</span>
      </HeaderCard>
      <p>
        {description == null
          ? 'Sem comentários'
          : truncateString(description, 200)}
      </p>
    </CardLayout>
  )
}
