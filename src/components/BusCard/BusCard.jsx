import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import starIcon from '../../assets/icons/bus-card/star.svg'
import favoriteIcon from '../../assets/icons/bus-card/bookmark.svg'
import favoriteActiveIcon from '../../assets/icons/bus-card/bookmark-active.svg'
import './busCard.scss'

const BusCard = ({ bus, className, linkTo }) => {
    const [isFavorite, setIsFavorite] = useState(true)
    const handleFavoriteToggle = () => {
        setIsFavorite(!isFavorite)
    }
    return (
        <div className={`bus-card ${className} `} >
            <div className="bus-card__image">
                <img src={bus.image} alt={bus.name} />
            </div>
            <div className="bus-card__details">
                <div className="bus-card__rating">
                    <h3>{bus.name}</h3>
                    <div className="bus-card__rating-wrapper">
                        <img src={starIcon} />
                        <span>{bus.rating}</span>
                    </div>
                    <button className="bus-card__favorite" onClick={handleFavoriteToggle}>
                        <img width={12} height={16} src={isFavorite ? favoriteIcon : favoriteActiveIcon} alt="favorite" />
                    </button>
                </div>
                <div className="bus-card__amenities">
                    {bus.amenities.map((amenity, index) => (
                        <div className="bus-card__amenity" key={index}>
                            <img width={18} height={18} src={amenity.icon} alt={amenity.text} />
                            <span>{amenity.text}</span>
                        </div>
                    ))}
                </div>
                <div className="bus-card__price">
                    <p>{bus.price}</p>
                    <Link to={linkTo} className="bus-card__book">Забронировать</Link>
                </div>
            </div>
        </div >
    );
};

export default BusCard;