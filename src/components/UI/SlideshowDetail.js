import './Slideshow.css';
import React, { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const Slideshow = (props) => {
    const [current, setCurrent] = useState(0);
    const length = props.images.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const previousSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    return (
        <div className="slider">

            <IoIosArrowBack className="back-arrow" onClick={previousSlide}></IoIosArrowBack>
            {props.images.map((img, index) => {
                return (
                    <div className={index === current ? 'slide active' : 'slide'} key={index}>
                        {index === current && (<img src={img} alt="" className="image" />)}
                    </div>
                );
            })}
            <IoIosArrowForward className="forward-arrow" onClick={nextSlide}></IoIosArrowForward>


        </div>
    );
}

export default Slideshow;