// Copyright (c) 2021. Heusala Group Oy <info@heusalagroup.fi>. All rights reserved.
import main from "./fi/hangovergames/ssr/mainFunction";
main(process.argv).then((status : number) => {
    process.exit(status);
}).catch((err : any) => {
    console.error(`Error: `, err);
    process.exit(1);
});
