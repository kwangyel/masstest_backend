import database from '../src/models';

class residentService{

    static async getResidentBuilding(bid){
        try{
            const resident= database.Resident.findAll({
                where:{building_id:Number(bid)}
            })
            return resident 
        }catch(err){
            throw err
        }
    }

    static async createResident(data){
        try{
            const resident = await database.Resident.create(data)
            return resident 
        }catch(error){
            throw error
        }
    }
}
export default residentService;