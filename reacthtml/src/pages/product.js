import React from "react"

class Product extends React.Component{

    render(){

        return(

            <main>
           
            <section className="chad-2">
                <h1 className="Chad-2-title">
                {" "}
                LA MEJOR APP DE
                <br /> FITNESS
                </h1>
                <h1 className="subtext-product">
                {" "}
                Conoce sobre esta nueva aplicacion que guiara por
                <br /> tu camino hacia una vida mas saludable
                </h1>
            </section>
            <section className="About-Idea">
                <div className="container-About-Idea">
                <h1 className="About-Idea-Title">Conoce mas sobre nuestra idea</h1>
                <div className="About-Idea-List">
                    <div className="About-Idea-List-Item">
                    <img src="/IMG/image_salad.png" />
                    <p className="About-Idea-Desc">
                        Disfruta de comidas saludables y <br />
                        sabrosas para mejorar la <br />
                        eficiencia de tus ejercicios
                    </p>
                    </div>
                    <div className="About-Idea-List-Item">
                    <img src="/IMG/image_bicep.png" />
                    <p className="About-Idea-Desc">
                        Acceso a ejercicios de todo tipo
                        <br /> que se adaptan a los objetivos del cliente
                    </p>
                    </div>
                    <div className="About-Idea-List-Item">
                    <img src="/IMG/image_tv.png" />
                    <p className="About-Idea-Desc">
                        Ten acceso a todas las funciones <br /> de la app, y usalo en tu
                        casa,
                        <br /> el gimnasio, donde tu quieras
                    </p>
                    </div>
                    <div className="About-Idea-List-Item">
                    <img src="/IMG/image_trainer.png" />
                    <p className="About-Idea-Desc">
                        Los mejores entrenadores para
                        <br /> guiarte en tu camino hacia una vida
                        <br /> mas saludable
                    </p>
                    </div>
                </div>
                </div>
            </section>
            <section className="Product-Video">
                <div className="container-video">
                <div className="container-video-desc">
                    <h1 className="Product-Video-Tittle">Sobre el Producto</h1>
                    <h1 className="subtex-product-video">
                    Una aplicacion de fitness que usa la motivacion <br /> para hacer que
                    nuestros clientes matengan el <br /> animo de seguir en su camino de
                    una vida saludable{" "}
                    </h1>
                    <h1 className="Product-Video-Image">
                    <img src="/IMG/image_61.png" width="80%" height="80%" />
                    </h1>
                </div>
                <div className="container-video-div">
                    <div className="Product-Video-ChadFitness">
                    <iframe
                        src="https://www.youtube.com/embed/BIhhNoYNL40"
                        title="Silencio y Pantalla Negra - 24 Horas"
                        frameBorder={0}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen=""
                    ></iframe>
                    </div>
                </div>
                </div>
            </section>
            </main>


        )



    }






}


export default Product