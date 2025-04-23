import { useEffect, useState } from "react";
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton,
  IonSpinner,
  IonText,
} from "@ionic/react";
import { obtenerProductos } from "../services/api";

export const ProductList = ({ onAdd }: { onAdd: (product: any) => void }) => {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    obtenerProductos()
      .then((data) => setProducts(data))
      .catch(() => alert("Error al cargar productos"))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <h2>Productos disponibles</h2>
      {loading ? (
        <IonSpinner name="crescent" />
      ) : (
        products.map((product) => (
          <IonCard key={product.id}>
            <IonCardHeader>
              <IonCardTitle>{product.nombre}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <IonText>Precio: ${product.precio}</IonText>
              <br />
              <IonButton expand="block" onClick={() => onAdd(product)}>
                Agregar al carrito
              </IonButton>
            </IonCardContent>
          </IonCard>
        ))
      )}
    </div>
  );
};
