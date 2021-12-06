// Copyright (c) 2021. Heusala Group Oy <info@heusalagroup.fi>. All rights reserved.

import ReactServerController from "./ReactServerController";
import ResponseEntity from "../fi/nor/ts/request/ResponseEntity";
import LogService from "../fi/nor/ts/LogService";
import { IncomingMessage, ServerResponse } from "http";

const LOG = LogService.createLogger('HttpServerController');

export default class HttpServerController {

    public static handleRequest (
        req    : IncomingMessage,
        res    : ServerResponse,
        appDir : string,
        App    : any
    ) {

        ReactServerController.handleReactRequest(
            req.url,
            appDir,
            App
        ).then( (response: ResponseEntity<string>) => {

            res.writeHead(response.getStatusCode());
            res.write(response.getBody());

        }).catch((err: any) => {

            LOG.error(`EXCEPTION: `, err);

            res.writeHead(500);
            res.write('Internal Server Error');

        });

    }

}
