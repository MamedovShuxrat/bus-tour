import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import starIcon from '../../assets/icons/bus-card/star.svg'
import favoriteIcon from '../../assets/icons/bus-card/bookmark.svg'
import favoriteActiveIcon from '../../assets/icons/bus-card/bookmark-active.svg'
import './busCardDetails.scss'

const BusCardDetails = ({ bus, className, linkTo }) => {
    const [isFavorite, setIsFavorite] = useState(true)
    const handleFavoriteToggle = () => {
        setIsFavorite(!isFavorite)
    }
    return (
        <div className={`bus  ${className} `} >
            <div className="bus__wrapper">
                <div  >
                    <div className="bus__image">
                        <img src={bus.image} alt={bus.name} />
                    </div>
                    <div className="bus__image-wrapper">
                        {bus.imageMin.map((img, key) => (
                            <img key={key} src={img.min} alt={bus.name} />
                        ))}
                    </div>
                </div>
                <div className="bus__details">
                    <div className="bus-card__rating">
                        <h3>{bus.name}</h3>
                        <button className="bus-card__favorite" onClick={handleFavoriteToggle}>
                            <img width={12} height={16} src={isFavorite ? favoriteIcon : favoriteActiveIcon} alt="favorite" />
                        </button>
                    </div>
                    <div className="bus-card__amenities">
                        {bus.amenities.map((amenity, index) => (
                            <div className="bus-card__amenity" key={index}>
                                <img width={22} height={22} src={amenity.icon} alt={amenity.text} />
                                <span>{amenity.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="bus__price">
                <Link to={linkTo} className="bus__book">Отзывы</Link>
                <div className="bus__rating-wrapper">
                    <img src={starIcon} />
                    <span>{bus.rating}</span>
                    <span>{bus.ratingCount}</span>
                </div>
                <p>{bus.price}</p>
            </div>
        </div >
    );
};

export default BusCardDetails;