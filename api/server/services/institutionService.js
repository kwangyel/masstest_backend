import database from '../src/models';

class institutionService{

    static async getinstitution(bid){
        try{
            const inst= database.Institution.findAll({
                where:{building_id:Number(bid)}
            })
            return inst
        }catch(err){
            throw err
        }
    }

    static async createInstitution(data){
        try{
            const inst = await database.Institution.create(data)
            return inst
        }catch(error){
            throw error
        }
    }
}
export default institutionService;