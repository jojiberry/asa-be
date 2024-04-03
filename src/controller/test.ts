// all new functions are under here, everything runs here, router j connects it
import { Context } from "koa";
import { StatusCodes, getReasonPhrase } from "http-status-codes";
import { errorResponse, successResponse } from "../utils/responses";
import { WarehouseDelete, WarehouseModel, WarehouseUpdate } from "../model/warehouses";
import { ItemModel, ItemDelete, ItemUpdate , ItemUpdateAddress } from "../model/items";
import { UserModel, UserDelete, UserUpdate } from "../model/users";
import { RequestInvalidError } from "../error/request-invalid";




class WarehouseController {
  public async getWarehouse(context : Context) {
    const data = await prisma.warehouse.findMany({})
    return successResponse(context, {data: data}, StatusCodes.OK);
  }   
  public async createWarehouse(context : Context) {
    try{
      let payload = context.request.body as WarehouseModel;
      let data = await prisma.warehouse.create({data:payload})

      return successResponse(context, {data: data}, StatusCodes.OK);
    }
    catch(error){
      if (error instanceof RequestInvalidError){
        return errorResponse(
          context,
          { error: error.message },
          StatusCodes.BAD_REQUEST
        );
      }
      return errorResponse(
        context,
        {
          error: getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR)
        }
      )
    }
  }   
  public async deleteWarehouse(context : Context) {
    try{
      let warehouseiddelete = context.request.body as WarehouseDelete;
      console.log(warehouseiddelete)
      let data = await prisma.warehouse.delete({where:({
        id:warehouseiddelete.id
      })})

      return successResponse(context, {data: data}, StatusCodes.OK);
    }
    catch(error){
      if (error instanceof RequestInvalidError){
        return errorResponse(
          context,
          { error: error.message },
          StatusCodes.BAD_REQUEST
        );
      }
      return errorResponse(
        context,
        {
          error: getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR)
        }
      )
    }
  }    
  public async updateWarehouse(context : Context) {
    try{
      let payload = context.request.body as WarehouseUpdate;
      console.log(payload)
      let data = await prisma.warehouse.update({
        where: {
          id: payload.id,
        },
        data: {
          location: payload.location,
          height: payload.height,
          width: payload.width,
          length: payload.length,
        },
      })

      return successResponse(context, {data: data}, StatusCodes.OK);
    }
    catch(error){
      if (error instanceof RequestInvalidError){
        return errorResponse(
          context,
          { error: error.message },
          StatusCodes.BAD_REQUEST
        );
      }
      return errorResponse(
        context,
        {
          error: getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR)
        }
      )
    }
  }   
}

