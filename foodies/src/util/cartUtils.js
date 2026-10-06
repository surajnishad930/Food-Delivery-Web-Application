export const calculateCartTotals=(cartItems,quantities)=>{
     //cart items
    const subtotals = cartItems.reduce((acc, food) => acc + food.price * quantities[food.id], 0);
    const shipping = subtotals === 0 ? 0.0 : 10;
    const tax = subtotals * 0.1;
    const total = subtotals + shipping + tax;
    return {subtotals,shipping,tax,total}
}