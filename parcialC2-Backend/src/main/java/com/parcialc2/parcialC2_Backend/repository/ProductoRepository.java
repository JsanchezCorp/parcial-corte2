package com.parcialc2.parcialC2_Backend.repository;

import com.parcialc2.parcialC2_Backend.entity.Producto;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductoRepository extends JpaRepository<Producto, Long> {}
