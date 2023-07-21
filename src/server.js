import * as jsonServer from "json-server";
import nocache from "nocache";

const server = jsonServer.default.create();
const router = jsonServer.default.router("./src/assets/db.json");
const middlewares = jsonServer.default.defaults();

server.use(middlewares);
server.use(router);
server.use(nocache());
server.listen(8000, () => {
  console.log("Json server is running");
});
