import * as custumerService from "../services/custumer_service.js";

export async function addCustumer(req,res){
    const user=await custumerService.addUserService(req.body);
    res.json(user);
}

export async function login(req,res){
    const result=await custumerService.loginService(req.body);
    if(result){
        res.json({message:"connected with success"})
    }else{
        res.json({message:"email or password not correct"})
    }
}
