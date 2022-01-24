import React from 'react';

const Accordion = ({ test, name }) => {
    console.log(test, name);
    return (
            <div className="accordion-item">
                <h2 className="accordion-header" id={"heading"+name}>
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#collapse"+name} aria-expanded="true" aria-controls={"collapse"+name}>
                        {test.categoryNames[name]}
                    </button>
                </h2>
                <div id={"collapse"+name} className="accordion-collapse collapse" aria-labelledby={"heading"+name} data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        {test.interpretation[name]}
                    </div>
                </div>
        </div>
    );
}

export default Accordion;
