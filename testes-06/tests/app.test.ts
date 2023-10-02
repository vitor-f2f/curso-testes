import supertest from "supertest";

import app from "./../src/app";

const api = supertest(app);

describe("Testing API", () => {
    it("GET /event", async () => {
        const result = await api.get("/event");
        console.log(result.body);
        expect(result.status).toBe(200);
        expect(result.body).toEqual(
            expect.objectContaining({
                id: expect.any(Number),
                title: expect.any(String),
                image: expect.any(String),
                date: expect.any(String)
            })
        )
    })
});