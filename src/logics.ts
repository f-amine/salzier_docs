import dayjs from 'dayjs'
// Ensure needed locales are available at runtime
import 'dayjs/locale/es'
import 'dayjs/locale/ar'

function toDayjsLocale(lang?: string): string | undefined {
  if (!lang)
    return undefined
  // Map e.g. 'es-ES' -> 'es'
  return lang.toLowerCase().split('-')[0]
}

export function formatDate(d: string | Date, onlyDate = true, lang?: string): string {
  const date = dayjs(d).locale(toDayjsLocale(lang))
  if (onlyDate || date.year() === dayjs().year())
    return date.format('MMM D')
  return date.format('MMM D, YYYY')
}
