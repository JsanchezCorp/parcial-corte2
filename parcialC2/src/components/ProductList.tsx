import { IonCard, IonCardContent, IonButton } from "@ionic/react";
import { useEffect, useState } from "react";
import { obtenerProductos } from "../services/api";

interface Product {
  id: number;
  nombre: string;
  precio: number;
}

export const ProductList = ({ onAdd }: { onAdd: (product: Product) => void }) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    obtenerProductos().then(setProducts);
  }, []);

  return (
    <>
      {products.map(p => (
        <IonCard key={p.id}>
          <IonCardContent>
            {p.nombre} - ${p.precio}
            <IonButton onClick={() => onAdd(p)}>Agregar</IonButton>
          </IonCardContent>
        </IonCard>
      ))}
    </>
  );
};
