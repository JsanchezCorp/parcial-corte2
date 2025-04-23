import axios from "axios";

const BASE_URL = "http://localhost:8081/api"; // Ajusta si tu backend usa otro path base

// PRODUCTOS
export const obtenerProductos = async () => {
    const response = await axios.get(`${BASE_URL}/productos`);
    return response.data;
  };
  
  export const crearProducto = async (producto: { nombre: string; precio: number }) => {
    const response = await axios.post(`${BASE_URL}/productos`, producto);
    return response.data;
  };
  
  // FACTURAS
  export const crearFactura = async (factura: {
    cliente: { nombre: string; correo: string };
    productos: { id: number; cantidad: number }[];
    metodoPago: string;
  }) => {
    const response = await axios.post(`${BASE_URL}/facturas`, factura);
    return response.data;
  };
