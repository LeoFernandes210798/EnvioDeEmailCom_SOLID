import { Router } from "express";
import { createUserController } from "./useCAses/createUser";

const router = Router(); 

router.post("/createUSer", ( request , response) =>{
    return createUserController.handle(request ,response)
})

export { router };