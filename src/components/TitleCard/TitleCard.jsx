import React from 'react';

const TitleCard = ({title, subtitle}) => {
    return (
        <div className="p-4 p-md-5 mb-4 text-white rounded bg-dark">
            <div className="col-md-12 px-0">
                <h1 className="display-4">{title}</h1>
                <p className="lead my-3">{subtitle}</p>
            </div>
        </div>
    );
}

export default TitleCard;
