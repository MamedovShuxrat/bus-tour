import React, { useState } from 'react';
import './reviews.scss';

const reviewsData = [
    {
        name: 'Владислав',
        date: '9 декабря 2024',
        rating: 5,
        text: 'Отличный перевозчик юг Трэвел, компания предлагает широкий выбор маршрутов и отправлений, что позволяет мне легко подобрать наиболее удобный для меня вариант. Водители вежливы, аккуратны и профессионально ведут автомобили.'
    },
    {
        name: 'Анна',
        date: '10 декабря 2024',
        rating: 4,
        text: 'Хороший сервис, но иногда бывают задержки. В целом, я довольна.'
    },
    {
        name: 'Игорь',
        date: '11 декабря 2024',
        rating: 3,
        text: 'Средний опыт. Есть над чем поработать.'
    },
    {
        name: 'Никита',
        date: '1 декабря 2024',
        rating: 4,
        text: 'Отличный перевозчик юг Трэвел, компания предлагает широкий выбор маршрутов и отправлений, что позволяет мне легко подобрать наиболее удобный для меня вариант.'
    },
    {
        name: 'Алёна',
        date: '28 ноября 2023',
        rating: 5,
        text: 'Всё было супер!!!'
    },
];

const Star = ({ filled }) => (
    <span className={filled ? 'star filled' : 'star'}>★</span>
);

const ReviewsHeader = () => {
    const averageRating =
        reviewsData.reduce((sum, review) => sum + review.rating, 0) / reviewsData.length;
    const totalReviews = reviewsData.length;

    return (
        <div className="reviews">
            <h1 className='reviews__title'>Отзывы</h1>
            <div className="reviews__info">
                <span className="reviews__rating">{averageRating.toFixed(1)}</span>
                <div className="reviews__stars">
                    {[...Array(5)].map((_, index) => (
                        <Star key={index} filled={index < Math.round(averageRating)} />
                    ))}
                </div>
                <span className="reviews__total">({totalReviews} отзывов)</span>
            </div>
        </div>
    );
};

const ReviewCard = ({ review }) => {
    const { name, date, rating, text } = review;

    const [isExpanded, setIsExpanded] = useState(false);
    const isLongText = text.length > 200;
    const toggleExpand = () => {
        setIsExpanded((prev) => !prev);
    };

    return (
        <div className="review__card">
            <div className="review__top">
                <p>{name}</p>
                <span className="review__date">{date}</span>
                <div className="review__rating">
                    {[...Array(5)].map((_, index) => (
                        <Star key={index} filled={index < rating} />
                    ))}
                </div>
            </div>
            <p className={`review__text ${isExpanded ? 'expanded' : ''}`}>
                {text}
            </p>
            {isLongText && (
                <button className="review__toggle" onClick={toggleExpand}>
                    {isExpanded ? 'Свернуть' : 'Ещё'}
                </button>
            )}
        </div>
    );

};

const Reviews = () => {
    return (
        <div className="reviews-container">
            <ReviewsHeader />
            <div className='reviews__lists'>
                {reviewsData.map((review, index) => (
                    <ReviewCard key={index} review={review} />
                ))}
            </div>
        </div>
    );
};

export default Reviews;
