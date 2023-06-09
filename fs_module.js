const fs = require("node:fs")

console.log("First")

fs.writeFileSync("text.txt","Hello world!")
const read = fs.readFileSync("text.txt")
console.log(read.toString())

console.log("Second")
fs.readFile("text.txt","utf-8" , (err,result)=>{
    if(err){
        console.log(err)
    }else{
        console.log(result)
    }
})

fs.writeFile("text.txt"," Madush", {flag:"a"} , (err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("File written")
    }
})

console.log("Third")

fs.appendFileSync("text.txt"," Zabaa")