import database from '../src/models';
import user from '../src/models/user';

class zoneService{
    static async getAllDzongkhags(uid){
        try{
            const dzos = await database.Dzongkhag.findAll({
                include:[ {
                    model:database.User,
                    as: 'users',
                    attributes:['cid','id'],
                    // where:{userId:1}
                    where:{id:uid}
                }],
            });
            return dzos
        }catch(err){
            throw err
        }
    }

    static async getZones(dzoid){
        try{
            const zones = await database.Zone.findAll({
                where:{dzongkhag_id:Number(dzoid)}
            })
            return zones
        }catch(err){
            throw err
        }
    }

    static async getAllZones(){
        try{
            const subzones = await database.Subzone.findAll({
                order: [['sequence','ASC']]
            })
            return subzones
        }catch(err){
            throw err
        }
    }

    static async getSubzones(zoneid){
        try{
            const subzones = await database.Subzone.findAll({
                where:{zone_id:Number(zoneid)},
                order:[['name','ASC']]
            })
            return subzones
        }catch(err){
            throw err
        }
    }
}
export default zoneService;