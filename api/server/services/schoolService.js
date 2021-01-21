import database from '../src/models';

class schoolService{

    static async getSchoolBuilding(bid){
        try{
            const school = database.School.findAll({
                where:{building_id:Number(bid)}
            })
            return school 
        }catch(err){
            throw err
        }
    }

    static async createSchool(data){
        try{
            const school = await database.School.create(data)
            return school 
        }catch(error){
            throw error
        }
    }
}
export default schoolService;