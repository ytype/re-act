export const IsValid = () => {
  const ghToken = localStorage["ghToken"]
  const gistId = localStorage["gistId"]
  if (!ghToken || !gistId) {
    return false
  } else {
    return true
  }
}
