import './ImageList.scss';
import React from 'react';
import Iframe from 'react-iframe';

const SlideshowDetail = (props) => {

    return (
        <div className="imageList">
            <div className="projectTitle">
                <h6 className="projectNameDetail">{props.project[1].name}</h6>
                <div className="subtitle2">
                    {props.project[1].kind} | {props.project[1].year}
                </div>
            </div>
            
            {props.project[1].videoUrl.length > 0
                ? <div className="videoContainer">
                    <div className="desktopVideo">
                        <Iframe src={props.project[1].videoUrl}
                        width="100%"
                        height="600px"
                        id="projectVideo"
                        className="projectVideo"
                        display="initial"
                        position="relative" 
                        frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture" 
                        allowfullscreen
                        />
                    </div>
                    <div className="mobileVideo">
                        <Iframe src={props.project[1].videoUrl}
                        width="100%"
                        height="300px"
                        id="projectVideo"
                        className="projectVideo"
                        display="initial"
                        position="relative" 
                        frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture" 
                        allowfullscreen
                        className="desktopVideo"
                        />
                    </div>
                </div>
                : null
            }
            <div className="images-container">
                {props.project[0].images.map((img, index) => {
                    return (
                        <img key={img + index} src={img} alt="" className="imageDetail" />
                    );
                })}
            </div>
        </div>
    );
}

export default SlideshowDetail;