import supertest from "supertest";

import app from "./../src/app";

const api = supertest(app);

describe("API test", () => {
    it("should return 200 when ask /health", async () => {
        const { status, text } = await api.get("/health");
        expect(status).toBe(200);
        expect(text).toBe("OK!");
    })

    it("should return 400 for invalid elements on GET /fibonacci", async () => {
        const response = await api.get(`/fibonacci?elements=${Number.MAX_VALUE + 1}`);
        expect(response.status).toBe(400);
    })

    it("should return Fibonacci sequence digits on GET /fibonacci", async () => {
        const response = await api.get(`/fibonacci?elements=5`)
        expect(response.status).toBe(200);
        expect(response.body).toEqual([0, 1, 1, 2, 3]);
    })
})