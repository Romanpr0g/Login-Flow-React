import { createServer, Model } from "miragejs";

export function makeServer() {
  let server = createServer({
    models: {
      verificationCode: Model,
      team: Model,
    },

    routes() {
      this.namespace = "api";


      this.post("img", () => {
        // Вернуть тестовые данные или обработать запрос
        return { message: 'Success' };
      });

      this.get("/user", () => ({
        user: [{ id: 1, name: "Roman", surname: "Kachanov" }],
      }));

      this.get("/teams", (schema) => {
        return {
          teams: schema.db.teams,
        };
      });

      this.patch("/teams", (schema, request) => {
        const { id, name } = JSON.parse(request.requestBody);
        return schema.db.teams.update({ name: name });
      });

      this.get("/events", () => ({
        events: [
          {
            id: 1,
            event: "game",
            date: "17 May 2024",
            time: "4:00 PM",
            teamFirst: "RED",
            teamSecond: "WCT",
            tournament: "Spring Tourament",
            stadium: "KEZAR STADIUM",
            location: "670 Kezar Dr San Francisco, CA 94118",
          },
          {
            id: 2,
            event: "practice",
            date: "17 August 2024",
            time: "4:00 PM",
            teamFirst: "RED",
            teamSecond: "WCT",
            tournament: "Spring Tourament",
            stadium: "KEZAR STADIUM",
            location: "670 Kezar Dr San Francisco, CA 94118",
          },
          {
            id: 3,
            event: "social",
            date: "17 August 2024",
            time: "4:00 PM",
            teamFirst: "RED",
            teamSecond: "WCT",
            tournament: "Spring Tourament",
            stadium: "KEZAR STADIUM",
            location: "670 Kezar Dr San Francisco, CA 94118",
          },
          {
            id: 4,
            event: "game",
            date: "17 May 2024",
            time: "4:00 PM",
            teamFirst: "RED",
            teamSecond: "WCT",
            tournament: "Spring Tourament",
            stadium: "KEZAR STADIUM",
            location: "670 Kezar Dr San Francisco, CA 94118",
          },
          {
            id: 5,
            event: "practice",
            date: "17 May 2024",
            time: "4:00 PM",
            teamFirst: "RED",
            teamSecond: "WCT",
            tournament: "Spring Tourament",
            stadium: "KEZAR STADIUM",
            location: "670 Kezar Dr San Francisco, CA 94118",
          },
        ],
      }));

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
    teams: [
      { id: 1, name: "U8 Puffer", members: 24 },
      { id: 2, name: "Wildkard U12s", members: 24 },
      { id: 3, name: "U8 Puffer", members: 24 },
    ],
  });

  return server;
}
