import { updateGist } from "../../util/gist/update"
import { GITHUB_TOKEN, GIST_ID } from "../config/index"

describe("gist 업데이트 테스트", () => {
  it("token, gistid 테스트", async () => {
    const response = await updateGist(GIST_ID, GITHUB_TOKEN)
    expect(response.status).toEqual(200)
  })
})
