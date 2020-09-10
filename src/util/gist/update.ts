import axios from "axios"
import { jsonToMd } from "./markdown"

export const updateGist = async (
  token: string,
  gistId: string,
  content: any
) => {
  const url = "https://api.github.com/gists"
  const data = JSON.stringify({
    files: {
      "todo.md": {
        filename: "todo.md",
        type: "text/markdown",
        language: "Markdown",
        content: jsonToMd(content),
      },
      "todo.json": {
        filename: "todo.json",
        type: "application/json",
        language: "JSON",
        content: JSON.stringify(content),
      },
    },
  })

  const config: any = {
    method: "patch",
    url: `https://api.github.com/gists/${gistId}`,
    headers: {
      Authorization: `token ${token}`,
      Accept: "application/vnd.github.v3+json",
      "Content-Type": "application/json",
    },
    data: data,
  }
  const res = await axios(config)
  return res
}
