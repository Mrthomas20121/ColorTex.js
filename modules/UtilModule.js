import { existsSync, mkdirSync } from 'fs';
import { List } from 'void-list';

/**
 * create a path if it doesn't exists
 * @param {string} p 
 * @param {string} f 
 * @returns {string}
 */
export function createFolder(p, f) {
    if(!existsSync(p)) {
        mkdirSync(p, {
            recursive: true
        });
    }

    return path.join(p, f);
}

/**
 * sort a palette by rgb values
 * @param {List<number>} palette 
 * @returns {List<number>}
 */
export function sortPalette(palette) {
    // map to rgb values while keeping the original value inside
    let map = palette.map((value, index, arr) => {
        let data = decimalToRGB(value);

        data.value = value;

        return data;
    });

    // sort by sum(rgb)
    map.sort((a,b) => b.max-a.max);

    // map again to get the value back
    return map.map((value, index, arr) => value.value);
}

/**
 * convert a decimal to RGB values
 * @param {number} integer 
 * @returns 
 */
export function decimalToRGB(integer) {
    var b = integer % 256,
        g_0 = (integer % 65536 - b),
        r_0 = integer - g_0 - b,
        g = g_0 / 256,
        r = r_0 / 65536;

    return {
        r,
        g,
        b,
        max:r+g+b
    };
}