import './ImageList.scss';
import React from 'react';

const SlideshowDetail = (props) => {

    return (
        <div className="imageList">
            <div className="projectTitle">
                <h6 className="projectNameDetail">{props.project[1].name}</h6>
                <div className="subtitle2">
                    {props.project[1].kind} | {props.project[1].year}
                </div>
            </div>
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