import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { Star, Orbit } from '../components/galaxy';

import './Galaxy.scss';

export const Galaxy: React.FC = () => {
  return (
    <IonPage>
      <IonHeader translucent>
        <IonToolbar>
          <IonTitle>My Motiverse</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen class="ion-padding">
        <div className="stars small"></div>
        <div className="stars medium"></div>
        <div className="stars large"></div>
        <Star />
        <Orbit index={1} height={100} width={200} rotation={0} planetSize={20} planetColor="#FB816F" />
        <Orbit index={2} height={180} width={360} rotation={30} planetSize={16} planetColor="#BED152" />
        <Orbit index={3} height={100} width={200} rotation={50} planetSize={16} planetColor="#F8C24B" />
        <Orbit index={4} height={150} width={300} rotation={100} planetSize={26} planetColor="#6CC2ED" />
        <Orbit index={5} height={80} width={160} rotation={160} planetSize={16} planetColor="#E594CC" />
        <Orbit index={6} height={220} width={440} rotation={-60} planetSize={20} planetColor="yellow" />
      </IonContent>
    </IonPage>
  );
}
