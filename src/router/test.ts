import Router from "koa-router";
import { WarehouseController, ItemController, UserController} from "../controller/test";
import { ItemUpdateAddress } from "../model/items";

const TEST_PATH = "/test";


// function testrouter() {
//   let router = new Router({ prefix: TEST_PATH });
//   let controller = new ItemController();

//   router.get("/data", controller.getItem.bind(controller));
//   return router;
// }
  

//warehouse routing
function testWarehouse() {
  let router = new Router({ prefix: "/warehouse" });
  let controller = new WarehouseController();

  router.get("/warehouse", controller.getWarehouse.bind(controller));
  return router;
}

function createWarehouse() {
  let router = new Router({ prefix: "/warehouse" });
  let controller = new WarehouseController();

  router.post("/create", controller.createWarehouse.bind(controller));
  return router;
}

function deleteWarehouse() {
  let router = new Router({ prefix: "/warehouse" });
  let controller = new WarehouseController();

  router.delete("/delete", controller.deleteWarehouse.bind(controller));
  return router;
}

function updateWarehouse() {
  let router = new Router({ prefix: "/warehouse" });
  let controller = new WarehouseController();

  router.put("/update", controller.updateWarehouse.bind(controller));
  return router;
}



//item routing
function testItem() {
  let router = new Router({ prefix: "/item" });
  let controller = new ItemController();

  router.get("/data", controller.getItem.bind(controller));
  return router;
}

function createItem() {
  let router = new Router({ prefix: "/item" });
  let controller = new ItemController();

  router.post("/create", controller.createItem.bind(controller));
  return router;
}

function updateItem() {
  let router = new Router({ prefix: "/item" });
  let controller = new ItemController();

  router.put("/update", controller.updateItem.bind(controller));
  return router;
}

function updateItemAddress() {
  let router = new Router({ prefix: "/item" });
  let controller = new ItemController();

  router.put("/updateaddress", controller.updateItemAddress.bind(controller));
  return router;
}

function deleteItem() {
  let router = new Router({ prefix: "/item" });
  let controller = new ItemController();

  router.delete("/delete", controller.deleteItem.bind(controller));
  return router;
}


// user routing
function testUser() {
  let router = new Router({ prefix: "/user" });
  let controller = new UserController();

  router.get("/data", controller.getUser.bind(controller));
  return router;
}

function createUser() {
  let router = new Router({ prefix: "/user" });
  let controller = new UserController();

  router.post("/create", controller.createUser.bind(controller));
  return router;
}

function updateUser () {
  let router = new Router({ prefix: "/user" });
  let controller = new UserController();

  router.put("/update", controller.updateUser.bind(controller));
  return router;
}

function deleteUser() {
  let router = new Router({ prefix: "/user" });
  let controller = new UserController();

  router.delete("/delete", controller.deleteUser.bind(controller));
  return router;
}

export { testItem, createWarehouse, testWarehouse, deleteWarehouse, updateWarehouse, createItem, deleteItem, updateItem, updateItemAddress, testUser, createUser, deleteUser, updateUser };

