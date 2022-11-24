import React from "react"

class Premium extends React.Component{
    render(){
        return (
            <main>
                            <section className="Background-prices">
                <h1 className="prices-tittle">PLANES Y PRECIOS</h1>
                <hr className="prices-line" />
                <section className="container-prices flex">
                    <div className="columna-prices">
                    <h4 className="time-prices" style={{ color: "white" }}>
                        MONTHLY
                    </h4>
                    <h1 className="type-prices">BASICO</h1>
                    <h2 className="prices">Gratis</h2>
                    <p className="prices-description">
                        Ingresa a nuestra aplicacion y disfruta de todas las ventajas gratis que
                        te ofrecemos
                    </p>
                    <ol className="list-gifs" style={{ paddingBottom: 77 }}>
                        <li>Acceso completo a la aplicacion</li>
                        <li>Ejercicios casuales de corta duracion</li>
                        <li>Vista de los avances en ejercicios</li>
                        <li>Acceso a videos cortos</li>
                    </ol>
                    <h6 className="btn-prices">BUY NOW</h6>
                    </div>
                    <div className="columna-prices">
                    <h4 className="time-prices">MONTHLY</h4>
                    <h1 className="type-prices">VIP</h1>
                    <h2 className="prices">S/19.99</h2>
                    <p className="prices-description">
                        Obten la ventaja VIP y ten acceso a todas sus ventajas
                    </p>
                    <ol className="list-gifs" style={{ paddingBottom: 40 }}>
                        <li>Entrenadores personales via zoom</li>
                        <li>Acceso completo a todas las funcionalidades de la aplicacion</li>
                        <li>Aumento en tiempo en los ent renamientos casuales</li>
                        <li>Diagnostico para dietas personalizadas</li>
                        <li>Todas las ventajas del Basico</li>
                    </ol>
                    <h6 className="btn-prices">BUY NOW</h6>
                    </div>
                    <div className="columna-prices">
                    <h4 className="time-prices">MONTHLY</h4>
                    <h1 className="type-prices">DÚO VIP</h1>
                    <h2 className="prices">S/29.99</h2>
                    <p className="prices-description">
                        Obten la ventaja Dúo VIP y disfruta con alguien mas de todas sus
                        ventajas
                    </p>
                    <ol className="list-gifs" style={{ paddingBottom: 87 }}>
                        <li>Dos cuentas con as ventajas del individual</li>
                        <li>30% de descuento</li>
                    </ol>
                    <h6 className="btn-prices">BUY NOW</h6>
                    </div>
                </section>
                </section>
            </main>


        )


    }



}

export default Premium