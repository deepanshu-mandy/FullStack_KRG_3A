package com.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.demo.model.CartItem;

@Repository
public interface CartRepository extends JpaRepository<CartItem, Long> {
    CartItem findByProduct_Id(Long productId);
}
