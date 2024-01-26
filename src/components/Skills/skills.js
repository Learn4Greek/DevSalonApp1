import React from 'react';
import './skills.css';
import Img1 from '../../images/image_1.png';
import Img2 from '../../images/image_2.png';
import Img3 from '../../images/logo_1.png';

const skillsList = [
    {
        img: Img1,
        title: 'UI/UX design',
        description: 'This is a demo test, you can write your own content here',
    },
    {
        img: Img2,
        title: 'Website design',
        description: 'This is a demo test can be changed while making the production ready site',
    },
    {
        img: Img3,
        title: 'App Design',
        description: 'You can write test related to mobile app development',
    }
];

const Skills = () => {
  return (
    <section id='skills'>
        <span className='skillTitle'>What i do!</span>
        <span className='skillDesc'>I am a skilled and passionate web designer with experience in creating visually appealing and user -friendy website. I have a strong understanding of design and a keen eye for details. I am proficient in HTML, CSS and JavaScript., as well as well design</span>
        {skillsList.map((skillItem) =>{ console.log(skillItem)
            return(
                <div className='skillBars'>
                    <div className='skillBar'>
                        <img src={skillItem.img} alt={skillItem.title} className='skillBarImg'/>
                        <div className='skillBarText'>
                            <h2>{skillItem.title}</h2>
                            <p>{skillItem.description}</p>
                        </div>
                    </div>
                </div>  
            );
        })}
    </section>
  )
}

export default Skills;