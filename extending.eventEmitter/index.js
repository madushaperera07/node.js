
const Teashop = require("./teashop")
const {DrinkMachine,Todayoffer} = require("./drink_machine")


const teashop01 = new Teashop()
const drinkmachine01 = new DrinkMachine()
const todayoffer = new Todayoffer()

teashop01.on("order", (teaName,price)=>{
    console.log("Order received! Please wait")
    console.log(`Order a ${teaName}, Price is $:${price}`)
    todayoffer.offerprice(price)
    drinkmachine01.serveDrink(teaName)
})

teashop01.order("bubble tea" , 25)
teashop01.order("tea" , 15)
teashop01.displayOrderNumber()