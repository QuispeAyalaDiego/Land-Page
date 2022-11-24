import React from "react"
import image_46 from "../assets/IMG/image_46.png"
class FAQ extends React.Component{
    render(){
        return (
            <main>
            <section className="chad">
                <h1 className="hero-title-FAQ">
                {" "}
                <span className="white">
                    PREGUNTAS
                    <br />
                    FRECUENTES
                </span>
                </h1>
                <h2 className="subtext">
                <span className="white">
                    ¿Tienes alguna pregunta? Nosotros estamos aqui para solucionar tus
                    dudas.
                    <br /> Echale un vistazo a nuestra lista de respuestas.
                </span>{" "}
                </h2>
            </section>
            <section className="Principal-FAQ">
                <div className="container">
                <div className="FAQ-list">
                    <div className="FAQ-list-item">
                    <div className="FAQ-list-card">
                        <h3 className="FAQ-list-item-title">
                        ¿Qué beneficios tiene adquirir
                        <br /> este producto o servicio?
                        </h3>
                        <p className="FAQ-benefits-item--desc">
                        Al obtener este servicio podras tener acceso a muchos tipos de
                        ejercicios que se adapten atus objetivos. Ademas, si obtienes el
                        VIP podras tener seguimiento de entrenadores personales, los
                        cuales tambien te guiaran en tu alimentamiento.
                        </p>
                    </div>
                    </div>
                    <div className="FAQ-list-item">
                    <div className="FAQ-list-card">
                        <h3 className="FAQ-list-item-title">
                        ¿Realmente necesito este
                        <br />
                        producto o servicio?
                        </h3>
                        <p className="FAQ-benefits-item--desc">
                        Este servicio te aportara mas facilidades y una guia que te
                        <br /> ayudara en poder tener una vida mas saludable. Esto es
                        <br /> muy necesario en la vida para evitar problemas futuros de
                        <br /> la salud.
                        </p>
                    </div>
                    </div>
                    <div className="FAQ-list-item">
                    <div className="FAQ-list-card">
                        <h3 className="FAQ-list-item-title">
                        ¿Qué métodos de pago aceptan?
                        </h3>
                        <p className="FAQ-benefits-item--desc">
                        Se acepta pagos por medio de Paypal o VISA. El pago es
                        <br /> seguro y se puede hacer un reembolso antes de los 10 dias
                        de usado el VIP.
                        </p>
                    </div>
                    </div>
                    <div className="FAQ-list-item">
                    <div className="FAQ-list-card">
                        <h3 className="FAQ-list-item-title">¿Como funciona?</h3>
                        <p className="FAQ-benefits-item--desc">
                        Al registrarte e iniciar sesion en la aplicacion tendras
                        <br /> acceso a las funciones basicas de la aplicacion. A partir
                        de aqui, puedes empezar con los ejercicios casuales
                        <br /> y ver tus avances con cada ejercicio que realices. <br />{" "}
                        Podras acceder en cualquier momento a nuevas funciones por medio
                        de la suscripcion VIP.
                        </p>
                    </div>
                    </div>
                </div>
                <header className="Next">
                    <nav className="Next-navabar">
                    <li className="nav-menu--item">
                        <a href="/Product">
                        {" "}
                        <img src={image_46} />
                        </a>
                    </li>
                    </nav>
                </header>
                </div>
            </section>
            </main>


        )

      



    }




}
export default FAQ