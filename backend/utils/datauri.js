import DataUriParser from "datauri/parser.js"

import path from "path";

const getDataUri = (file) => {
    const parser = new DataUriParser();
    const extName = path.extname(file.originalname).toString();   //getting extension name
    return parser.format(extName, file.buffer);    //converting to base 64 format neccessary for uploading of data
}

export default getDataUri;