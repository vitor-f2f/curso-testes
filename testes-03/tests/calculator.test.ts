import calculator from "calculator";

const a = 9;
const b = 3;

describe("arquivo testado", () => {
    it("returns sum of A = 9 and B = 3", () => {
        expect(calculator.sum(a, b)).toBe(a + b);
    });
    it("returns difference of A = 9 and B = 3", () => {
        expect(calculator.sub(a, b)).toBe(a - b);
    });
    it("returns product of A = 9 and B = 3", () => {
        expect(calculator.mul(a, b)).toBe(a * b);
    });
    it("returns division of A = 9 and B = 3", () => {
        expect(calculator.div(a, b)).toBe(a / b);
    });

});