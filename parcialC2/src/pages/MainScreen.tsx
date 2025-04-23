import { useState } from "react";
import { IonPage, IonContent, IonHeader, IonTitle, IonToolbar } from "@ionic/react";
import { ProductList } from "../components/ProductList";

export const MainPage = () => {
  const [cart, setCart] = useState<any[]>([]);

  const addToCart = (product: any) => {
    const existente = cart.find((p) => p.id === product.id);
    if (existente) {
      existente.cantidad += 1;
      setCart([...cart]);
    } else {
      setCart([...cart, { ...product, cantidad: 1 }]);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar><IonTitle>Generar Factura</IonTitle></IonToolbar>
      </IonHeader>
      <IonContent>
        <ProductList onAdd={addToCart} />
      </IonContent>
    </IonPage>
  );
};
