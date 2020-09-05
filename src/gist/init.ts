import axios from "axios"

const getRawUrl = async (gistId: string) => {
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
  await axios.get(raw_url).then((response) => {
    return !!response.data
  })
}
