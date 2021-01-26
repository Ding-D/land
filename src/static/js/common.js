import d from 'dayjs'

export function parseDateStr(date, format) {
  format = format || 'YYYY-MM-DD HH:mm:ss'
  return d(date).format(format)
}
