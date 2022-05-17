import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Navbar from './Components/Navbar/Navbar';
import Login from './Components/Login/Login';
import Acceuil from './Components/Acceuil/Acceuil';
import Sinscrire from './Components/Sinscrire/Sinscrire';

import Panne from './Components/Panne/Panne';
import Technicien from './Components/Technicien/Technicien';
import Profil from './Components/Profil/Profil';
import Statistique from './Components/Statistique/Statistique';

function App() {
  return (
    <div className="App">
     <Router>
       <Navbar />
    
       <Routes>
         <Route exact path="/" element={<Acceuil />} />
         <Route exact path="/Login" element={<Login />} />
         <Route exact path="/Sinscrire" element={<Sinscrire  />} />
       
         <Route exact path="/Panne" element={<Panne  />} />
         <Route exact path="/Technicien" element={<Technicien  />} />
         <Route exact path="/Profil" element={<Profil  />} />
         <Route exact path="/Statistique" element={<Statistique  />} />
   
       </Routes>
     </Router>
    </div>
  );
}

export default App;
