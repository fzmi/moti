import React from 'react';
import { IonButton, IonIcon, IonContent } from '@ionic/react';
import { logoApple, logoFacebook, logoGoogle, chevronForwardOutline } from 'ionicons/icons';
import MotiLogoLight from '../data/images/MOTI Logo Light.png';
import './Login.scss';

export const Login: React.FC = () => {
  return (
    <IonContent fullscreen scroll-y="false">
      <div className="Login">
        <div className="stars small"></div>
        <div className="stars medium"></div>
        <div className="stars large"></div>
        <div style={{ display: "flex", height: "90%", justifyContent: "center", alignItems: "center" }}>
          <div className="Login-panel">
            <img src={MotiLogoLight} alt="MOTI Logo"></img>
            <p>Motivation starts right now.</p>
            <IonButton color="dark" expand="block" style={{ width: "90%" }}><IonIcon icon={logoApple} />&nbsp;&nbsp;Sign In with Apple</IonButton>
            <IonButton color="primary" expand="block" style={{ width: "90%" }}><IonIcon icon={logoFacebook} />&nbsp;&nbsp;Sign In with Facebook</IonButton>
            <IonButton color="tertiary" expand="block" style={{ width: "90%" }}><IonIcon icon={logoGoogle} />&nbsp;&nbsp;Sign In with Google</IonButton>
            <IonButton color="light" style={{ marginTop: "2em", width: "90%" }} href="/app/galaxy">Skip for now<IonIcon icon={chevronForwardOutline} /></IonButton>
          </div>
        </div>
      </div>
    </IonContent>
  );
}
