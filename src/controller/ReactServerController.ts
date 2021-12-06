// Copyright (c) 2021. Heusala Group Oy <info@heusalagroup.fi>. All rights reserved.

import ResponseEntity from "../fi/nor/ts/request/ResponseEntity";
import PATH from "path";
import { FileSystemService } from "../services/FileSystemService";
import LogService from "../fi/nor/ts/LogService";
import StaticReactAppService from "../services/StaticReactAppService";

const LOG = LogService.createLogger('ReactServerController');

export default class ReactServerController {

    public static async handleReactRequest (
        url           : string,
        appDir        : string,
        App           : any,
        indexFileName : string = './index.html'
    ) : Promise<ResponseEntity<string>> {

        const indexFile = PATH.resolve(appDir, indexFileName);

        try {

            const htmlString : string = await FileSystemService.readTextFile(indexFile);

            const bodyString = ReactServerController._renderHtmlString(url, htmlString, App);

            return ResponseEntity.ok<string>().body( bodyString );

        } catch (err) {
            LOG.error(`Could not read "${indexFile}":`, err);
            return ResponseEntity.internalServerError<string>().body('Internal Server Error');
        }

    }

    private static _renderHtmlString (
        url: string,
        htmlString: string,
        App: any
    ) : string {

        const appString : string = StaticReactAppService.renderString(url, App);
        LOG.debug(`appString: `, appString);

        const rootDivId = 'root';

        return htmlString.replace(
            ReactServerController._createDivTag(rootDivId),
            ReactServerController._createDivTag(rootDivId, appString)
        );

    }

    private static _createDivTag (idName: string, content?: string) {
        return `<div id="${idName}">${content ? content : ''}</div>`;
    }

}
