import axios from "axios"

export const updateGist = async (gistId: string, token: string) => {
  const url = "https://api.github.com/gists"
  const data = JSON.stringify({
    files: {
      "todo.md": {
        filename: "todo.md",
        type: "text/markdown",
        language: "Markdown",
        truncated: true,
        content: "axios 테스트",
      },
      "todo.json": {
        filename: "todo.json",
        type: "application/json",
        language: "JSON",
        truncated: false,
        content: "{'filename':'hello.txt'}",
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
