import * as moduleB from "./moduleB"
// @ponicode
describe("moduleB.default.intro", () => {
    test("0", () => {
        let callFunction: any = () => {
            moduleB.default.intro()
        }
    
        expect(callFunction).not.toThrow()
    })
})
