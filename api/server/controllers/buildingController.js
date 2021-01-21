import buildingService from '../services/buildingService'
import Util from '../utils/Utils'
import { create } from 'domain';

const util=new Util();

class buildingController{
    

    static async getBuildingwithBid(req,res){
        const {bid} = req.params
        util.setData(null)

        try{
            const buildings = await buildingService.getBuildingWithBid(bid)
            if(buildings.length){
                util.setSuccess(200,"Got buildings")
                util.setData(buildings)
                return util.send(res)
            }
            util.setFailure(200,"No record found")
            return util.send(res)
        }catch(err){
            console.log(err)
            util.setError(200,"Error")
            return util.send(res)
        }
    }

    static async getABuilding(req,res){
        const {id} = req.params
        util.setData(null)

        try{
            const buildings = await buildingService.getABuilding(id)
            if(buildings){
                util.setSuccess(200,"got building")
                util.setData(buildings)
                return util.send(res)
            }
            util.setFailure(200,"No record found")
            return util.send(res)
        }catch(err){
            console.log(err)
            util.setError(200,"Error")
            return util.send(res)
        }
    }

    // static async updateBuilding(req,res){
    //     const building_id = req.body.building_id
    //     const data = req.body
    //     util.setData(null)
    //     if(!building_id){
    //         util.setError(400,"Building id is not set")
    //         return util.send(res)
    //     }

    //     try{
    //         const updateBuilding = await buildingService.updateBuilding(building_id,data)
    //         if(updateBuilding[0]==1){
    //             util.setSuccess(200,"updated building")
    //             return util.send(res)
    //         }
    //         util.setFailure(200,"Cannot update")
    //         return util.send(res)
    //     }catch(err){
    //         console.log(err)
    //         util.setError(400,"Error")
    //         return util.send(res)
    //     }
    // }
    
    static async createBuilding(req,res){
        util.setData(null)
        const data = req.body
        console.log(data)
        const structure_id= req.body.structure_id;
        const user_id = req.body.user_id;

        if(!structure_id || !user_id){
            util.setError(400,"Building id not set")
            return util.send(res)
        }
        
        try{
            const createBuilding = await buildingService.createBuilding(data)
            
            if(createBuilding){
                util.setSuccess(200,"created building")
                util.setData(createBuilding)
                return util.send(res)
            }
            util.setFailure(200,"Cannot create")
            return util.send(res)
        }catch(err){
            console.log(err)
            util.setError(200,"Error")
            return util.send(res)
        }
    }

    // static async deleteBuilding(req,res){
    //     const {id} = req.params
    //     util.setData(null)

    //     try{
    //         const deleteBuilding = await buildingService.deleteBuilding(id)
    //         if(deleteBuilding){
    //             util.setSuccess(200,"Deleted building")
    //             return util.send(res)
    //         }
    //         util.setFailure(200,"Cannot delete building")
    //         return util.send(res)
    //     }catch(err){
    //         console.log(err)
    //         util.setError(400,"Error")
    //         return util.send(res)
    //     }
    // }

}
export default buildingController;