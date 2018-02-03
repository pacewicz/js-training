import ShoppingItem from "./ShoppingItem";


describe("ShoppingItem", function () {
    it('should return product name', function () {
       //given
        var shoppingItem = new ShoppingItem("apple2");

       //when
        var result = shoppingItem.getName();

       //then
        expect(result).toBe("apple2")
    });
    
    it("should return total price", function () {
        //given
        var shoppingItem = new ShoppingItem("name", 4, 2.5);

        //when
        var result = shoppingItem.getTotalPrice();

        //then
        expect(result).toBe(10);
    })
})