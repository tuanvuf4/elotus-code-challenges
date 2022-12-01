export const shortText = (text: string, size = 20) => {
  const total = text.split(' ')
  if (total.length > size) {
    return total.splice(0, size).join(' ') + '...'
  }
  return text
}