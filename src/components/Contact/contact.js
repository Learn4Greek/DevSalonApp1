import React, { useRef } from 'react';
import './contact.css';
import Img1 from'../../images/image_1.png';
import Img2 from'../../images/image_2.png';
import Img3 from'../../images/logo_1.png';
import Img4 from'../../images/logo_2.png';
import emailjs from '@emailjs/browser';

const ImgList = [Img1, Img2, Img3,Img4,Img1,Img2];
const SocialMediaLinks = [Img1, Img2, Img3,Img4];

const Contact = () => {
    const form = useRef();
    const sendmail = (e) => {
        e.preventdefault();

        emailjs.sendForm('Your_Service_Id','Your_Template_Id',form.current, 'Your_Public_Key').then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text)
        }
        );
    };

  return (
    <section id='contactPage'>
        <div className='clients'>
            <h1 className='contactPageTitle'>My Clients</h1>
            <p className='clientDesc'>
                I have had the opportunity to work with a diverse group of companies. Some of the the notable companies are below mentions. I have worked with includes
            </p>
        </div>

        <div className='clientImgs'>
            {ImgList.map((imgItem) =>{
                console.log(imgItem);
                return (
                    <img src={imgItem} alt='' className='clientImg'/>
                );
            })}
        </div>

        <div id='contact'>
            <h1 className='contactPAgeTitle'>Contact Me!</h1>
            <span className='contactDesc'>Please fill out the form below to discuss any work opportunities</span>
            <form className='contactForm' ref={form} onSubmit={sendmail}>
                <input type='text' className='name' placeholder='Enter Your Name'/>
                <input type='email' className='email' placeholder='Enter Your Email'/>
                <textarea name='message' className='msg' rows={5} placeholder='Enter Messages'></textarea> 
                <button type='submit' value='send' className='submitBtn'>Submit</button>
                <div className='links'>
                    {SocialMediaLinks.map((imgItem) =>{
                        console.log(imgItem);
                        return (
                            <img src={imgItem} alt='' className='link'/>
                        );
                    })}
                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact;