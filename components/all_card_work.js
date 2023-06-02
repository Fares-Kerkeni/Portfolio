import React from "react";
import Card_work from "./card_work";
import { project } from "../pages/api/projet";
import image from "../public/la-maison-jungle.jpeg";
const all_card_work = () => {
  return (
    <div className="all_card_work">
      <div className="title_work">Mes Projets</div>
      <div className="container_card">
        <Card_work
          name="la-maison-jungle"
          date="2022"
          image="/la-maison-jungle.jpeg"
          src="https://la-maison-jungle-5syxmlyb9-fares-kerkeni.vercel.app/"
        />
        <Card_work
          name="All_contries"
          date="2022"
          image="https://c8.alamy.com/compfr/2b1fw7t/drapeaux-nationaux-etiquettes-en-tissu-etiquettes-de-pays-du-g-20-jeu-de-vecteurs-de-balises-de-pays-officiels-2b1fw7t.jpg"
          src="https://the-jungle-ojzynwqhs-fares-kerkeni.vercel.app/"
        />
      </div>
    </div>
  );
};

export default all_card_work;
