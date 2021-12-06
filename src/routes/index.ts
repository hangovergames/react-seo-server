// Copyright (c) 2021. Heusala Group Oy <info@heusalagroup.fi>. All rights reserved.

import express from 'express';
import HttpServerController from "../controller/HttpServerController";
import { REACT_APP_DIR } from "../runtime-constants";
import TestApp from "../TestApp";

const router = express.Router();

router.get(
    '/',
    (req : express.Request  , res: express.Response, next) => {
        HttpServerController.handleRequest(req, res, REACT_APP_DIR, TestApp);
    }
);

export default router;
