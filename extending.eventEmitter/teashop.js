const eventEmitter = require("node:events")


class Teashop extends eventEmitter {
    constructor(){
        super();
        this.orderNumber = 0;
    }

    order(teaName,price){
        this.orderNumber++
        this.emit("order" , teaName, price)
    }
    displayOrderNumber(){
        console.log(`Current order number: ${this.orderNumber}`)
    }
}


module.exports = Teashop 