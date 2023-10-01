import app from "index";
import supertest from "supertest";

const server = supertest(app)

describe("GET /health", () => {
    it("returns 200 when starting up server", async () => {
        const res = await server.get("/health");
        expect(res.status).toEqual(200);
    });
});