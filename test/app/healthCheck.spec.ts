import request from "supertest";

import app from "../../src/app"

describe("Health Check", () => {
  it("should return 200", async () => {
    const response = await request(app).get("/healthCheck");
    expect(response.status).toBe(200);
    expect(response.body).toEqual({message: "🟢 API is healthy 🚀"})
  });
});