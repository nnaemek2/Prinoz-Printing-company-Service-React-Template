import React, { useState } from 'react';

const FilterStarRating = () => {
    const [checkedStates, setCheckedStates] = useState({
        fiveStar: false,
        fourStar: true, 
        threeStar: false,
        twoStar: false,
        oneStar: false,
    });

    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        setCheckedStates((prevState) => ({
            ...prevState,
            [name]: checked,
        }));
    };

    return (
        <div className="filter-size">
            <label className="checkbox-single d-flex align-items-center">
                <span className="d-flex gap-xl-3 gap-2 align-items-center">
                    <span className="checkbox-area d-center">
                        <input
                            type="checkbox"
                            name="fiveStar"
                            checked={checkedStates.fiveStar}
                            onChange={handleCheckboxChange}
                        />
                        <span className="checkmark d-center"></span>
                    </span>
                    <span className="text-color">
                        <span className="star">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </span>
                        ( 5 Star )
                    </span>
                </span>
            </label>

            <label className="checkbox-single d-flex align-items-center">
                <span className="d-flex gap-xl-3 gap-2 align-items-center">
                    <span className="checkbox-area d-center">
                        <input
                            type="checkbox"
                            name="fourStar"
                            checked={checkedStates.fourStar}
                            onChange={handleCheckboxChange}
                        />
                        <span className="checkmark d-center"></span>
                    </span>
                    <span className="text-color">
                        <span className="star">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star color-2"></i>
                        </span>
                        ( 4 Star )
                    </span>
                </span>
            </label>

            <label className="checkbox-single d-flex align-items-center">
                <span className="d-flex gap-xl-3 gap-2 align-items-center">
                    <span className="checkbox-area d-center">
                        <input
                            type="checkbox"
                            name="threeStar"
                            checked={checkedStates.threeStar}
                            onChange={handleCheckboxChange}
                        />
                        <span className="checkmark d-center"></span>
                    </span>
                    <span className="text-color">
                        <span className="star">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star color-2"></i>
                            <i className="fas fa-star color-2"></i>
                        </span>
                        ( 3 Star )
                    </span>
                </span>
            </label>

            <label className="checkbox-single d-flex align-items-center">
                <span className="d-flex gap-xl-3 gap-2 align-items-center">
                    <span className="checkbox-area d-center">
                        <input
                            type="checkbox"
                            name="twoStar"
                            checked={checkedStates.twoStar}
                            onChange={handleCheckboxChange}
                        />
                        <span className="checkmark d-center"></span>
                    </span>
                    <span className="text-color">
                        <span className="star">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star color-2"></i>
                            <i className="fas fa-star color-2"></i>
                            <i className="fas fa-star color-2"></i>
                        </span>
                        ( 2 Star )
                    </span>
                </span>
            </label>

            <label className="checkbox-single d-flex align-items-center">
                <span className="d-flex gap-xl-3 gap-2 align-items-center">
                    <span className="checkbox-area d-center">
                        <input
                            type="checkbox"
                            name="oneStar"
                            checked={checkedStates.oneStar}
                            onChange={handleCheckboxChange}
                        />
                        <span className="checkmark d-center"></span>
                    </span>
                    <span className="text-color">
                        <span className="star">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star color-2"></i>
                            <i className="fas fa-star color-2"></i>
                            <i className="fas fa-star color-2"></i>
                            <i className="fas fa-star color-2"></i>
                        </span>
                        ( 1 Star )
                    </span>
                </span>
            </label>
        </div>
    );
};

export default FilterStarRating;
