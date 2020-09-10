import { jsonToMd } from "../../util/gist/markdown"

describe("마크다운 파싱 테스트", () => {
  it("jsonToMd 결과", () => {
    const json = [
      { id: 0, content: "1234", done: true, time: 11 },
      { id: 1, content: "qwer", done: true, time: 11 },
      { id: 2, content: "asd", done: false, time: null },
    ]

    const result = "- [x] 1234\n- [x] qwer\n- [ ] asd\n"
    const response = jsonToMd(json)
    expect(response).toEqual(result)
  })
})
