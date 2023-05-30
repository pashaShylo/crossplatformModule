import calculateExp from "./calculateExp";

describe("calculateExp", () => {
    test("calculates the correct difference in days", () => {
        const inputDate = new Date("2022-01-01");
        const expectedDays = "514";

        const result = calculateExp(inputDate);

        expect(result).toBe(expectedDays);
    });

    test("returns 0 when the input date is the same as today", () => {
        const today = new Date();
        const result = calculateExp(today);

        expect(result).toBe("0");
    });

    // Add more test cases as needed
});
