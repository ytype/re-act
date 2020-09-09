import axios from "axios"

export const getRawUrl = async (gistId: string) => {
  const url = "https://api.github.com/gists"
  let raw_url = ""
  await axios.get(`${url}/${gistId}`).then((response) => {
    const files: any = response.data.files
    const fileName: string = Object.keys(files)[0]
    raw_url = files[fileName].raw_url
  })
  return raw_url
}

export const getGist = async (gistId: string) => {
  const raw_url = await getRawUrl(gistId)
  let data = ""
  await axios.get(raw_url).then((response) => {
    data = response.data
  })
  return data
}

export const IsValid = () => {
  const ghToken = localStorage["ghToken"]
  const gistId = localStorage["gistId"]
  if (ghToken && gistId) {
    return true
  } else {
    return false
  }
}
