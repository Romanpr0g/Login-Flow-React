import { createServer, Model } from "miragejs";

export function makeServer() {
  let server = createServer({
    models: {
      verificationCode: Model,
    },

    routes() {
      this.namespace = "api";

      this.get("/verification-codes", (schema) => {
        return schema.verificationCodes.all();
      });

      this.post("/verify-otp", (schema, request) => {
        const { code } = JSON.parse(request.requestBody);
        const verificationCode = schema.verificationCodes.findBy({
          code: parseInt(code),
        });

        return verificationCode
          ? { success: true }
          : { success: false, error: "Invalid OTP" };
      });
    },
  });

  server.db.loadData({
    verificationCodes: [
      { id: 1, code: 11111 },
      { id: 2, code: 22222 },
      { id: 3, code: 33333 },
      { id: 4, code: 44444 },
      { id: 5, code: 55555 },
    ],
  });

  return server;
}
