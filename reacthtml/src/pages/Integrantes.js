import React from "react"
import v17_2 from "../assets/IMG/v17_2.png"
import diego from "../assets/IMG/diego.png"
import rommel from "../assets/IMG/rommel.png"
import Eloy from "../assets/IMG/Eloy.png"
import daniel from "../assets/IMG/daniel.png" 
import Humber from "../assets/IMG/Humber.png"
import v31_10 from "../assets/IMG/v31_10.png"
import v31_12 from "../assets/IMG/v31_12.png"
import image_46 from "../assets/IMG/image_46.png" 
class Integrantes extends React.Component{
    render(){
        return(
                                <main className="aboutus">
                    <div className="whoweare">
                        <div className="whoweare-content">
                        <h1 className="whoweare--title">
                            ¿Quienes <span className="white">somos?</span>
                        </h1>
                        <h2 className="whoweare--desc">
                            Somos una empresa que se preocupa por la salud de nuestros clientes,
                            ChadFitness
                        </h2>
                        </div>
                        <img src={v17_2} />
                        <div className="Team-Video-ChadFitness-video">
                        <iframe
                            style={{ border: "10px solid rgb(146, 0, 0)" }}
                            src="https://www.youtube.com/embed/BIhhNoYNL40"
                            title="Silencio y Pantalla Negra - 24 Horas"
                            frameBorder={0}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen=""
                        ></iframe>
                        </div>
                    </div>
                    <h1 className="team--title">
                        TRABAJAMOS<span className="white"> EN EQUIPO</span>
                    </h1>
                    <div className="Team">
                        <div className="Card-Member">
                        <img src={diego} width="150px" height="180px" />
                        <div className="Card-Member_text">
                            <p>Fundador</p>
                            <h3>Quispe Ayala Diego</h3>
                            <div className="Card-Member_Networking">
                            <img src={v31_10} />
                            <img src={v31_12}/>
                            </div>
                        </div>
                        </div>
                        <div className="Card-Member">
                        <img src={rommel} width="150px" height="180px" />
                        <div className="Card-Member_text">
                            <p>Fundador</p>
                            <h3>Rommel Charapaqui</h3>
                            <div className="Card-Member_Networking">
                            <img src={v31_10} />
                            <img src={v31_12} />
                            </div>
                        </div>
                        </div>
                        <div className="Card-Member">
                        <img src={Eloy} width="150px" height="180px" />
                        <div className="Card-Member_text">
                            <p>Fundador</p>
                            <h3>Diego Quispe Palacin</h3>
                            <div className="Card-Member_Networking">
                            <img src={v31_10} />
                            <img src={v31_12} />
                            </div>
                        </div>
                        </div>
                        <div className="Card-Member">
                        <img src={daniel} width="150px" height="180px" />
                        <div className="Card-Member_text">
                            <p>Fundador</p>
                            <h3>Daniel Luis Lazaro</h3>
                            <div className="Card-Member_Networking">
                            <img src={v31_10} />
                            <img src= {v31_12}/>
                            </div>
                        </div>
                        </div>
                        <div className="Card-Member">
                        <img src={Humber} width="150px" height="180px" />
                        <div className="Card-Member_text">
                            <p>Fundador</p>
                            <h3>Diego Humbser Meza</h3>
                            <div className="Card-Member_Networking">
                            <img src={v31_10} />
                            <img src={v31_12} />
                            </div>
                        </div>
                        </div>
                    </div>
                    <header className="Next">
                        <nav className="Next-navabar-FAQ">
                        <li className="nav-menu--item">
                            <a href="/">
                            {" "}
                            <img src={image_46} />
                            </a>
                        </li>
                        </nav>
                    </header>
                    </main>





        )




    }






}

export default Integrantes