const compareImages = require("resemblejs/compareImages");
const fs = require("mz/fs");

async function getDiff() {
    const options = {
        output: {
            transparency: 0.3,
            useCrossOrigin: false,
            outputDiff: true
        },
        scaleToSameSize: true,
        ignore: "less"
    };

    // The parameters can be Node Buffers
    // data is the same as usual with an additional getBuffer() function
    const data = await compareImages(
        await fs.readFile("./images/logsucc1.png"),
        await fs.readFile("./images/logsucc2.png"),
        //await fs.readFile("./images/logfailed1.png"),
        //await fs.readFile("./images/logfailed2.png"),
        options
    );

    await fs.writeFile("./output2.png", data.getBuffer());
}

getDiff();
