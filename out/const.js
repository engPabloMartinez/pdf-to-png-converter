"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DOCUMENT_INIT_PARAMS_DEFAULTS = exports.PDF_TO_PNG_OPTIONS_DEFAULTS = void 0;
const node_path_1 = require("node:path");
exports.PDF_TO_PNG_OPTIONS_DEFAULTS = {
    viewportScale: 1,
    disableFontFace: true,
    useSystemFonts: false,
    enableXfa: false,
    outputFileMask: 'buffer',
    strictPagesToProcess: false,
    pdfFilePassword: undefined,
};
exports.DOCUMENT_INIT_PARAMS_DEFAULTS = {
    cMapUrl: (0, node_path_1.join)(__dirname, '../../../node_modules/pdfjs-dist/cmaps/'),
    cMapPacked: true,
    standardFontDataUrl: (0, node_path_1.join)(__dirname, '../../../node_modules/pdfjs-dist/standard_fonts/'),
};
//# sourceMappingURL=const.js.map