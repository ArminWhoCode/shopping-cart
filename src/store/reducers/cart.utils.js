export const addItem = (cartItems,cartItemToAdd) => {

    const existingItem = cartItems.find((cartItem) => cartItem.id === cartItemToAdd.id);

    if(existingItem){
        return cartItems.map((cartItem => 
            cartItem.id === existingItem.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        ))
    }

    return [...cartItems,{...cartItemToAdd, quantity: 1}];
}

export const removeItem = (cartItems,cartItemRemove) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === cartItemRemove.id);

    if(existingItem) {

        if(existingItem.quantity === 1) {
            return cartItems.filter((cartItem) => cartItem.id !== existingItem.id)
        }

        return cartItems.map((cartItem => 
            cartItem.id === existingItem.id
            ? {...cartItem, quantity: cartItem.quantity - 1}
            : cartItem
        ))
    }
}