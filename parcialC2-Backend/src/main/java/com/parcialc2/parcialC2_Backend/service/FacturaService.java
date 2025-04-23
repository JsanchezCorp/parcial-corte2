package com.parcialc2.parcialC2_Backend.service;


import com.parcialc2.parcialC2_Backend.dto.FacturaDTO;
import com.parcialc2.parcialC2_Backend.entity.Cliente;
import com.parcialc2.parcialC2_Backend.entity.Factura;
import com.parcialc2.parcialC2_Backend.entity.FacturaProducto;
import com.parcialc2.parcialC2_Backend.entity.Producto;
import com.parcialc2.parcialC2_Backend.repository.ClienteRepository;
import com.parcialc2.parcialC2_Backend.repository.FacturaProductoRepository;
import com.parcialc2.parcialC2_Backend.repository.FacturaRepository;
import com.parcialc2.parcialC2_Backend.repository.ProductoRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FacturaService {
    private final FacturaRepository facturaRepository;
    private final FacturaProductoRepository fpRepository;
    private final ClienteRepository clienteRepository;
    private final ProductoRepository productoRepository;

    public FacturaService(FacturaRepository facturaRepository, FacturaProductoRepository fpRepository, ClienteRepository clienteRepository, ProductoRepository productoRepository) {
        this.facturaRepository = facturaRepository;
        this.fpRepository = fpRepository;
        this.clienteRepository = clienteRepository;
        this.productoRepository = productoRepository;
    }

    public Factura crearFactura(FacturaDTO dto) {
        Cliente cliente = new Cliente(null, dto.getCliente().getNombre(), dto.getCliente().getCorreo());
        cliente = clienteRepository.save(cliente);

        Factura factura = new Factura();
        factura.setCliente(cliente);
        factura.setMetodoPago(dto.getMetodoPago());

        factura = facturaRepository.save(factura);

        for (FacturaDTO.ProductoFactura pf : dto.getProductos()) {
            Producto producto = productoRepository.findById(pf.getId()).orElseThrow();
            FacturaProducto fprod = new FacturaProducto();
            fprod.setFactura(factura);
            fprod.setProducto(producto);
            fprod.setCantidad(pf.getCantidad());
            fpRepository.save(fprod);
        }

        return factura;
    }

    public List<Factura> listarFacturas() {
        return facturaRepository.findAll();
    }
}
