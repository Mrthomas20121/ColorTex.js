import { extractPalette } from "./modules/PaletteModule.js";
import { createFolder, sortPalette, decimalToRGB } from "./modules/UtilModule.js";
import { extract16xTextureFromImage } from "./modules/SeparationModule.js";

let paletteModule = {
    extractPalette
};

let utilModule = {
    createFolder, 
    sortPalette,
    decimalToRGB
};

let seperationModule = {
    extract16xTextureFromImage
};

export { paletteModule, utilModule, seperationModule };