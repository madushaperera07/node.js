const fs = require("node:fs/promises")

console.log("First")
fs.writeFile("hello.txt","Hey there i am madush", {flag:"a"} , (err,result)=>{
    if(err){
        console.log(err)
    }else{
        console.log(result)
    }
})

console.log("Second")

fs.readFile("hello.txt","utf-8").then((data)=>{
    console.log(data)
}).catch((err)=>{
    console.log(err)
})

console.log("Third")

