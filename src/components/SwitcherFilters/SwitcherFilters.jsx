import React, { useState } from 'react';
import './switcherFilters.scss'

const SwitcherFilters = () => {
    const filters = [
        { label: "Климат - контроль", value: "climate control" },
        { label: "Кондиционер", value: "conditioner" },
        { label: "Багажный отсек", value: "cargo hold" },
        { label: "Информационное табло", value: "information board" },
        { label: "Wi-Fi", value: "Wi-Fi" },
        { label: "Микрофон", value: "Microphone" },
        { label: "Розетки", value: "sockets" },
        { label: "Ремни", value: "belts" },
        { label: "Места для инвалидов", value: "places for the disabled" },
    ];

    const [activeFilters, setActiveFilters] = useState(() =>
        filters.reduce((acc, filter) => {
            acc[filter.value] = false;
            return acc;
        }, {})
    );

    const handleToggle = (value) => {
        setActiveFilters((prev) => {
            const newState = { ...prev, [value]: !prev[value] };
            return newState;
        });
    };

    return (
        <div className="switch-group">
            {filters.map((filter) => (
                <div
                    key={filter.value}
                    className="switch-wrapper"
                    onClick={() => handleToggle(filter.value)}
                >
                    <div
                        className={`switch-button ${activeFilters[filter.value] ? "active" : ""
                            }`}
                    >
                        <div className="switch-circle" />
                    </div>
                    <span
                        className={`switch-label ${activeFilters[filter.value] ? "active" : ""
                            }`}
                    >
                        {filter.label}
                    </span>
                </div>
            ))}
        </div>
    );
};

export default SwitcherFilters;
