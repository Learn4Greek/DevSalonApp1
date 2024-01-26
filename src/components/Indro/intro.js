import React from 'react';
import './intro.css';
import bg from '../../images/image_2.png';
import btnImg from '../../images/image_1.png';
import {Link} from 'react-scroll';


const Intro = () => {
  return (
    <section id='indro'>
        <div className='introContent'>
            <span className='hello'>Hello,</span>  
            <span className='introText'>I'm 
                <span className='introName'> Vikash Kale</span>
                <br/>
                Website Designer
            </span>
            <p className='indroPara'>I am a Skilled we designer with experience in creationg <br/> visualy websites</p>
            <Link>
                <button className='btn'>
                    <img className='btnImg' src ={btnImg} alt=''/>
                    <span>Hire Me</span>
                </button>
            </Link>
        </div>
        <img src={bg} alt='profile' className='bg'/>
    </section>
  )
}

export default Intro