package com.parcialc2.parcialC2_Backend.service;


import com.parcialc2.parcialC2_Backend.entity.Cliente;
import com.parcialc2.parcialC2_Backend.repository.ClienteRepository;
import org.springframework.stereotype.Service;

@Service
public class ClienteService {
    private final ClienteRepository clienteRepository;

    public ClienteService(ClienteRepository clienteRepository) {
        this.clienteRepository = clienteRepository;
    }

    public Cliente save(Cliente cliente) {
        return clienteRepository.save(cliente);
    }
}
