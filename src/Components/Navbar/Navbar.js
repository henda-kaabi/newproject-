import React from "react";

export default function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img src="logo.png" width="60%" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">
                  Acceuil
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="/Login">
                  Login
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="/Sinscrire">
                  S'inscrire
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="/Profil">
                  Profil
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="/Technicien">
                  Technicien IT
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="/Panne">
                  Panne
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="/Statistique">
                  Statistique
                </a>
              </li>
           

                <form class="d-flex">
                  <input class="form-control me-4" type="rechercher" placeholder="Rechercher" aria-label="Rechercher" />
                  <button class="btn btn-outline-secondary" type="submit">Rechercher</button>

                </form>
                <li class="nav-item">
                  <a class="nav-link active " href="http://localhost:3001/Login">Déconnextion</a>
                </li>
            </ul>
          </div>

        </div>

      </nav>
    </div>
  );
}
