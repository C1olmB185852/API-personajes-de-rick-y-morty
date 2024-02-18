import React from "react";

const Pagination = ({onPrevious, onNext}) => {

const handlePrevious = () => {
    onPrevious();
}

const handleNext = () => {
    onNext();
}

    return (
        <ul className="pagination justify-content-center">
            <li className="page-item">
                <button className="page-link" onClick={handlePrevious}>Previous</button>
            </li>
            <li className="page-item"> 
                <button className="page-link" onClick={handleNext}>Next</button>
            </li>
        </ul>
    )
};

export default Pagination;
