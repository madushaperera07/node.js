const eventEmitter = require("node:events")

const emmiter = new eventEmitter()

emmiter.on("Order-tea" , (teaName , price)=>{
    console.log("Order received! Please wait")
    console.log(`Order a ${teaName}, Price is $:${price}`)
})


emmiter.on("Order-tea" , (teaName)=>{
    if(teaName === "bubble tea" ){
        console.log("Thanks for bring bubble tea")
    }else{
        console.log("Thank you")
    }
})

console.log("Welcome to the comming our shop") // first run
emmiter.emit("Order-tea" , "bubble tea" , 25)