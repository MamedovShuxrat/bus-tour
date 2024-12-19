import React, { useState } from 'react';
import './yearFilters.scss'

const YearFilters = () => {
    const [selectedYears, setSelectedYears] = useState([]);

    const years = Array.from({ length: 10 }, (_, index) => 2024 - index);

    const toggleYear = (year) => {
        setSelectedYears((prev) =>
            prev.includes(year)
                ? prev.filter((y) => y !== year)
                : [...prev, year]
        );
    };

    return (
        <div className="year-filter">
            {years.map((year) => (
                <div key={year} className="year-filter__item">
                    <label>
                        <input
                            type="checkbox"
                            onChange={() => toggleYear(year)}
                            checked={selectedYears.includes(year)}
                        />
                        {year}
                    </label>
                </div>
            ))}
        </div>
    );
};

export default YearFilters;