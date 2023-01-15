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
    <div className='container mt-3 padre ' >
      
        <Link to = '/Atreven' className='links'>
         <figure>
            <img src={Atreven3} alt='' className='tamaño-img'/>
            <figcaption>Atreven</figcaption>
        </figure>
        </Link>

        <Link to="/Camino" className='links'>
         <figure>
            <img src={Camino3} alt='' className='tamaño-img'/>
            <figcaption>Camino</figcaption>
        </figure>
        </Link>

        <Link to = "/Confort" className='links'>
         <figure>
            <img src={Confort3} alt='' className='tamaño-img'/>
            <figcaption>Confort</figcaption>
        </figure>
        </Link>

        <Link to="/Firmemente" className='links'>
         <figure>
            <img src={Firmemente3} alt='' className='tamaño-img'/>
            <figcaption>Firmemente</figcaption>
        </figure>
        </Link>

        <Link to = "/Trabaja" className='links'>
         <figure>
            <img src={Trabaja3} alt='' className='tamaño-img'/>
            <figcaption>Trabaja</figcaption>
        </figure>
        </Link>

        <Link to="/Unica" className='links'>
         <figure>
            <img src={Unica3} alt='' className='tamaño-img'/>
            <figcaption>Unica</figcaption>
        </figure>
        </Link>
    </div>
  )
  
}


export default Navigation;