const request = require("supertest");
const jwt = require("jsonwebtoken");

const { env } = require("../../src/helper/config");
const { deleteAllUserFromDB } = require("../../src/db/api/users");

describe("Registration User API /api/register", () => {
  let server;

  beforeEach(() => {
    server = require("../../src/index");
  });

  afterEach(async () => {
    await deleteAllUserFromDB();
    await server.close();
  });

  describe("POST /", () => {
    let name;

    beforeEach(() => {
      name = "testUser1";
    });

    const exec = async () => {
      const testUser = {
        name,
        password: "password1",
        email: "testEmail1@test.com",
      };

      return await request(server).post("/api/register").send(testUser);
    };

    it("should return authentication token if registration successes.", async () => {
      const response = await exec();
      console.log("response: ", response.headers);
      expect(response.status).toBe(200);
    });

    it("should return 400 if invalid input provided", async () => {
      name = "";

      const response = await exec();
      expect(response.status).toBe(400);
    });

    it("should return created user if valid provided ", async () => {
      const response = await exec();
      expect(response.body.name).toMatch(name);
    });
  });
});
