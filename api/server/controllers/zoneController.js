import userService from '../services/userService';
import zoneService from '../services/zoneService'
import Util from '../utils/Utils'

const util=new Util();

class zoneController{
    static async getAllDzongkhags(req,res){
        // TODO: filter the dzongkhags associated with users from here
        util.setData(null)
        try{
            const user = await userService.getAUser(req.decoded.cid)
            // console.log(user)
            const dzos = await zoneService.getAllDzongkhags(user.id)
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

    static async getZones(req,res){
        util.setData(null) 
        const {dzo} = req.params
        try{
            const zones = await zoneService.getZones(dzo)
            if(zones){
                util.setSuccess(200,"Retireved")
                util.setData(zones)
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

    static async getAllZones(req,res){
        util.setData(null)
        console.log(req.decoded)
        
        try{
            const subzones = await zoneService.getAllZones()
            if(subzones){
                util.setSuccess(200,"Retrieved")
                util.setData(subzones)
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

    static async getSubZones(req,res){
        util.setData(null)
        const {zoneid} = req.params
        
        try{
            const subzones = await zoneService.getSubzones(zoneid)
            if(subzones){
                util.setSuccess(200,"Retrieved")
                util.setData(subzones)
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
}
export default zoneController;