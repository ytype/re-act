import * as get from "./get"
// @ponicode
describe("get.getRawUrl", () => {
    test("0", async () => {
        await get.getRawUrl(12345)
    })

    test("1", async () => {
        await get.getRawUrl(9876)
    })

    test("2", async () => {
        await get.getRawUrl("c466a48309794261b64a4f02cfcc3d64")
    })

    test("3", async () => {
        await get.getRawUrl("da7588892")
    })

    test("4", async () => {
        await get.getRawUrl("bc23a9d531064583ace8f67dad60f6bb")
    })

    test("5", async () => {
        await get.getRawUrl("")
    })
})

// @ponicode
describe("get.getGist", () => {
    test("0", async () => {
        await get.getGist("bc23a9d531064583ace8f67dad60f6bb")
    })

    test("1", async () => {
        await get.getGist("c466a48309794261b64a4f02cfcc3d64")
    })

    test("2", async () => {
        await get.getGist(12345)
    })

    test("3", async () => {
        await get.getGist("da7588892")
    })

    test("4", async () => {
        await get.getGist(9876)
    })

    test("5", async () => {
        await get.getGist("")
    })
})
