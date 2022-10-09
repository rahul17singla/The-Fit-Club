import React from 'react'
import Header from '../Header/Header'
import './Hero.css'
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import Heart from '../../assets/heart.png'
import Calories from '../../assets/calories.png'
import NumberCounter from 'number-counter'

const Hero = () => {
    return (
        <div className='hero' id='home'>
            <div className="blur hero-blur"></div>
            <div className="left-h">
                <Header />

                <div className="the-best-ad">
                    <div></div>
                    <span>
                        the best fitness club in the city
                    </span>
                </div>

                <div className="hero-text">
                    <div>
                        <span className='stroke-text'>Shape </span>
                        <span>Your</span>
                    </div>
                    <div>
                        <span>Ideal Body</span>
                    </div>
                    <div>
                        <span>
                            Helping here to give you the perfect and ideal body, so you can live your life upto the fullest!
                        </span>
                    </div>
                </div>

                <div className="figures">
                    <div>
                        <span>
                            <NumberCounter end={100} start={0} delay='1' postFix="+" />
                        </span>
                        <span>Expert Coaches</span>
                    </div>
                    <div>
                        <span>
                            <NumberCounter end={1250} start={1050} delay='1' postFix="+" />
                        </span>
                        <span>Members Joined</span>
                    </div>
                    <div>
                        <span>
                            <NumberCounter end={50} start={0} delay='1' postFix="+" />
                        </span>
                        <span>Fitness Programs</span>
                    </div>
                </div>

                <div className='hero-buttons'>
                    <button className="btn">Get Started</button>
                    <button className="btn">Learn More</button>
                </div>
            </div>
            <div className="right-h">
                <button className='btn'>Join Now</button>

                <div className="heart-rate">
                    <img src={Heart} alt="" />
                    <span>Heart Rate </span>
                    <span>117 bpm</span>
                </div>
                <img src={hero_image} alt="" className='hero-image' />
                <img src={hero_image_back} alt="" className='hero-image-back' />

                <div className="calories">
                    <img src={Calories} alt="" />
                    <div>
                        <span>Calories Burnt</span>
                        <span>220 kcal</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
