import React from 'react';
import { BiEdit } from "react-icons/bi";
import { BiTrash } from "react-icons/bi";

import './Technicien.css';
export default function Technicien() {
  return (
    <div className='d_flex'>
      <p className="h2 mt-5 pb-3">Suivi Compte Technicien IT</p>

      <div className='container'>
        <div class='row justify-content-center'>
          <table class="table align-middle mb-0 bg-white">
            <thead class="bg-light">
              <tr>
                <th>Nom</th>
                <th>Prénom</th>
                <th>Email</th>
                <th>Titre</th>
                <th>Téléphone</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div class="d-flex align-items-center">
                    <img
                      src="marwa.png" width="100" />


                    <div class="ms-2">
                      <p class="fw-bold mb-1">Maha </p>

                    </div>
                  </div>
                </td>
                <td>
                  <p class="fw-bold mb-1">zouaghi</p>

                </td>
                <td>
                  <p class="fw-normal mb-1">mahazouaghi@gmail.com</p>

                </td>
                <td>
                  <p class="fw-normal mb-1">Ingénieur</p>
                  <p class="text-muted mb-0">informatique</p>
                </td>


                <td>

                  <p class="fw-normal mb-1">582147639</p>
                </td>
                <td>


                  <p class="fw-normal mb-1"><button data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap" style={{ borderColor: "white", backgroundColor: "amethyst" }}><BiEdit size="2em" />
                  </button>
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div class="modal-dialog modal-lg">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h4 class="modal-title" id="exampleModalLabel">Modifier compte</h4>
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
                                  <input type="nom" class="form-control" id="inputPrénom4" placeholder="Prénom" />
                                </div>
                                <div class='row justify-content-center'>
                                <div class="form-group col-md-6">
                                  <label for="inputPrénom4">Email</label>
                                  <input type="prénom" class="form-control" id="inputPrénom4" placeholder="exemple@gmail.com" />
                                </div>
                              </div>
                             
                                <div class="form-group col-md-3">
                                  <label for="inputAdresse4">Titre</label>
                                  <input type="adresse" class="form-control" id="inputAdresse4" placeholder="Titre" />
                                </div>

                                <div class="form-group col-md-3">
                                  <label for="inputTéléphone4">Téléphone</label>
                                  <input type="téléphone" class="form-control" id="inputTéléphone4" placeholder="+2160000000" />
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
                    <button style={{ backgroundColor: "white", borderColor: "white" }}><BiTrash size="2em" /></button>

                  </p>



                </td>
                <td />

              </tr>
              <tr>
                <td>
                  <div class="d-flex align-items-center">

                    <img
                      src="marwa.png" width="100" height="100" />
                    <div class="ms-3">
                      <p class="fw-bold mb-1">Marwa</p>

                    </div>
                  </div>
                </td>
                <td>
                  <p class="fw-bold mb-1">Madini</p>

                </td>
                <td>
                

                </td>

                <td>
                  <p class="fw-normal mb-1">Réseau</p>
                  <p class="text-muted mb-0">informatique</p>
                </td>

                <td>

                  <p class="fw-normal mb-1">582147639</p>
                </td>
                <td>


                  <p class="fw-normal mb-1"><button style={{ borderColor: "white", backgroundColor: "amethyst" }}><BiEdit size="2em" /></button> <button style={{ backgroundColor: "white", borderColor: "white" }}><BiTrash size="2em" /></button> </p>



                </td>
                <td />


              </tr>
              <tr>
                <td>
                  <div class="d-flex align-items-center">
                    <img
                      src="technicien.png" width="90" />
                    <div class="ms-3">
                      <p class="fw-bold mb-1">Aymen</p>

                    </div>
                  </div>
                </td>
                <td>
                  <p class="fw-bold mb-1">Zouaghi</p>

                </td>
                <td>
             

                </td>
                <td>
                  <p class="fw-normal mb-1">Réseau</p>
                  <p class="text-muted mb-0">informatique</p>
                </td>

                <td>


                  <p class="fw-normal mb-1">582147639</p>



                </td>
                <td>


                  <p class="fw-normal mb-1"><button style={{ borderColor: "white", backgroundColor: "amethyst" }}><BiEdit size="2em" /></button> <button style={{ backgroundColor: "white", borderColor: "white" }}><BiTrash size="2em" /></button> </p>



                </td>
              </tr>
            </tbody>
          </table>



        </div>

      </div>
      <br></br><br></br>
      <button type="button" class="btn btn-secondary btn-lg">Annuler</button>
    </div>

  );
}

