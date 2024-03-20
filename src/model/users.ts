class UserModel{
    id!: number;
    username!: string;
    password!: string;
    timelogged!: Date;
    rndm!: string
}

class UserDelete{
    id!:number;
}


class UserUpdate{
    id!: number;
    username!: string;
    password!: string;
    rndm!: string
}

export {UserModel, UserDelete, UserUpdate}
