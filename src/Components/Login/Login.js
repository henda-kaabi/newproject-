import React from 'react'
import './Login.css';
export default function Login() {
  return (
    <>


      <br></br><br></br>
      <h2>Bienvenue chez kromberg&schubert</h2>
      <br></br><br></br>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <img src="login.png  " width="70%" />
          </div>
          <div className='col-md-3'>
            <h1>Login</h1>
            <form>
              <label>Email</label> <input type="email" class="form-control" placeholder="exemple@gmail.com" />

              <label for="inputPassword4">Password</label><input type="password" class="form-control" id="inputPassword4" placeholder="**********" />
              <br></br>
              <button type="submit" className="btn btn-primary btn-block">Connexion</button>        <a href="http://localhost:3001/Sinscrire" ><button type="button" class="btn btn-secondary">S'inscrire</button ></a>
          
              <br></br><br></br>
              <p className="forgot-password text-right">
                <a href="#">Mot de passe oublier?</a>
              </p>
            </form>

          </div>

        </div>
      </div>
    </>


  );
}
