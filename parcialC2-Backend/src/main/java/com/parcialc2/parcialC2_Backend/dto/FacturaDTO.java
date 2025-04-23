package com.parcialc2.parcialC2_Backend.dto;


import lombok.Data;

import java.util.List;

@Data
public class FacturaDTO {
    private ClienteDTO cliente;
    private List<ProductoFactura> productos;
    private String metodoPago;

    @Data
    public static class ClienteDTO {
        private String nombre;
        private String correo;

        public String getNombre() {
            return nombre;
        }

        public void setNombre(String nombre) {
            this.nombre = nombre;
        }

        public String getCorreo() {
            return correo;
        }

        public void setCorreo(String correo) {
            this.correo = correo;
        }
    }

    @Data
    public static class ProductoFactura {
        private Long id;
        private int cantidad;

        public Long getId() {
            return id;
        }

        public void setId(Long id) {
            this.id = id;
        }

        public int getCantidad() {
            return cantidad;
        }

        public void setCantidad(int cantidad) {
            this.cantidad = cantidad;
        }
    }

    public ClienteDTO getCliente() {
        return cliente;
    }

    public void setCliente(ClienteDTO cliente) {
        this.cliente = cliente;
    }

    public List<ProductoFactura> getProductos() {
        return productos;
    }

    public void setProductos(List<ProductoFactura> productos) {
        this.productos = productos;
    }

    public String getMetodoPago() {
        return metodoPago;
    }

    public void setMetodoPago(String metodoPago) {
        this.metodoPago = metodoPago;
    }
}

