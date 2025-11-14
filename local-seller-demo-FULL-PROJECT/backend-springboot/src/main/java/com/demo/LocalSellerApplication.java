package com.demo;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.demo.model.Product;
import com.demo.repository.ProductRepository;

@SpringBootApplication
public class LocalSellerApplication {

    public static void main(String[] args) {
        SpringApplication.run(LocalSellerApplication.class, args);
    }

    @Bean
    CommandLineRunner initProducts(ProductRepository productRepo) {
        return args -> {
            Product p1 = new Product();
            p1.setName("Apple");
            p1.setDescription("Fresh red apple");
            p1.setPrice(1.5);
            p1.setImage("https://via.placeholder.com/250");
            productRepo.save(p1);

            Product p2 = new Product();
            p2.setName("Banana");
            p2.setDescription("Yellow banana");
            p2.setPrice(0.8);
            p2.setImage("https://via.placeholder.com/250");
            productRepo.save(p2);

            Product p3 = new Product();
            p3.setName("Orange");
            p3.setDescription("Juicy orange");
            p3.setPrice(1.2);
            p3.setImage("https://via.placeholder.com/250");
            productRepo.save(p3);
        };
    }
}
