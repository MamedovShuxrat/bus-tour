import React, { useState } from "react";
import './busModels.scss'

const BusModels = () => {
    const [expandedBrands, setExpandedBrands] = useState([]);

    const busFilters = [
        {
            brand: "Ford",
            count: 12,
            models: [
                { name: "Transit Custom", count: 4 },
                { name: "F-150", count: 5 },
                { name: "Tourneo Connect", count: 3 },
            ],
        },
        {
            brand: "Mercedes-Benz",
            count: 15,
            models: [
                { name: "Tourismo M/3 RHD", count: 5 },
                { name: "Sprinter 519 CDI", count: 3 },
                { name: "Citaro G", count: 7 },
            ],
        },
        {
            brand: "MAN",
            count: 5,
            models: [
                { name: "Lion's Coach", count: 2 },
                { name: "Neoplan Cityliner", count: 3 },
            ],
        },
        {
            brand: "Hyundai",
            count: 9,
            models: [
                { name: "County", count: 4 },
                { name: "Universe", count: 3 },
                { name: "H350", count: 2 },
            ],
        },
        {
            brand: "Kia",
            count: 7,
            models: [
                { name: "Carnival", count: 3 },
                { name: "Granbird", count: 2 },
                { name: "Soul Booster", count: 2 },
            ],
        }
    ];

    const toggleBrand = (brand) => {
        setExpandedBrands((prev) =>
            prev.includes(brand)
                ? prev.filter((b) => b !== brand)
                : [...prev, brand]
        );
    };

    return (
        <div className="filter-sidebar">
            {busFilters.map((filter) => (
                <div key={filter.brand} className="filter-item">
                    <label>
                        <input
                            type="checkbox"
                            onChange={() => toggleBrand(filter.brand)}
                            checked={expandedBrands.includes(filter.brand)}
                        />
                        {filter.brand} ({filter.count})
                    </label>
                    {expandedBrands.includes(filter.brand) && (
                        <div className="model-list">
                            {filter.models.map((model) => (
                                <label key={model.name} className="model-item">
                                    <input type="checkbox" />
                                    {model.name} ({model.count})
                                </label>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default BusModels;
