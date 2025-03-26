import { paletteModule, utilModule, seperationModule } from './index.js';

/**
 * get N for tinkers ARGB
 * @param {number} index 
 */
function getNFromIndex(index) {
    let value = 0;
    switch (index) {
        case 0 : {
            value = 63;
            break;
        }
        case 1: {
            value = 102;
            break;
        }
        case 2 : {
            value = 140;
            break;
        }
        case 3 : {
            value = 178;
            break;
        }
        case 4 : {
            value = 216;
            break;
        }
        case 5 : {
            value = 255;
            break;
        }
    }

    return value;
}

async function main() {

    let materials = [
        'abyssal',
        'dragonsteel',
        'shellite',
        'twinite',
        'soul_infused'
    ]

    for(let material of materials) {
        let result = await paletteModule.extractPalette(`../../MinecraftMods/ThermalExtra/src/main/resources/assets/thermal_extra/textures/item/${material}_ingot.png`);

        // remove the first two values as we do not need them for this
        result.removeIf((value, index) => index == 0 || index == 1);

        console.log(material + ' : ' + result.map((value, index) => {
            let n = getNFromIndex(index);
            return `.addARGB(${n}, ${value.toUpperCase()})`
        }).join(''));
    }
}

main();