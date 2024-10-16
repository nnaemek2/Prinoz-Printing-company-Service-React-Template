import React, { useState } from 'react';
import { Link } from 'react-router-dom';






const ClickHandler = () => {
    window.scrollTo(10, 0);
};
const RangeBarCustom = () => {
    const [minValue, setMinValue] = useState(2500);
    const [maxValue, setMaxValue] = useState(7500);
    const [inputMin, setInputMin] = useState(100);
    const [inputMax, setInputMax] = useState(1000);

    const handleMinChange = (e) => {
        const value = Math.min(+e.target.value, maxValue - 100);
        setMinValue(value);
        setInputMin(value);
    };

    const handleMaxChange = (e) => {
        const value = Math.max(+e.target.value, minValue + 100);
        setMaxValue(value);
        setInputMax(value);
    };

    const handleInputMinChange = (e) => {
        const value = Math.min(+e.target.value, inputMax - 100);
        setInputMin(value);
        setMinValue(value);
    };

    const handleInputMaxChange = (e) => {
        const value = Math.max(+e.target.value, inputMin + 100);
        setInputMax(value);
        setMaxValue(value);
    };

    return (
        <div className="range__barcustom">
            <div className="slider">
                <div
                    className="progress"
                    style={{ left: `${(minValue / 10000) * 100}%`, right: `${100 - (maxValue / 10000) * 100}%` }}
                ></div>
            </div>
            <div className="range-input">
                <input
                    type="range"
                    className="range-min"
                    min="0"
                    max="10000"
                    value={minValue}
                    onChange={handleMinChange}
                />
                <input
                    type="range"
                    className="range-max"
                    min="100"
                    max="10000"
                    value={maxValue}
                    onChange={handleMaxChange}
                />

                <div className="range-items">
                    <div className="price-input d-flex">
                        <div className="field">
                            <span>$</span>
                            <input
                                type="number"
                                className="input-min"
                                value={inputMin}
                                onChange={handleInputMinChange}
                            />
                        </div>
                        <div className="separators">-</div>
                        <div className="field">
                            <span>$</span>
                            <input
                                type="number"
                                className="input-max"
                                value={inputMax}
                                onChange={handleInputMaxChange}
                            />
                        </div>
                        <Link onClick={ClickHandler} to="#" className="theme-btn border-radius-none">
                            Filter
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RangeBarCustom;
