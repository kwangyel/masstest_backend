import {Router} from 'express';
import structureController from '../controllers/structureController';

const router=Router();

router.get('/get-str/:zoneid',structureController.getStructureJson)
router.post('/create-str',structureController.createBuilding)
router.get('/markComplete/:bid',structureController.markComplete)
router.get('/markProgress/:id',structureController.markProgress)

export default router;