import {Router} from 'express';
import residentController from '../controllers/residentController';

const router=Router();

router.post('/create-resident',residentController.createResident)
router.get('/get-resident/:bid',residentController.getResidentBuilding)

export default router;