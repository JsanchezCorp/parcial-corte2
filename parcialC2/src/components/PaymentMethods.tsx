import {
  IonRadioGroup,
  IonRadio,
  IonLabel,
  IonItem,
  IonList,
} from "@ionic/react";

export const PaymentMethods = ({ onChange }: { onChange: (m: string) => void }) => {
  return (
    <div>
      <h2>Método de pago</h2>
      <IonList>
        <IonRadioGroup onIonChange={(e) => onChange(e.detail.value)}>
          <IonItem>
            <IonLabel>Efectivo</IonLabel>
            <IonRadio slot="start" value="efectivo" />
          </IonItem>
          <IonItem>
            <IonLabel>Tarjeta</IonLabel>
            <IonRadio slot="start" value="tarjeta" />
          </IonItem>
          <IonItem>
            <IonLabel>Transferencia</IonLabel>
            <IonRadio slot="start" value="transferencia" />
          </IonItem>
        </IonRadioGroup>
      </IonList>
    </div>
  );
};
