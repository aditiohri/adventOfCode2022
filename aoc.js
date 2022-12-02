const fs = require("fs");

class adventOfCode {
 constructor(dataFile) {
    this.data = fs.readFileSync(dataFile, "utf-8");
 }
}

module.exports = adventOfCode