import {Router} from 'express';
import schoolController from '../controllers/schoolController';

const router=Router();

router.post('/create-school',schoolController.createSchool)
router.get('/get-school/:bid',schoolController.getSchoolBuilding)

export default router;