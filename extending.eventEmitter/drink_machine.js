class DrinkMachine{
    serveDrink(teaName){
        if(teaName==="tea"){
            console.log("take a biscuit")
        }
    }
}

class Todayoffer{
    offerprice(price){
        if(price===25){
            console.log("You have 10% today")
        }
    }
}

module.exports = { 
    DrinkMachine,
    Todayoffer
}