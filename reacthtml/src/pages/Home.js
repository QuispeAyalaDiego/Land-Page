import React from "react";
import v5_22 from "../assets/IMG/v5_22.png"
import v5_24 from "../assets/IMG/v5_24.png"
import v5_26 from "../assets/IMG/v5_26.png"
import Trainer_Mateo from "../assets/IMG/Trainer_Mateo.png"
import Trainer_Andree from "../assets/IMG/Trainer_Andree.png"
import Trainer_Manuela from "../assets/IMG/Trainer_Manuela.png"
import Trainer_Simon from "../assets/IMG/Trainer_Simon.png"
import BGM_Sara from "../assets/IMG/BGM_Sara.PNG"
import v5_13 from "../assets/IMG/v5_13.png"
import image_28 from "../assets/IMG/image_28.png"
import img_face from "../assets/IMG/img_face.png"
import image_18 from "../assets/IMG/image_18.png"
import image_19 from "../assets/IMG/image_19.png"
class Home extends React.Component{
   render(){

    return (

        <main>
        <section className="hero">
          <div className="container">
            {" "}
            <h1 className="hero-title">
              NO ERES LO <span className="white">QUE</span>
              <br />
              LOGRAS,
              <br />
              <span>
                <br />
                ERES
                <br />
              </span>{" "}
              <br />
              LO QUE
              <br />
              <br />
              <span className="white">SUPERAS</span>
              <br />
            </h1>
          </div>
        </section>
        <section className="benefits">
          <div className="container">
            <h2 className="text-center benefits-title">
              MAXIMIZA TUS ENTRENAMIENTOS CON
            </h2>
            <div className="benefits-list">
              <div className="benefits-list--item">
                <h3 className="benefits-item--title">Rutinas de Ejercicios</h3>
                
                <img
                  src={v5_22}
                  alt="imgv5_22"
                  className="benefits-item--img"
                />
                <p className="benefits-item--desc">
                  Te damos rutinas para mejorar tu performance día a día
                </p>
              </div>
              <div className="benefits-list--item">
                <h3 className="benefits-item--title">Entrenadores Personales</h3>
                <img
                  src={v5_24}
                  alt="imgv5_24"
                  className="benefits-item--img"
                />
                <p className="benefits-item--desc">
                  Damos la oportunidad de tener un entrenamiento muy personalizado
                  para tu persona.
                </p>
              </div>
              <div className="benefits-list--item">
                <h3 className="benefits-item--title">Videos de Alta Calidad</h3>
                <img
                  src={v5_26}
                  alt="imgv5_26"
                  className="benefits-item--img"
                />
                <p className="benefits-item--desc">
                  Ejercicios claros y precisos para tu progreso personal.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section />
        <section className="Trainer-Info">
          <h1 className="Trainer-Title">Entrenadores Capacitados</h1>
          <div className="Trainer-List">
            <div className="Trainer-List-Item">
              <img src={Trainer_Mateo} alt="img_Trainer_Mateo" />
              <h3 className="Trainer-List-Name">Mateo Sanchez</h3>
              <p className="Trainer-List-Description">29 años</p>
            </div>
            <div className="Trainer-List-Item">
              <img src={Trainer_Andree} alt="img_Trainer_Andree" />
              <h3 className="Trainer-List-Name">Andree Sono</h3>
              <p className="Trainer-List-Description">22 años</p>
            </div>
            <div className="Trainer-List-Item">
              <img src={Trainer_Manuela} alt="img_Trainer_Manuela" />
              <h3 className="Trainer-List-Name">Manuela Cross</h3>
              <p className="Trainer-List-Description">31 años</p>
            </div>
            <div className="Trainer-List-Item">
              <img src={Trainer_Simon} alt="img_Trainer_Simon" />
              <h3 className="Trainer-List-Name">Simon Freeze</h3>
              <p className="Trainer-List-Description">30 años</p>
            </div>
          </div>
        </section>
        <section className="Cliente-Info">
          <div className="Cliente-Info-Red">
            <img src={BGM_Sara} alt="img_Sara" />
          </div>
        </section>
        <section className="Ingresar-Correo">
          <div className="Container">
            <h1 className="Ingresar-Correo-Title">Que esperas Intentemoslo</h1>
            <p className="Ingresar-Correo-Desc">
              Registra tu correo para obtener actualizacion constantes del programa en
              cuestión
            </p>
            <div className="infoContact">
              <form className="contacto">
                <input type="text" name="email" placeholder="Correo electronico" />
              </form>
              <button>Enviar</button>
            </div>
          </div>
        </section>
        <header className="header">
          <nav className="navbar container">
            <img src={v5_13} alt="Logo" className="logo" />
            <ul className="nav-menu">
              <li className="nav-menu--item">
                <img src={image_28} alt="image_28" />
              </li>
              <li className="nav-menu--item">
                <img src={img_face} alt="img_face" />
              </li>
              <li className="nav-menu--item">
                <img src={image_18} alt="image_18" />
              </li>
              <li className="nav-menu--item">
                <img src={image_19} alt="image_18" />
              </li>
            </ul>
          </nav>
        </header>
      </main>
      

        );


   }  



}

export default Home;