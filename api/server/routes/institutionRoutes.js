import {Router} from 'express';
import institutionController from '../controllers/institutionController';

const router=Router();

router.post('/create-institution',institutionController.createInstitution)
router.get('/get-institution/:bid',institutionController.getInstitutionBuilding)

export default router;