// set up map, Koa framework (use npm) cors
/// download cors too for safety config, router for makes route in the service of api
// to reach what u're looking for
// router connects to controler, binds
// router helps find locations
// index is entry point, starts to database, first route is made. 
// abis itu go into the rest of hte routes binding

//downoad koa and cors

import Koa from "koa";
import Router from "koa-router";
import cors from "koa-cors";
import mount from "koa-mount";
import * as dotenv from "dotenv";

import { setupDB } from "./db";
import routesApi from "./router";

const app = new Koa();
app.use(cors());
dotenv.config();

const router = new Router();

async function start() {
  setupDB();
  router.get("/", async (ctx) => {
    ctx.body = "Please Redirect to Login Page";
  });

  app.use(router.routes()).use(router.allowedMethods());
  app.use(mount("/api", routesApi()));

  let host =
    process.env.NODE_ENV == "production"
      ? process.env.PRODHOST
      : process.env.DEVHOST;

  let port =
    process.env.NODE_ENV == "production"
      ? Number(process.env.PRODPORT)
      : Number(process.env.DEVPORT);

  app.listen(port, host || "localhost", () => {
    console.log(`Server is running at : ${host}:${port}`);
  });
  return app;
}

start();