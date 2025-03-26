import Jimp from "jimp";

export async function extract16xTextureFromImage(fileName, saveFile, x=0, y=16) {
    let mainTexture = await Jimp.read(fileName);

    mainTexture.crop(x, y, 16, 16).writeAsync(saveFile);
}