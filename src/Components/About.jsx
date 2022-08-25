import React from 'react';
import aboutimage from '../images/nosotros.jpg'

function About(){
    return(
        <div id='about'>
            <div className='about-image'>
                <img src={aboutimage} alt=''/>
            </div>
            <div className='about-text'>
                <h1>Aceca de Nosotros</h1>
                <p>Somos una empresa desarrolladora de prótesis inteligentes, que nuestro objetivo es que las personas
                que tengan alguna discapacidad y necesiten de una prótesis, nosotros poderles brindar el mejor servicio ofreciendole
                nuestros productos de calidad, y ayudar a que la vida de las personas mejore.<br></br><br></br>

                Sin embargo las prótesis que ofrecemos a nuestros clientes estan diseñadas de tal forma que las personas que
                carecen de manos, brazos y piernas puedan tener una vida más digna.
                </p>
                <button>Leer más</button>
            </div>

        </div>
    )   
}

export default About;