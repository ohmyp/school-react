import React from 'react';

const ResultBar = ({value, max}) => {
    const progress = Math.floor(value / max * 100)
    return (
        <div className="progress rounded-bottom" style={{'border-radius':'0rem'}}>
            {progress > 0 
            ? 
            <>
              <div className="progress-bar bg-success" role="progressbar" style={{'width': progress+'%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </>
            :
            <>
              <div className="progress-bar bg-danger" role="progressbar" style={{'width': -1*progress+'%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </>}
        </div>
    );
}

export default ResultBar;
