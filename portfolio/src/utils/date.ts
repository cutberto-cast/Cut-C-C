export function formatDate(date: Date | string): string {
  const d = new Date(date)
  return d.toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export function formatDateShort(date: Date | string): string {
  const d = new Date(date)
  return d.toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'short',
  })
}

export function formatRelativeTime(date: Date | string): string {
  const d = new Date(date)
  const now = new Date()
  const diffInSeconds = Math.floor((now.getTime() - d.getTime()) / 1000)

  if (diffInSeconds < 60) {
    return 'hace un momento'
  }

  const diffInMinutes = Math.floor(diffInSeconds / 60)
  if (diffInMinutes < 60) {
    return `hace ${diffInMinutes} minuto${diffInMinutes > 1 ? 's' : ''}`
  }

  const diffInHours = Math.floor(diffInMinutes / 60)
  if (diffInHours < 24) {
    return `hace ${diffInHours} hora${diffInHours > 1 ? 's' : ''}`
  }

  const diffInDays = Math.floor(diffInHours / 24)
  if (diffInDays < 30) {
    return `hace ${diffInDays} día${diffInDays > 1 ? 's' : ''}`
  }

  const diffInMonths = Math.floor(diffInDays / 30)
  if (diffInMonths < 12) {
    return `hace ${diffInMonths} mes${diffInMonths > 1 ? 'es' : ''}`
  }

  const diffInYears = Math.floor(diffInMonths / 12)
  return `hace ${diffInYears} año${diffInYears > 1 ? 's' : ''}`
}

export function getDateRange(startDate: Date | string, endDate?: Date | string): string {
  const start = new Date(startDate)
  const end = endDate ? new Date(endDate) : null

  const startFormatted = start.toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'short',
  })

  if (!end) {
    return `${startFormatted} - Presente`
  }

  const endFormatted = end.toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'short',
  })

  return `${startFormatted} - ${endFormatted}`
}
