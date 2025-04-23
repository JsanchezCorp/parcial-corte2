import { useState } from "react";
import {
  IonPage,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonToast,
  IonItem,
  IonLabel,
  IonBadge,
  IonList,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
} from "@ionic/react";
import { ProductList } from "../components/ProductList";
import { PaymentMethods } from "../components/PaymentMethods";
import { InvoiceForm } from "../components/InvoiceForm";
import { crearFactura } from "../services/api";

export const MainPage = () => {
  console.log("Renderizando MainPage");
  const [cart, setCart] = useState<any[]>([]);
  const [payment, setPayment] = useState("");

  const [showToast, setShowToast] = useState({ show: false, message: "", color: "" });

  const addToCart = (product: any) => {
    const existing = cart.find((p) => p.id === product.id);
    if (existing) {
      existing.cantidad += 1;
      setCart([...cart]);
    } else {
      setCart([...cart, { ...product, cantidad: 1 }]);
    }
  };

  const handleInvoiceSubmit = (nombre: string, correo: string) => {
    if (cart.length === 0 || !payment) {
      setShowToast({
        show: true,
        message: "Debe seleccionar productos y un método de pago.",
        color: "danger",
      });
      return;
    }


    const factura = {
      cliente: { nombre, correo },
      productos: cart.map((p) => ({ id: p.id, cantidad: p.cantidad })),
      metodoPago: payment,
    };

    crearFactura(factura)
      .then(() => {
        setShowToast({
          show: true,
          message: "Factura generada correctamente",
          color: "success",
        });
        setCart([]);
        setPayment("");
      })
      .catch(() => {
        setShowToast({
          show: true,
          message: "Error al generar la factura",
          color: "danger",
        });
      });
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Generador de uras</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Carrito ({cart.reduce((acc, p) => acc + p.cantidad, 0)} productos)</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            {cart.length === 0 ? (
              <IonLabel>El carrito está vacío.</IonLabel>
            ) : (
              <IonList>
                {cart.map((item) => (
                  <IonItem key={item.id}>
                    <IonLabel>{item.nombre}</IonLabel>
                    <IonBadge color="tertiary">{item.cantidad}</IonBadge>
                  </IonItem>
                ))}
              </IonList>
            )}
          </IonCardContent>
        </IonCard>

        <ProductList onAdd={addToCart} />
        <PaymentMethods onChange={setPayment} />
        <InvoiceForm onSubmit={handleInvoiceSubmit} />

        <IonToast
          isOpen={showToast.show}
          message={showToast.message}
          color={showToast.color as any}
          duration={2000}
          onDidDismiss={() => setShowToast({ ...showToast, show: false })}
        />
      </IonContent>
    </IonPage>
  );
};
