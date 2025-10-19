import {describe, it, expect} from "vitest"
import request from "supertest"
import { app } from ".."

describe("POST /sum", () => {
  it("should return the sum of two numbers", async () => {
    const response = await request(app).post("/sum").send({
      a: 5,
      b: 10,
    });
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ answer: 15, id: expect.any(Number) });
  });
});