import Koa, { HttpError } from "koa";
import bodyParser from "koa-bodyparser";
import { createWarehouse, testItem, testWarehouse, deleteWarehouse, updateWarehouse, createItem, deleteItem, updateItem, updateItemAddress, testUser, createUser, deleteUser, updateUser } from "./test";
import cors from "koa-cors";


function routesApi() {
  let app = new Koa();
  
  app.use(cors())
  app.use(bodyParser());
  app.use(async (ctx, next) => {
    try {
      await next();
    } catch (err: unknown) {
      if (err instanceof HttpError) {
        err.status = err.status || err.statusCode || 500;
        ctx.status = err.status;
        ctx.body = err;
        ctx.app.emit("error", err, ctx);
      }
    }
  });

  //warehouse stuff
  let warehouseAPI = testWarehouse();
  app.use(warehouseAPI.routes());
  app.use(warehouseAPI.allowedMethods());

  let createwarehouseAPI = createWarehouse();
  app.use(createwarehouseAPI.routes());
  app.use(createwarehouseAPI.allowedMethods());

  let deletewarehouseAPI = deleteWarehouse();
  app.use(deletewarehouseAPI.routes());
  app.use(deletewarehouseAPI.allowedMethods());

  let updatewarehouseAPI = updateWarehouse();
  app.use(updatewarehouseAPI.routes());
  app.use(updatewarehouseAPI.allowedMethods());

  //item stuff
  let itemAPI = testItem();
  app.use(itemAPI.routes());
  app.use(itemAPI.allowedMethods());

  let createitemAPI = createItem();
  app.use(createitemAPI.routes());
  app.use(createitemAPI.allowedMethods());

  let deleteitemAPI = deleteItem();
  app.use(deleteitemAPI.routes());
  app.use(deleteitemAPI.allowedMethods());

  let updateitemAPI = updateItem();
  app.use(updateitemAPI.routes());
  app.use(updateitemAPI.allowedMethods());

  let updateitemaddressAPI = updateItemAddress();
  app.use(updateitemaddressAPI.routes());
  app.use(updateitemaddressAPI.allowedMethods());

  //user stuff
  let userAPI = testUser();
  app.use(userAPI.routes());
  app.use(userAPI.allowedMethods());

  let createUserAPI = createUser();
  app.use(createUserAPI.routes());  
  app.use(createUserAPI.allowedMethods());

  let deleteuserAPI = deleteUser();
  app.use(deleteuserAPI.routes());
  app.use(deleteuserAPI.allowedMethods());

  let updateuserAPI = updateUser();
  app.use(updateuserAPI.routes());
  app.use(updateuserAPI.allowedMethods());

  return app;

}

export default routesApi;