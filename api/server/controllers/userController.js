import userService from '../services/userService'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import Util from '../utils/Utils'
const util=new Util();

class userController{
    static async createHash(req,res){
        const saltrounds = 10
        const {pass} = req.params
        bcrypt.hash(pass,saltrounds,(err,hash)=>{
            res.send(hash) 
        })
    }
    // TODO: delete this afterwards
    static async getUser(req,res){
        util.setData(null)
        const {cid} = req.params
        try{
            const dzos = await userService.getAUser(cid)
            if(dzos){
                util.setSuccess(200,"Retireved")
                util.setData(dzos)
                return util.send(res)
            }
            util.setFailure(200,"Not found")
            return util.send(res)
        }catch(err){
            console.log(err)
            util.setError(400,"Error")
            return util.send(res)
        }
    }

    static async login(req,res){
        try{
            const cid = req.body.cid
            const password = req.body.password
            util.setData(null)
            
            if(cid && password){
                const userd = await userService.getAUser(cid)
                // const userd = (cid === "321" && password === "321") || (cid === "123" && password === "123")
                console.log(userd['password'])
                if(userd){
                    if(userd['password'] != password){
                        util.setFailure(200,"not authorized")
                        return util.send(res)
                    }
                    let token = jwt.sign({cid:cid,role:userd['role']},
                        process.env.SECRET_KEY,
                        {expiresIn:"24h"})
                    
                    util.setSuccess(200,"Logged in")
                    util.setData({
                        token:token,
                        username:userd['username'],
                        id:userd['id'],
                    })
                    return util.send(res)
                }
                util.setFailure(200,"username or password incorrect")
                return util.send(res)

                // bcrypt.compare(password,user['password'],(err,ismatch)=>{
                //     if(err){
                //         console.log(err)
                //         util.setError(400,"an error occured")
                //         return util.send(res)
                //     }
                //     if(ismatch){
                //         util.setSuccess(200,"Logged in")
                //         util.setData({
                //             token:token,
                //             username:user['username'],
                //             id:user['id'],
                //         })
                //         return util.send(res)
                //     }else{
                //         util.setFailure(200,"username or password incorrect")
                //         return util.send(res)
                //     }
                // })
            }else{
                util.setError(400,"username or password not set")
                return util.send(res)
            }
        }catch(error){
            console.log(error)
            util.setError(400,"An error occured")
            return util.send(res)
        }
    }
}

export default userController;