import Jimp from "jimp";
import { List } from 'void-list';
import { sortPalette } from "./UtilModule.js";
import { DecimalToHex } from 'binaries_convertions';

/**
 * Extract the palette from an image
 * @param {string} imageFile 
 * @returns {Promise<List<string>>}
 */
export async function extractPalette(imageFile) {

    /**
     * @type List<number>
     */
    let palette = new List();

    let texture = await Jimp.read(imageFile);

    for(let x = 0; x<texture.getWidth(); x++) {
        for(let y = 0; y<texture.getHeight(); y++) {
            let pixel_color = texture.getPixelColor(x, y);
            if(!palette.contain(pixel_color) && pixel_color !== 0) {
                palette.add(pixel_color);
            }
        }
    }

    let sortedPalette = sortPalette(palette).map(value => DecimalToHex(value));

    sortedPalette.removeIf(value => value == '0');

    let output = sortedPalette.map(value => {
        if(value.length < 8) {
            return `0xff0${value.substring(0, value.length-2)}`
        }
        else {
            return `0xff${value.substring(0, value.length-2)}`
        }
    })

    // reserve output so it's darkest to brightest and not the other way around
    output.reverse();
    
    return new Promise((resolve, reject) => resolve(output));
}