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

export const updateGist = async (gistId: string, token: string) => {
  const url = "https://api.github.com"
  const data = JSON.stringify({
    description: "Hello World Examples",
    files: {
      "hello_world_ruby.txt": {
        content:
          "Run `ruby hello_world.rb` or `python hello_world.py` to print Hello World",
        filename: "hello_world.md",
      },
      "hello_world_python.txt": null,
      "new_file.txt": {
        content: "This is a new placeholder file.",
      },
    },
  })
}
