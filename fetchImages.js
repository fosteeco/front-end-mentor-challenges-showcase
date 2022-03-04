const path = require("path");
const fs = require("fs");
const puppeteer = require("puppeteer");
const data = fs.readFileSync("./src/ChallengesData.json");
const dataPathDir = path.dirname("./src/");
const fullDataFileName = path.join(dataPathDir, "ChallengesData.json");

const myObject = JSON.parse(data);
const newDataObject = {
  data: [],
};

function slugify(str) {
  str = str.replace(/^\s+|\s+$/g, "");

  // Make the string lowercase
  str = str.toLowerCase();

  // Remove accents, swap ñ for n, etc
  var from =
    "ÁÄÂÀÃÅČÇĆĎÉĚËÈÊẼĔȆÍÌÎÏŇÑÓÖÒÔÕØŘŔŠŤÚŮÜÙÛÝŸŽáäâàãåčçćďéěëèêẽĕȇíìîïňñóöòôõøðřŕšťúůüùûýÿžþÞĐđßÆa·/_,:;";
  var to =
    "AAAAAACCCDEEEEEEEEIIIINNOOOOOORRSTUUUUUYYZaaaaaacccdeeeeeeeeiiiinnooooooorrstuuuuuyyzbBDdBAa------";
  for (var i = 0, l = from.length; i < l; i++) {
    str = str.replace(new RegExp(from.charAt(i), "g"), to.charAt(i));
  }

  // Remove invalid chars
  str = str
    .replace(/[^a-z0-9 -]/g, "")
    // Collapse whitespace and replace by -
    .replace(/\s+/g, "-")
    // Collapse dashes
    .replace(/-+/g, "-");

  return str;
}

(async () => {
  for (let challengeObject of myObject.data) {
    const imageFolder = path.normalize("./public/images");
    console.log("imageFolder :", imageFolder);
    const fileName = path.join(
      imageFolder,
      slugify(challengeObject.name) + "-image.png"
    );

    const newObject = { ...challengeObject, image: fileName };
    console.log("newObject :", newObject);
    newDataObject.data.push(newObject);
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto(challengeObject.liveDemo, {
      waitUntil: "networkidle2",
    });
    await page.screenshot({ path: fileName });
    await browser.close();
  }
})();

const jsonContent = JSON.stringify(newDataObject);
console.log(jsonContent);

fs.writeFile("./src/ChallengesData.json", jsonContent, "utf8", function (err) {
  if (err) {
    console.log("An error occured while writing JSON Object to File.");
    return console.log(err);
  }

  console.log("JSON file has been saved.");
});
