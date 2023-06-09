

const fs = require("node:fs")

const readStream = fs.createReadStream("./hello.txt",{
    encoding: "utf-8"
})

const writeStream = fs.createWriteStream("./file01.txt")

readStream.pipe(writeStream)