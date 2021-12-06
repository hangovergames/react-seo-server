// Copyright (c) 2021. Heusala Group Oy <info@heusalagroup.fi>. All rights reserved.

import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";

export default class StaticReactAppService {

    public static renderString (
        url: string,
        App: any
    ) : string {

        return ReactDOMServer.renderToString(
            <StaticRouter location={url}>
                <App />
            </StaticRouter>
        );

    }

}
