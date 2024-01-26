import React from 'react';
import './works.css';
import Img1 from'../../images/image_1.png';
import Img2 from'../../images/image_2.png';
import Img3 from'../../images/logo_1.png';
import Img4 from'../../images/logo_2.png';

const ImgList = [Img1, Img2, Img3,Img4,Img1,Img2];

const Works = () => {
  return (
    <section id='works'>
        <h2 className='worksTitle'>My Profiles</h2>
        <span className='worksDesc'>I am a skilled and passionate web designer with experience in creating visually appealing and user -friendy website. I have a strong understanding of design and a keen eye for details. I am proficient in HTML, CSS and JavaScript., as well as well design</span>
        <div className='worksImgs'>
        {ImgList.map((imageItem) => {
            console.log(imageItem);
            return (
                
                    <img src={imageItem} alt='' className='worksImg'/>
                
            );
        })}
        </div>
        <button className='worksBtn'>See More</button>
    </section>
  )
}

export default Works;