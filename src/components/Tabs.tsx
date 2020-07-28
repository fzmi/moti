import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonTabs, IonRouterOutlet, IonIcon, IonTabBar, IonTabButton } from '@ionic/react';
import { planet, map, rocket, person } from 'ionicons/icons';
import { Galaxy, Explore, Boost, User } from '../pages';

export const Tabs: React.FC = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route path="/app/galaxy" component={Galaxy} />
        <Route path="/app/explore" component={Explore} />
        <Route path="/app/boost" component={Boost} />
        <Route path="/app/user" component={User} />
        <Redirect to="/app/galaxy" />
      </IonRouterOutlet>

      <IonTabBar slot="bottom" color="dark" mode="ios">
        <IonTabButton tab="galaxy" href="/app/galaxy">
          <IonIcon icon={planet} />
          {/* <IonLabel>Galaxy</IonLabel> */}
        </IonTabButton>
        <IonTabButton tab="explore" href="/app/explore">
          <IonIcon icon={map} />
          {/* <IonLabel>Explore</IonLabel> */}
        </IonTabButton>
        <IonTabButton tab="boost" href="/app/boost">
          <IonIcon icon={rocket} />
          {/* <IonLabel>Boost</IonLabel> */}
        </IonTabButton>
        <IonTabButton tab="user" href="/app/user">
          <IonIcon icon={person} />
          {/* <IonLabel>Me</IonLabel> */}
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
}
