import { IonApp, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Route } from "react-router";
import { MainPage } from "./pages/MainScreen";

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/" component={MainPage} exact />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
