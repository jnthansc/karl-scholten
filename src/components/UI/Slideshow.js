import './Slideshow.scss';
import React, { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom';
import ProjectImages from '../../data/ProjectImages';

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
        <div className="slideshow">

            <IoIosArrowBack className="back-arrow" onClick={previousSlide}></IoIosArrowBack>
            {props.images.map((img, index) => {
                return (
                    <div className={index === current ? 'slide activeSlide' : 'slide'} key={index}>
                        {index === current && (
                            <Link className="slideshowLink" onClick={() => { ProjectImages[0].activeProjectIndex = index }} to="/Arbeit">
                                <img src={img} alt="" className="slideshow-image" />
                                {/* <div className="imageWrapper">
                                    <img src={img} alt="" className="slideshow-image" />
                                    <div className="projectNameSlide">
                                        <div className="projectNameText">
                                            {ProjectImages[0].projects[index][1].name}
                                        </div>
                                    </div>
                                </div> */}
                                {/* <div className="projectName">
                                    <div className="projectNameText">
                                        {ProjectImages[0].projects[index][1].name}
                                    </div>
                                    TEST
                                </div> */}
                            </Link>
                        )}
                    </div>
                );
            })}
            <IoIosArrowForward className="forward-arrow" onClick={nextSlide}></IoIosArrowForward>


        </div>
        // <Carousel>
        //     {props.images.map((img, index) => {
        //         return (
        //             <Link onClick={() => { ProjectImages[0].activeProjectIndex = index }} to="/Arbeit">
        //                 <img src={img} alt="" className="" />
        //             </Link>
        //         );
        //     })}
        // </Carousel>
    );
}

export default Slideshow;