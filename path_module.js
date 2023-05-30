const path = require("node:path")

console.log(__filename)
console.log(__dirname)


console.log(path.basename(__filename))
console.log(path.basename(__dirname))

console.log(path.extname(__filename))
console.log(path.extname(__dirname))


console.log(path.parse(__filename))
console.log(path.parse(__dirname))

console.log(path.format(path.parse(__filename)))

console.log(path.isAbsolute(__filename))
console.log(path.isAbsolute("./data.json"))


console.log(path.join("folder01","folder02","index.html"))
// change path
console.log(path.join("/folder01","folder02","index.html"))
//not change path
console.log(path.join("folder01","//folder02","index.html"))
// change path
console.log(path.join("folder01","//folder02","../index.html"))

// full absoute path
console.log(path.join(__dirname,"index.html"))


console.log(path.resolve("folder01","folder02","index.html"))
// change path
console.log(path.resolve("/folder01","folder02","index.html"))
//not change path
console.log(path.resolve("folder01","//folder02","index.html"))
// change path
console.log(path.resolve("folder01","//folder02","../index.html"))

// full absoute path
console.log(path.resolve(__dirname,"index.html"))