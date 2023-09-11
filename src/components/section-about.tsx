import React from 'react'

import { StaticImage } from "gatsby-plugin-image";


const SectionAbout: React.FC = () => {
  return (
    <section className="section section--about">
            <div className="content content--about">
                <div className="text--content">
                    <h1 className="title">Sé parte de nuestra comunidad</h1>
                    <p>Capacítate junto a otros peruanos apasionados por la tecnología</p>
                </div>
                <div className="about--cards">
                    <article className="card">
                        <div className="card__content">
                            <div className="card__header">
                                {/* <img src="./../images/teaching1.png" alt=""> */}
                                <StaticImage className='img'
                                    src="../images/teaching1.png" // Ruta a tu archivo SVG relativa a la carpeta de imágenes
                                    alt="Descripción de la imagen"
                                    placeholder="blurred" // Opciones de carga, como "tracedSVG", "dominantColor", etc.
                                    />
                            </div>
                            
                            <div className="card__footer">
                                <p>
                                    Para difundir el conocimiento realizamos diversas iniciativas virtuales y presenciales. Así mismo, para que este proceso sea emocionante, motivante y cooperativo, creamos un espacio en nuestro servidor de Discord para conectar con otros profesionales con los mismos intereses.
                                </p>
                                <a href="#" className="btn btn-ghost">
                                    ¡Únete a la comunidad!                                   
                                </a>
                            </div>
                        </div>
                    </article> 
                    <article className="card">
                        <div className="card__content">
                            <div className="card__header">
                                {/* <img src="./../images/teaching2.png" alt=""> */}
                                <StaticImage className='img'
                                    src="../images/teaching2.png" // Ruta a tu archivo SVG relativa a la carpeta de imágenes
                                    alt="Descripción de la imagen"
                                    placeholder="blurred" // Opciones de carga, como "tracedSVG", "dominantColor", etc.
                                    />
                            </div>
                            
                            <div className="card__footer">
                                <p>
                                    En ZonaTech buscamos desarrollar las habilidades de jóvenes peruanos en diversas especialidades relacionadas al Software, por ello contamos con diversas iniciativas como talleres, grupos de estudio, hackathons, así como prácticas de voluntariado con proyectos internos de la organización.
                                </p>
                                <a href="#" className="btn btn-ghost">
                                    Conocer iniciativas                                    
                                </a>
                            </div>
                        </div>
                    </article>                  
                </div>
            </div>
        </section>
  )
}

export default SectionAbout