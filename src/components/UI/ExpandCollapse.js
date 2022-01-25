import './ExpandCollapse.css';
import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import ProjectImages from '../../data/ProjectImages';

const ExpandCollapse = (props) => {

    const [isExpanded, setIsExpanded] = useState(false);

    const activeProjectIndex = ProjectImages[0].activeProjectIndex;

    const expand = () => {
        setIsExpanded(true);
    }
    const collapse = () => {
        setIsExpanded(false);
    }

    return (
        <div className="expand-collapse">
            {isExpanded ?
                (<div className="expanded">
                    <IoIosArrowUp className="up" onClick={collapse} />
                    <div className="info-box">
                        <div className="info-line">
                            <p>Serie:</p>
                            <p>{ProjectImages[0].projects[activeProjectIndex][1].name}</p>
                        </div>
                        <div className="info-line">
                            <p>Jahr:</p>
                            <p>{ProjectImages[0].projects[activeProjectIndex][1].year}</p>
                        </div>
                    </div>
                </div>) :
                (<div className="collapsed">
                    <IoIosArrowDown className="down" onClick={expand} />
                </div>)
            }
        </div>
    );

}

export default ExpandCollapse;