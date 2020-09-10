import axios from "axios"

export const getRawUrl = async (gistId: string) => {
  const url = "https://api.github.com/gists"
  let raw_url = ""
  await axios.get(`${url}/${gistId}`).then((response) => {
    const files: any = response.data.files
    const fileName: string = "todo.json"
    try {
      raw_url = files[fileName].raw_url
    } catch {
      throw new Error("todo.json이 없음")
    }
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
