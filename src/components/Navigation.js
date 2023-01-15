import React from 'react'
import { Link} from 'react-router-dom'
import Atreven3 from '../images/atreven.jpg'
import Camino3 from '../images/camino.jpg'
import Confort3 from '../images/confort.jpg'
import Firmemente3 from '../images/firmemente.jpg'
import Trabaja3 from '../images/trabaja.jpg'
import Unica3 from '../images/unica.jpg'


const Navigation = () => {
  return (
    <div>
        <Link to = '/Atreven'>
         <figure>
            <img src={Atreven3} alt=''/>
            <figcaption>Atreven</figcaption>
        </figure>
        </Link>

        <Link to="/Camino">
         <figure>
            <img src={Camino3} alt=''/>
            <figcaption>Camino</figcaption>
        </figure>
        </Link>

        <Link to = "/Confort">
         <figure>
            <img src={Confort3} alt=''/>
            <figcaption>Confort</figcaption>
        </figure>
        </Link>

        <Link to="/Firmemente">
         <figure>
            <img src={Firmemente3} alt=''/>
            <figcaption>Firmemente</figcaption>
        </figure>
        </Link>

        <Link to = "/Trabaja">
         <figure>
            <img src={Trabaja3} alt=''/>
            <figcaption>Trabaja</figcaption>
        </figure>
        </Link>

        <Link to="/Unica">
         <figure>
            <img src={Unica3} alt=''/>
            <figcaption>Unica</figcaption>
        </figure>
        </Link>
    </div>
  )
}

export default Navigation