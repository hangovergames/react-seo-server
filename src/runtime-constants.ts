// Copyright (c) 2021. Heusala Group Oy <info@heusalagroup.fi>. All rights reserved.

import { parseNonEmptyString } from "./fi/nor/ts/modules/lodash";
import LogLevel, { parseLogLevel } from "./fi/nor/ts/types/LogLevel";
import {
    BUILD_COMMAND_NAME,
    BUILD_LOG_LEVEL,
    BUILD_BACKEND_URL
} from "./build-constants";

export const BACKEND_LOG_LEVEL       : LogLevel = parseLogLevel(parseNonEmptyString(process?.env?.BACKEND_LOG_LEVEL) ?? parseNonEmptyString(BUILD_LOG_LEVEL)) ?? LogLevel.INFO ;
export const BACKEND_SCRIPT_NAME     : string   = parseNonEmptyString(process?.env?.BACKEND_SCRIPT_NAME)     ?? BUILD_COMMAND_NAME;
export const BACKEND_URL             : string   = parseNonEmptyString(process?.env?.BACKEND_URL)             ?? BUILD_BACKEND_URL;
export const BACKEND_PORT            : number | string | false   = normalizePort(process?.env?.PORT || '3000');

export const REACT_APP_DIR : string = parseNonEmptyString(process?.env?.REACT_APP_DIR) ?? `./build`;

/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort (val : string) : number | string | false {
    const port = parseInt(val, 10);
    if (isNaN(port)) return val;
    if (port >= 0) return port;
    return false;
}

