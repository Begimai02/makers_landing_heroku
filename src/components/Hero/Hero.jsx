import React from 'react';
import './Hero.css'
import Button from '../Button/Button';
import hero2 from '../../assets/main3.jpg';

const Hero = () => {
    return (
        <div className='hero_container'>
            <div className='hero_content'>

                <div className="hero_img">
                    <img src={hero2} alt=""/>
                </div>

                <div className="hero_info">
                    <h1 className='hero_title'>Научись программировать за 3 месяца обучаясь 5 дней в неделю по 8 часов.</h1>
                    <h3 className='hero_text'>520 часов обучения, полностью онлайн, 3 раза быстрее, чем другие курсы в Алматы</h3>
                </div>
                
            </div>
                <Button className="hero_btn" />
        </div>
    );
};

export default Hero;