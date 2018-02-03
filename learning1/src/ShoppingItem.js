export default class ShoppingItem {

    constructor(name, quantity, price){
        this.name = name;
        this.quantity = quantity;
        this.price = price;
    }

    getName(){
        return this.name;
    }

    getTotalPrice(){
        return this.quantity*this.price;
    }

    getPrice(){
        return this.price;
    }

}