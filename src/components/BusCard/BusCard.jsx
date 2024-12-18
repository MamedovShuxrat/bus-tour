import React from 'react';
import starIcon from '../../assets/icons/bus-card/star.svg'
import favoriteIcon from '../../assets/icons/bus-card/bookmark.svg'
import './busCard.scss'

const BusCard = ({ bus }) => {
    return (
        <div className="bus-card">
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
                    <button className="bus-card__favorite">
                        <img src={favoriteIcon} alt="favorite" />
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
                    <span>{bus.price}</span>
                    <button className="bus-card__book">Забронировать</button>
                </div>
            </div>
        </div>
    );
};

export default BusCard;