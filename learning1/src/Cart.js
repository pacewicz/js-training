export default class Cart {

    constructor(){
        this.items = [];
    }

    add(shoppingItem) {
        this.items.push(shoppingItem);
    }

    getTotalPrice(discount = price => price) {
        var totalPrice = 0;

        // this.items.forEach(function (item) {
        //     result += item.getTotalPrice();
        // })

        totalPrice = this.items.reduce(function (result, current) {
            return result + current.getTotalPrice();
        }, 0);

        var priceWithDiscount = discount(totalPrice);

        return priceWithDiscount;
    }

    getVipItems() {
        var result = [];

        // this.items.forEach(function (item) {
        //     if(item.getPrice() >= 20) {
        //         result.push(item);
        //     }
        //
        // });

        return this.items.filter(item =>  item.getPrice() >= 20);
        return result;
    }
}