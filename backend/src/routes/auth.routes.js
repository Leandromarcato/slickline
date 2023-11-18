import { Router } from "express";
const authRoutes = Router();
import middlewares from '../middlewares/index.js';
import * as authCtrl from '../controllers/auth.controller.js';
import {isAdmin} from '../middlewares/admin.js'
authRoutes.post('/register',
 [middlewares.verifySignup.checkDuplicateUsernameOrEmail, middlewares.verifySignup.checkRolesExisted],
  authCtrl.signUp);

authRoutes.post('/login', authCtrl.signIn);

authRoutes.post('/grantRoles',authCtrl.grantRoles,isAdmin);


export default authRoutes;
