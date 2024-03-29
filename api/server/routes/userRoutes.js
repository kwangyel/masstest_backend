import {Router} from 'express';
import userController from '../controllers/userController';

const router=Router();

router.post('/login',userController.login)
router.get('/getuser/:cid',userController.getUser)
router.get('/gethash/:pass',userController.createHash)

export default router;
