import React, { useState } from 'react';
import './sortOptions.scss'

const SortOptions = () => {
    const [activeSort, setActiveSort] = useState('По популярности');
    const sortOptions = [
        'По убыванию',
        'По возрастанию',
        'По популярности',
        'Без сортировки',
    ];

    const handleSortChange = (option) => {
        setActiveSort(option);
    };

    return (
        <ul className="sidebar__sort-wrapper">
            {sortOptions.map((option) => (
                <li
                    key={option}
                    className={`sidebar__sort-item ${activeSort === option ? 'active' : ''}`}
                    onClick={() => handleSortChange(option)}
                >
                    {option}
                </li>
            ))}
        </ul>
    );
};

export default SortOptions;