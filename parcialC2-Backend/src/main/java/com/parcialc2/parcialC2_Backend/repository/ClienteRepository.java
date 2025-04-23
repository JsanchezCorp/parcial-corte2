package com.parcialc2.parcialC2_Backend.repository;

import com.parcialc2.parcialC2_Backend.entity.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClienteRepository extends JpaRepository<Cliente, Long> {}
