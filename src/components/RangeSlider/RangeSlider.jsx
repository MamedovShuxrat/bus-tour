import React, { useState } from 'react';
import './rangeSlider.scss'

const RangeSlider = () => {
    const [value, setValue] = useState(50);

    const handleSliderChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <div className="range">
            <div className="range__line">
                <div
                    className="range__tooltip"
                    style={{ left: `${value}%` }}
                >
                    {value}
                </div>
                <div
                    className="range__blue-line"
                    style={{ width: `${value}%` }}
                ></div>
            </div>
            <input
                type="range"
                className="range__input"
                min="0"
                max="100"
                value={value}
                onChange={handleSliderChange}
            />
            <div className="range__summ">
                <span className="range__total_sum">{value}</span>
            </div>
        </div>
    );
};

export default RangeSlider;