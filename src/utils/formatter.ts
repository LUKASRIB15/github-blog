import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export function truncateString(description: string, maxLength: number) {
  if (description.length <= maxLength) {
    return description
  }
  return description.substring(0, maxLength) + '...'
}

export function formattedDate(date: string) {
  return formatDistanceToNow(new Date(date), {
    addSuffix: true,
    locale: ptBR,
  })
}
