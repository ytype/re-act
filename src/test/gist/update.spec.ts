import { updateGist } from "../../util/gist/update"
import { GITHUB_TOKEN, GIST_ID } from "../config/index"

describe("gist 업데이트 테스트", () => {
  it("token, gistid 테스트", async () => {
    const json = [
      { id: 0, content: "1234", done: true, time: 11 },
      { id: 1, content: "qwer", done: true, time: 11 },
      { id: 2, content: "asd", done: false, time: null },
    ]
    const response = await updateGist(GITHUB_TOKEN, GIST_ID, json)
    expect(response.status).toEqual(200)
  })
})
