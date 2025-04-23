import { IonInput, IonButton, IonItem, IonLabel, IonList } from "@ionic/react";
import { useState } from "react";

export const InvoiceForm = ({ onSubmit }: { onSubmit: (nombre: string, correo: string) => void }) => {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");

  return (
    <div>
      <h2>Datos del cliente</h2>
      <IonList>
        <IonItem>
          <IonLabel position="floating">Nombre</IonLabel>
          <IonInput
            value={nombre}
            onIonChange={(e) => setNombre(e.detail.value!)}
            required
          />
        </IonItem>

        <IonItem>
          <IonLabel position="floating">Correo</IonLabel>
          <IonInput
            value={correo}
            onIonChange={(e) => setCorreo(e.detail.value!)}
            required
          />
        </IonItem>
      </IonList>

      <IonButton
        expand="block"
        onClick={() => {
          if (!nombre || !correo) {
            alert("Por favor completa todos los campos");
            return;
          }
          onSubmit(nombre, correo);
        }}
      >
        Generar Factura
      </IonButton>
    </div>
  );
};
