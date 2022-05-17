import React from 'react'
import './Profil.css';
export default function Profil() {
  return (
    <form>
      <div className='d_flex'>
        <p className="h2 mt-5 pb-3">Consulter profil</p>
        <a className='col-6'>
          <img src="bgprofil.jpg  " width="10%" />
        </a>
        <br></br><br></br>
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap">Modifier</button>
        <br></br><br></br>
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-lg">
            <div class="modal-content">
              <div class="modal-header">
                <h4 class="modal-title" id="exampleModalLabel">Modifier profil</h4>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <form>

                  <div class='row justify-content-center'>

                    <div class="form-group col-md-3">
                      <label for="inputPrénom4">Nom</label>
                      <input type="nom" class="form-control" id="inputPrénom4" placeholder="Nom" />
                    </div>
                    <div class="form-group col-md-3">
                      <label for="inputPrénom4">Prénom</label>
                      <input type="prénom" class="form-control" id="inputPrénom4" placeholder="Prénom" />
                    </div>
                  </div>
                  <div class='row justify-content-center'>
                    <div class="form-group col-md-3">
                      <label for="inputAdresse4">Adresse</label>
                      <input type="adresse" class="form-control" id="inputAdresse4" placeholder="Adresse" />
                    </div>

                    <div class="form-group col-md-3">
                      <label for="inputTéléphone4">Téléphone</label>
                      <input type="téléphone" class="form-control" id="inputTéléphone4" placeholder="+2160000000" />
                    </div>
                  </div>

                  <div class='row justify-content-center'>
                    <div class="form-group col-md-3">
                      <label for="inputEmail4">Email</label>
                      <input type="email" class="form-control" id="inputEmail4" placeholder="exemple@gmail.com" />
                    </div>

                    <div class="form-group col-md-3">
                      <label for="inputPassword4"> Mot de passe </label>
                      <input type="password" class="form-control" id="inputPassword4" placeholder="*********" />
                    </div>
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Annuler</button>
                <button type="button" class="btn btn-primary">Confirmer</button>
              </div>
            </div>
          </div>
        </div>

        <div class='row justify-content-center'>
          <div class="form-group col-md-4">

            <ul class="list-group list-group-flush">
              <li class="list-group-item">Nom : mohamed </li>
              <li class="list-group-item">Prénom : mekni</li>
              <li class="list-group-item">Adresse : belle vue beja </li>
              <li class="list-group-item">Téléphone : 55897641</li>
              <li class="list-group-item">Email : mohamedmekni@gmail.com </li>
              <li class="list-group-item">Mot de passe :krushu123 </li>
            </ul>
          </div>
        </div>


        <br></br> <br></br>

        <button type="submit" className="btn btn-secondary btn-ms btn-block">Annuler</button>
      </div>
    </form>
  );
}
