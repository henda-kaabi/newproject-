import React from "react";

export default function Acceuil() {
  return (
    <div>
      <div className="header mt-5">
         <p className="h2 fw-bold fst-italic">À propos de nous</p>
         <a class="navbar-brand" href="#">
            <img src="map.png" width="30%" />
          </a>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <p className="p1">
            Kromberg & Schubert reviennent sur une histoire de succès qui s'étend sur plus
              plus de 110 ans.
            </p>
            <p className="p2">
            Esprit pionnier et entrepreneuriat innovant avec un appartement
              hiérarchie a permis l'expansion continue et la mondialisation
              de la compagnie. Avec plus de 50.000 employés (h/f/d) dans plus de 40
              sites, Kromberg & Schubert est aujourd'hui l'un des leaders mondiaux
              dans la fourniture de systèmes électriques, câbles et plastiques
              Composants.
            </p>
            <p className="p3">
            La clé du succès est la culture d'entreprise : Enthousiasme et
              la motivation à fournir des solutions de produits créatives sont les moteurs
              des équipes interdisciplinaires, qui concentrent leurs énergies sur
              reconnaître les tendances du marché à un stade précoce et également sur
              répondant aux exigences individuelles de nos clients.
            </p>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-sm">One of three columns</div>
          <div class="col-sm">One of three columns</div>
          <div class="col-sm">One of three columns</div>
        </div>
      </div>
    </div>
  );
}
