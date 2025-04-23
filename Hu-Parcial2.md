## ✅ HU01 - Componente de Productos  
**Título:** Visualización de productos  

**Como usuario,**  
quiero visualizar una lista de productos disponibles,  
para poder seleccionar aquellos que quiero incluir en una factura.  

**Criterios de Aceptación:**  
- El componente debe mostrar nombre, precio y descripción de cada producto.  
- La información debe venir del backend vía API REST.  
- Debe permitir seleccionar uno o más productos (checkbox o botón de agregar).  
- El diseño debe ser responsivo y compatible con Ionic.  

---

## ✅ HU02 - Componente de Factura  
**Título:** Generación de factura  

**Como usuario,**  
quiero generar una factura con los productos seleccionados,  
para poder visualizar el total y registrar una venta.  

**Criterios de Aceptación:**  
- Debe mostrar los productos agregados, su cantidad y subtotal.  
- Debe calcular el total automáticamente.  
- Debe incluir campos para fecha, cliente (opcional) y forma de pago.  
- Debe tener un botón para confirmar y enviar la factura al backend.  

---

## ✅ HU03 - Componente de Método de Pago  
**Título:** Selección de método de pago  

**Como usuario,**  
quiero elegir un método de pago al generar la factura,  
para poder registrar correctamente cómo se pagó cada venta.  

**Criterios de Aceptación:**  
- Debe mostrar opciones como: Efectivo, Tarjeta, Transferencia, etc.  
- Debe permitir seleccionar una opción.  
- El método seleccionado debe enviarse junto con la factura al backend.  
- Si el método de pago requiere datos extra (como número de referencia), debe mostrarse un campo adicional.  

---

## ✅ HU04 - Backend de facturación  
**Título:** API REST para gestión de facturas  

**Como desarrollador,**  
quiero crear una API REST que reciba, almacene y gestione facturas,  
para que el frontend pueda guardar y consultar las ventas realizadas.  

**Criterios de Aceptación:**  
- La API debe permitir crear, listar y consultar facturas.  
- Debe incluir entidades relacionadas: productos, métodos de pago, y detalles de factura.  
- Debe guardar todo en una base de datos PostgreSQL.  
- Debe tener control de acceso por roles (admin, cliente, etc.).  
- Debe estar documentada con Swagger.  