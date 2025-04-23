package com.parcialc2.parcialC2_Backend.service;

import com.parcialc2.parcialC2_Backend.entity.Producto;
import com.parcialc2.parcialC2_Backend.repository.ProductoRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductoService {

    private final ProductoRepository productoRepository;

    public ProductoService(ProductoRepository productoRepository) {
        this.productoRepository = productoRepository;
    }

    public List<Producto> findAll() {
        return productoRepository.findAll();
    }

    public Producto save(Producto producto) {
        return productoRepository.save(producto);
    }
}
