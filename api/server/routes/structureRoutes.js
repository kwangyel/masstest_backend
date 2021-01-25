import {Router} from 'express';
import structureController from '../controllers/structureController';
import authorize from '../middlewares/authorize'

const router=Router();

router.get('/get-str/:zoneid',structureController.getStructureJson)
router.post('/create-str',authorize("EDIT"), structureController.createBuilding)
router.get('/markComplete/:bid',authorize("EDIT"),structureController.markComplete)
router.get('/markProgress/:id',authorize("EDIT"),structureController.markProgress)
router.post('/setRemarks',authorize("EDIT"),structureController.setRemarks)

export default router;