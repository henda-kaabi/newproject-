import React from 'react'
import { BiEdit } from "react-icons/bi";
import { BiTrash } from "react-icons/bi";
import './Panne.css';
export default function Panne() {
  return (
    <div className='d_flex'>
      <p className="h2 mt-5 pb-3"></p>

      <div className='container'>
      < h2>Liste des panne </h2>
     <br></br>    <br></br> 
        <div class='row justify-content-center'>
          <table class="table align-middle mb-0 bg-white">
            <thead class="bg-light">
              <tr>
                <th>Projet</th>
                <th>ligne</th>
                <th>Poste</th>
                <th>Matériaux</th>
                <th>Catégorie</th>
                <th>Shift</th>
                <th>Description</th>
                <th>date</th>
                <th>Time</th>
                <th>Utilisateur</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <select class="form-group col-md-12">
                    <option value="tunis"></option>
                    <option value="Daimler">Daimler</option>
                    <option value="Q2">Q2</option>
                    <option value="Q3">Q3</option>
                    <option value="A2">A2</option>
                    <option value="A3">A3</option>
                    <option value="CUTTING AREA">CUTTING AREA</option>
                    <option value="ABS AREA">ABS AREA</option>
                    <option value="MUSTER AREA">MUSTER AREA</option>
                    <option value="KIT AREA">KIT AREA</option>
                    <option value="KO AREA">KO AREA</option>
                    <option value="VK AREA">VK AREA</option>
                    <option value="KSPS AREA">KSPS AREA</option>
                    <option value="DENZO">DENZO</option>
                  </select>




                </td>
                <td>
                  <select class="form-group col-md-12">
                    <option value="tunis"></option>
                    <option value="IRM">IRM</option>
                    <option value="MRM">MRM</option>
                    <option value="58001">58001</option>
                    <option value="58002">58002</option>
                    <option value="58003">58003</option>
                    <option value="58004">58004</option>
                    <option value="58009">58009</option>
                    <option value="58010">58010</option>
                    <option value="KSTN92">KSTN92</option>
                    <option value="KSTN93">KSTN93</option>
                    <option value="KSTN94">KSTN94</option>
                    <option value="KSTN95">KSTN95</option>
                    <option value="KSTN28">KSTN28</option>
                    <option value="KSTN17">KSTN17</option>
                    <option value="KSTN18">KSTN18</option>
                    <option value="KSTND1">KSTND1</option>
                    <option value="KSTND2">KSTND2</option>
                    <option value="KSTND5">KSTND5</option>
                  </select>

                </td>
                <td>
                  <select class="form-group col-md-12" >
                    <option value="tunis"></option>
                    <option value="MZ">MZ</option>
                    <option value="ET">ET</option>
                    <option value="PACKEN">PACKEN</option>
                    <option value="POSTE QUALITE">POSTE QUALITE</option>
                    <option value="POSTE SL">POSTE SL</option>
                    <option value="EPT">EPT</option>
                    <option value="SCHUNK">SCHUNK</option>
                    <option value="MA">MA</option>
                    <option value="VC">VC</option>
                  </select>

                </td>
                <td>
                  <select class="form-group col-md-12">
                    <option value="tunis"></option>
                    <option value="Printer">Printer</option>
                    <option value="PC">PC</option>
                    <option value="KOMAX">KOMAX</option>
                    <option value="Terminal">Terminal</option>
                  </select>
                </td>


                <td>

                  <select class="form-group col-md-6">
                    <option value="tunis"></option>
                    <option value="Software Production">Software Production</option>
                    <option value="Hardware">Hardware</option>
                    <option value="Network Problems">Network Problems</option>
                  </select>
                </td>
                <td>


                  <p class="fw-normal mb-1"><button data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap" style={{ borderColor: "white", backgroundColor: "amethyst" }}><BiEdit size="2em" />
                  </button>
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div class="modal-dialog model-lg">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h4 class="modal-title" id="exampleModalLabel">Modifier panne</h4>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div class="modal-body">
                            <form>
                              <div class='row justify-content-center '>
                                <div class="form-group col-md-4">
                                  <label className="me-3 label-1"> Projet : </label>
                                  <select class="form-group col-md-12">
                                    <option value="tunis"></option>
                                    <option value="Daimler">Daimler</option>
                                    <option value="Q2">Q2</option>
                                    <option value="Q3">Q3</option>
                                    <option value="A2">A2</option>
                                    <option value="A3">A3</option>
                                    <option value="CUTTING AREA">CUTTING AREA</option>
                                    <option value="ABS AREA">ABS AREA</option>
                                    <option value="MUSTER AREA">MUSTER AREA</option>
                                    <option value="KIT AREA">KIT AREA</option>
                                    <option value="KO AREA">KO AREA</option>
                                    <option value="VK AREA">VK AREA</option>
                                    <option value="KSPS AREA">KSPS AREA</option>
                                    <option value="DENZO">DENZO</option>
                                  </select>
                                </div>
                                <div class="form-group col-md-4">
                                  <label className="me-3 label-1"> Ligne : </label>
                                  <select class="form-group col-md-12">
                                    <option value="tunis"></option>
                                    <option value="IRM">IRM</option>
                                    <option value="MRM">MRM</option>
                                    <option value="58001">58001</option>
                                    <option value="58002">58002</option>
                                    <option value="58003">58003</option>
                                    <option value="58004">58004</option>
                                    <option value="58009">58009</option>
                                    <option value="58010">58010</option>
                                    <option value="KSTN92">KSTN92</option>
                                    <option value="KSTN93">KSTN93</option>
                                    <option value="KSTN94">KSTN94</option>
                                    <option value="KSTN95">KSTN95</option>
                                    <option value="KSTN28">KSTN28</option>
                                    <option value="KSTN17">KSTN17</option>
                                    <option value="KSTN18">KSTN18</option>
                                    <option value="KSTND1">KSTND1</option>
                                    <option value="KSTND2">KSTND2</option>
                                    <option value="KSTND5">KSTND5</option>
                                  </select>
                                </div>
                                <div class="form-group col-md-4">
                                  <label className="me-3 label-1">Poste : </label>
                                  <select class="form-group col-md-12" >
                                    <option value="tunis"></option>
                                    <option value="MZ">MZ</option>
                                    <option value="ET">ET</option>
                                    <option value="PACKEN">PACKEN</option>
                                    <option value="POSTE QUALITE">POSTE QUALITE</option>
                                    <option value="POSTE SL">POSTE SL</option>
                                    <option value="EPT">EPT</option>
                                    <option value="SCHUNK">SCHUNK</option>
                                    <option value="MA">MA</option>
                                    <option value="VC">VC</option>
                                  </select>
                                </div>
                              </div>
                              <div class='row justify-content-center '>
                                <div class="form-group col-md-4">
                                  <label className="me-3 label-1">Matériaux:</label>
                                  <select class="form-group col-md-12">
                                    <option value="tunis"></option>
                                    <option value="Printer">Printer</option>
                                    <option value="PC">PC</option>
                                    <option value="KOMAX">KOMAX</option>
                                    <option value="Terminal">Terminal</option>
                                  </select>
                                </div>
                                <div class="form-group col-md-4">

                                  <label className="me-3 label-1">Catégorie:</label>
                                  <select class="form-group col-md-12">
                                    <option value="tunis"></option>
                                    <option value="Software Production">Software Production</option>
                                    <option value="Hardware">Hardware</option>
                                    <option value="Network Problems">Network Problems</option>
                                  </select>
                                </div>
                                <div class="form-group col-md-4">
                                  <label className="me-3 label-1">Shift : </label>
                                  <select class="form-group col-md-12">
                                    <option value="tunis"></option>
                                    <option value="6h">6h</option>
                                    <option value="14h">14h</option>
                                    <option value="22h">22h</option>
                                  </select>
                                </div>
                              </div>
                              <br></br>

                              <div class='row justify-content-center '>
                                <div class="form-group col-md-12">
                                  <label className="me-3 label-1"> Description : </label>
                                  <textarea class="form-group col-md-12" type="Description" placeholder="" as="Description" ></textarea>
                                </div>
                              </div>
                              <br></br>
                              <div class='row justify-content-center'>
                                <div class="form-group col-md-4">
                                  <label className="me-3 label-1">Date : </label>
                                  <input class="form-group col-md-12" type="date" />
                                </div>
                                <div class="form-group col-md-4">

                                  <label className="me-3 label-1">Time : </label>
                                  <input class="form-group col-md-12" type="Time" placeholder=""></input>
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
                  <p class="fw-bold mb-1">Marwa</p>
                </td>
                <td>
                  <p class="fw-bold mb-1">Madini</p>

                </td>
                <td>
                  <p class="fw-normal mb-1">marwamadini@gmail.com</p>

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

                  <div class="ms-3">
                    <p class="fw-bold mb-1">Aymen</p>

                  </div>

                </td>
                <td>
                  <p class="fw-bold mb-1">Zouaghi</p>

                </td>
                <td>
                  <p class="fw-normal mb-1">aymenghazouani@gmail.com</p>

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