class ItemController {
  public async getItem(context : Context) {
      const data = await prisma.item.findMany({})
      return successResponse(context, {data: data}, StatusCodes.OK);
    }
  public async createItem(context : Context) {
      try{
        let payload = context.request.body as ItemModel;
        let data = await prisma.item.create({data: ({
          skucode: payload.skucode,
          item_name:payload.item_name,
          height:payload.height,
          width: payload.width,
          length:payload.length,
          threed_obj:payload.threed_obj,
          warehouseId: payload.warehouseId,
        })})
  
        console.log(data.id)
        
        let date = new Date()
        await prisma.logger.create({
          data:({
            id_user: payload.user_id,
            id_item: data.id,
            time : date
          })
        })
        return successResponse(context, {data: data}, StatusCodes.OK);
      }
  
      catch(error){
        console.log(error)
        if (error instanceof RequestInvalidError){
          return errorResponse(
            context,
            { error: error.message },
            StatusCodes.BAD_REQUEST
          );
        }}
        
        return errorResponse(
          context,
          {
            error: getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR)
          }
        )
    }
  public async deleteItem(context : Context) {
        try{
          let itemiddelete = context.request.body as ItemDelete;
          console.log(itemiddelete)
    
          let data = await prisma.item.update({
            where:{id: itemiddelete.id},
            data:{
              expiration_date : new Date()
            }
          })
    
          
          let date = new Date()
          await prisma.logger.create({
            data:({
              id_user: itemiddelete.user_id,
              id_item: data.id,
              time: date
            })
          })
    
          return successResponse(context, {data: data}, StatusCodes.OK);
        }
        catch(error){
          console.log
          if (error instanceof RequestInvalidError){
            return errorResponse(
              context,
              { error: error.message },
              StatusCodes.BAD_REQUEST
            );
          }
          return errorResponse(
            context,
            {
              error: getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR)
            }
          )
        }
    } 
  public async updateItem(context : Context) {
      try{
        let payload = context.request.body as ItemUpdate;
        console.log(payload)
        let data = await prisma.item.update({
          where: {
            id: payload.id,
          },
          data: {
            skucode: payload.skucode,
            item_name:payload.item_name,
            height:payload.height,
            width: payload.width,
            length:payload.length,
            threed_obj:payload.threed_obj,
            warehouseId: payload.warehouseId,
          },})
  
        let date = new Date()
        await prisma.logger.create({
          data:({
            id_user: payload.user_id,
            id_item: data.id,
            time : date
          })
        })
  
        return successResponse(context, {data: data}, StatusCodes.OK);
      }
      catch(error){
        if (error instanceof RequestInvalidError){
          return errorResponse(
            context,
            { error: error.message },
            StatusCodes.BAD_REQUEST
          );
        }
        return errorResponse(
          context,
          {
            error: getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR)
          }
        )
      }
    }   
  public async updateItemAddress(context : Context) {
      try{
        let payload = context.request.body as ItemUpdateAddress;
        console.log(payload)
        let data = await prisma.item.update({
          where: {
            id: payload.id,
          },
          data: {
            threed_obj: payload.threed_obj,
          },})
  
        let date = new Date()
        await prisma.logger.create({
          data:({
            id_user: payload.user_id,
            id_item: data.id,
            time : date
          })
        })
  
        return successResponse(context, {data: data}, StatusCodes.OK);
      }
      catch(error){
        if (error instanceof RequestInvalidError){
          return errorResponse(
            context,
            { error: error.message },
            StatusCodes.BAD_REQUEST
          );
        }
        return errorResponse(
          context,
          {
            error: getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR)
          }
        )
      }
    }   
}

class UserController {
  public async getUser(context : Context) {
      const data = await prisma.user.findMany({})
      return successResponse(context, {data: data}, StatusCodes.OK);
    }
  public async createUser(context : Context) {
      try{
        let date = new Date()
        
        let payload = context.request.body as UserModel;
        console.log(Date())
        let data = await prisma.user.create({data: payload})
        return successResponse(context, {data: {
          id: payload.id,
          username: payload.username,
          password: payload.password,
          timelogged: date,
          rndm: payload.rndm
        }}, StatusCodes.OK);
      }
      catch(error){
        if (error instanceof RequestInvalidError){
          return errorResponse(
            context,
            { error: error.message },
            StatusCodes.BAD_REQUEST
          );
        }
        return errorResponse(
          context,
          {
            error: getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR)
          }
        )
      }
    }  
  public async deleteUser(context : Context) {
      try{
        let useriddelete = context.request.body as UserDelete;
        console.log(useriddelete)
        let data = await prisma.user.delete({where:({
          id:useriddelete.id
        })})
  
        return successResponse(context, {data: data}, StatusCodes.OK);
      }
      catch(error){
        if (error instanceof RequestInvalidError){
          return errorResponse(
            context,
            { error: error.message },
            StatusCodes.BAD_REQUEST
          );
        }
        return errorResponse(
          context,
          {
            error: getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR)
          }
        )
      }
    }   
  public async updateUser(context : Context) {
      try{
        let date = new Date()
        let payload = context.request.body as UserUpdate;
        console.log(payload)
        let data = await prisma.user.update({
          where: {
            id: payload.id,
          },
          data: {
            username: payload.username,
            password: payload.password,
            timelogged: date,
            rndm: payload.rndm
          },
        })
        return successResponse(context, {data: data}, StatusCodes.OK);
      }
      catch(error){
        if (error instanceof RequestInvalidError){
          return errorResponse(
            context,
            { error: error.message },
            StatusCodes.BAD_REQUEST
          );
        }
        return errorResponse(
          context,
          {
            error: getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR)
          }
        )
      }
    }      
}


export { WarehouseController, ItemController, UserController };
