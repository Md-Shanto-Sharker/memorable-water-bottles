const getCartFromLocalStorage = () => {
  const storedCartString = localStorage.getItem("cart");

  if (storedCartString) {
    const storedCart = JSON.parse(storedCartString);
    return storedCart;
  }
  return [];
};

const saveCartToLocalStorage = (cart) => {
  const cartStringified = JSON.stringify(cart);
  localStorage.setItem("cart", cartStringified);
};

const addItemToCartLocalStorage = (id) => {
  const cart = getCartFromLocalStorage();
  const newCart = [...cart, id];

  saveCartToLocalStorage(newCart);
};

export { getCartFromLocalStorage, addItemToCartLocalStorage };
