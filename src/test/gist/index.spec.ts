import { getRawUrl, getGist } from "../../util/gist/index"
import { IsValid } from "../../util/gist/index"

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

const removelocalStorageItem = () => {
  localStorage.removeItem("key")
  localStorage.removeItem("ghToken")
  localStorage.removeItem("gistId")
}

describe("token, gistId 저장 확인", () => {
  it("jest localStorage 테스트", () => {
    removelocalStorageItem()
    localStorage.setItem("key", "test")
    const sample = localStorage.getItem("key")
    expect(sample).toEqual("test")
  })
  it("ghToken, gistId 저장 테스트", () => {
    removelocalStorageItem()
    localStorage.setItem("ghToken", "test")
    localStorage.setItem("gistId", "test")
    expect(IsValid()).toEqual(true)
  })
  it("ghToken만 저장 테스트", () => {
    removelocalStorageItem()
    localStorage.setItem("ghToken", "test")
    expect(IsValid()).toEqual(false)
  })
  it("gistId만 저장 테스트", () => {
    removelocalStorageItem()
    localStorage.setItem("gistId", "test")
    expect(IsValid()).toEqual(false)
  })
  it("데이터가 없을 때", () => {
    removelocalStorageItem()
    expect(IsValid()).toEqual(false)
  })
})
