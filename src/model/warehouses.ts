class WarehouseModel{
    id!: number;
    location!: string;
    height!: number;
    width!: number;
    length!: number;
}

class WarehouseDelete{
    id!:number;
}

class WarehouseUpdate{
    id!: number;
    location!: string;
    height!: number;
    width!: number;
    length!: number;
}

export {WarehouseModel, WarehouseDelete, WarehouseUpdate}
