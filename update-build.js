const fs = require("fs");
const filePath = "./package.json";
const packageJson = JSON.parse(fs.readFileSync(filePath).toString());
const nextBuildId = require("next-build-id")

nextBuildId({ dir: __dirname }).then(id => {
    packageJson.buildHash = id;

    fs.writeFileSync(filePath, JSON.stringify(packageJson, null, 2));

    const jsonData = {buildHash: packageJson.buildHash};

    const jsonContent = JSON.stringify(jsonData);

    console.log("Writing last build hash to build/meta.json");

    const dir = './public';

    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }

    fs.writeFile("public/meta.json", jsonContent, "utf8", error => {
        if (error) {
            console.log("An error occurred while saving build date and time to meta.json");
            return console.log(error);
        }

        console.log("Latest build hash updated in meta.json file in /public");
    });
});
