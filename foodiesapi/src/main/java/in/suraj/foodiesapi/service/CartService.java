package in.suraj.foodiesapi.service;

import in.suraj.foodiesapi.io.CartRequest;
import in.suraj.foodiesapi.io.CartResponse;

public interface CartService {
    CartResponse addToCart(CartRequest request);

    CartResponse getCart();

    void clearCart();

    CartResponse removeFromCart(CartRequest cartRequest);
}
