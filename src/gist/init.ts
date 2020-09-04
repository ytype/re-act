import axios from "axios"

export async function getGist(gistId: string) {
  const url = "https://api.github.com/gists"
  let raw_url = ""
  await axios.get(`${url}/${gistId}`).then((response) => {
    const files: any = response.data.files
    const fileName: string = Object.keys(files)[0]
    raw_url = files[fileName].raw_url
  })

  await axios.get(raw_url).then((response) => {
    console.log(response.data)
  })
}
