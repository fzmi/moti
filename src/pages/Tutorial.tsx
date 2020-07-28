import React from 'react';
import { IonContent, IonButton, IonSlides, IonSlide, IonIcon } from '@ionic/react';
import './Tutorial.scss';

export const Tutorial: React.FC = () => {
  return (
    <IonContent fullscreen class="ion-padding" scroll-y="false">
      <IonSlides style={{height: "100%"}}>

        <IonSlide>
          <div className="slide">
            <img src="./slide-1.png" alt=""/>
            <h2>Welcome</h2>
            <p>The <b>ionic conference app</b> is a practical preview of the ionic framework in action, and a demonstration of proper code use.</p>
          </div>
        </IonSlide>

        <IonSlide>
          <img src="./slide-2.png" alt=""/>
          <h2>What is Ionic?</h2>
          <p><b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.</p>
        </IonSlide>

        <IonSlide>
          <img src="./slide-3.png" alt=""/>
          <h2>What is Ionic Appflow?</h2>
          <p><b>Ionic Appflow</b> is a powerful set of services and features built on top of Ionic Framework that brings a totally new level of app development agility to mobile dev teams.</p>
        </IonSlide>

        <IonSlide>
          <img src="./slide-4.png" alt=""/>
          <h2>Ready to Play?</h2>
          <IonButton fill="clear" href="/app">Continue <IonIcon slot="end" name="arrow-forward"></IonIcon></IonButton>
        </IonSlide>

      </IonSlides>
    </IonContent>
  );
};
