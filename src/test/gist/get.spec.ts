import { getRawUrl, getGist } from "../../util/gist/get"

describe("git get, update 테스트", () => {
  it("raw url 테스트", async () => {
    const gistId: string = "8759142b800011e43fd7c9a9d2c78682"
    let raw_url: string | null = null
    raw_url = await getRawUrl(gistId)
    expect(raw_url).not.toBeNull()
  })
  it("gist 내용 가져오기 테스트", async () => {
    const gistId: string = "8759142b800011e43fd7c9a9d2c78682"
    let data: string | null = null
    data = await getGist(gistId)
    expect(data).not.toBeNull()
  })
})
