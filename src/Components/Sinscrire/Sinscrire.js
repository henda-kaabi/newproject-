import React from "react";
import './Sinscrire.css';
export default function Sinscrire() {
   return (
      <>
            <br></br><br></br>

      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <img src="register.jpg  " width="90%" />
          </div>
          <div className='col-md-3'>
          <h1>S'inscrire</h1>
            <form>
            <label for="inputNom4">Nom</label>
            <input type="nom" class="form-control" id="inputNom4" placeholder="Nom" />
           
            <label for="inputNom">Prénom</label>
            <input type="prénom" class="form-control" id="inputPrénom4" placeholder="Prénom" />
         
            <label for="inputTéléphone4">Téléphone</label>
            <input type="téléphone" class="form-control" id="inputTéléphone4" placeholder="+2160000000" />
          
              <label>Email</label> <input type="email" class="form-control" placeholder="exemple@gmail.com" />         
              <label for="inputPassword4">Password</label><input type="password" class="form-control" id="inputPassword4" placeholder="**********" />
              <br></br>
              <button type="submit" className="btn btn-secondary  btn-ms btn-block col-md-4'">S'inscrire</button> <p class="text-center text-muted mt-5 mb-0">Vous avez déjà un compte ? <a href="http://localhost:3001/Login"class="fw-bold text-body"><u>S'identifier</u></a></p>
            
            </form>

          </div>

        </div>
      </div>
    


      </>
   );
}


