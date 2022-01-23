import React from 'react';
import { Link } from 'react-router-dom';


const CommonCard = ({image, title, subtitle, buttons}) => {
    return (
        <div className="col mt-2">
            <div className="card" >
                <img src={image} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{subtitle}</p>
                </div>
                {buttons.map((button, i) => {
                    return <Link to={button.href} key={i + button.href} className='btn btn-outline-dark m-2'>{button.text}</Link>
                })}
                
            </div>
        </div>
    );
}

export default CommonCard;
