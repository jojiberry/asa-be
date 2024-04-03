class ItemModel{
    skucode!: number;
    item_name!: string;
    height!: number;
    width!: number;
    length!: number;
    threed_obj!: string;
    warehouseId!: number;
    user_id! : number
}

class ItemDelete{
    id!:number;
    user_id! : number
}

class ItemUpdate{
    id!: number;
    skucode!: number;
    item_name!: string;
    height!: number;
    width!: number;
    length!: number;
    threed_obj!: string;
    updated!: Date;
    warehouseId!: number;
    user_id! : number
}

class ItemUpdateAddress{
    id!: number;
    user_id! : number
    threed_obj!: string;
}

export {ItemModel, ItemDelete, ItemUpdate, ItemUpdateAddress}
