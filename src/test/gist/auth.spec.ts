import { IsValid } from "../../gist/auth"

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
