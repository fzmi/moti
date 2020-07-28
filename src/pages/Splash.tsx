import React from 'react';
import { IonPage, IonContent } from '@ionic/react';

import './Splash.scss';
import MotiLogoLight from '../data/images/MOTI Logo Light.png';

export const Splash: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <div className="Splash">
          <div className="stars small"></div>
          <div className="stars medium"></div>
          <div className="stars large"></div>
          <div style={{ display: "flex", height: "100vh", alignItems: "center", justifyContent: "center" }}>
            <img src={MotiLogoLight} alt="MOTI Text" style={{ width: "30vw" }}></img>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
}
