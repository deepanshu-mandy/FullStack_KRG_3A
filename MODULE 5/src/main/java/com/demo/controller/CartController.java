package com.demo.controller;

import com.demo.model.CartItem;
import com.demo.model.Product;
import com.demo.repository.CartRepository;
import com.demo.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cart")
@CrossOrigin(origins = "http://localhost:3000")
public class CartController {

    @Autowired
    private CartRepository cartRepo;

    @Autowired
    private ProductRepository productRepo;

    @GetMapping
    public List<CartItem> getCart() {
        return cartRepo.findAll();
    }

    @PostMapping("/add/{productId}")
    public CartItem addToCart(@PathVariable Long productId) {
        Product product = productRepo.findById(productId)
                .orElseThrow(() -> new RuntimeException("Product not found"));

        // Check if product already exists in cart
        CartItem existingItem = cartRepo.findByProduct_Id(productId);
        if (existingItem != null) {
            existingItem.setQuantity(existingItem.getQuantity() + 1);
            return cartRepo.save(existingItem);
        }

        // Otherwise, create new cart item
        CartItem newItem = new CartItem();
        newItem.setProduct(product);
        newItem.setQuantity(1);
        return cartRepo.save(newItem);
    }

    @DeleteMapping("/clear")
    public void clearCart() {
        cartRepo.deleteAll();
    }
}
