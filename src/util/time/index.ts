export const calcTime = (): number => {
  const time = new Date()
  const hour = time.getHours()
  const minutes = time.getMinutes()

  if (minutes > 30) {
    return hour + 1
  }
  return hour
}
