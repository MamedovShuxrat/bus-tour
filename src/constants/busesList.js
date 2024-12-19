import busImg from '/src/assets/images/bus-card/bus.png'

import busImg2 from '/src/assets/images/search-bus-cards/volvo.png'
import busImg3 from '/src/assets/images/search-bus-cards/tourliner.png'
import busImg4 from '/src/assets/images/search-bus-cards/diploma.png'
import busmin1 from '/src/assets/images/search-bus-cards/min-1.png'
import busmin2 from '/src/assets/images/search-bus-cards/min-2.png'
import busmin3 from '/src/assets/images/search-bus-cards/min-3.png'

import seatIcon from '/src/assets/icons/bus-card/seat.svg'
import seatBeltIcon from '/src/assets/icons/bus-card/seat-belt.svg'
import flashIcon from '/src/assets/icons/bus-card/flash.svg'
import airConIcon from '/src/assets/icons/bus-card/air-conditioner.svg'
import karaokeIcon from '/src/assets/icons/bus-card/karaoke.svg'
import wcIcon from '/src/assets/icons/bus-card/WC.svg'
import multiIcon from '/src/assets/icons/bus-card//multi.svg'
import musicIcon from '/src/assets/icons/bus-card/music.svg'
import wifiIcon from '/src/assets/icons/bus-card/wifi.svg'

import minivanIcon from '/src/assets/icons/filter/minivan.svg'
import microbusIcon from '/src/assets/icons/filter/microbus.svg'
import busesIcon from '/src/assets/icons/filter/buses.svg'
import allIcon from '/src/assets/icons/filter/all.svg'

export const BUS_CATEGORIES = [
    {
        id: 1,
        title: "Для экскурсий",
        buses: [
            {
                id: 1,
                name: "Автобус Yutong ZK6122H9",
                rating: 4.7,
                image: busImg,
                amenities: [
                    { icon: seatIcon, text: "Мест: 53" },
                    { icon: seatBeltIcon, text: "Ремни безопасности" },
                    { icon: flashIcon, text: "Розетки" },
                    { icon: airConIcon, text: "Кондиционер" },
                    { icon: karaokeIcon, text: "Микрофон" },
                    { icon: wcIcon, text: "Туалет" },
                ],
                price: "1500 ₽/час",
            },
            {
                id: 2,
                name: "Автобус Mercedes-Benz Sprinter",
                rating: 4.5,
                image: busImg,
                amenities: [
                    { icon: seatIcon, text: "Мест: 53" },
                    { icon: seatBeltIcon, text: "Ремни безопасности" },
                    { icon: flashIcon, text: "Розетки" },
                    { icon: airConIcon, text: "Кондиционер" },
                    { icon: karaokeIcon, text: "Микрофон" },
                    { icon: wcIcon, text: "Туалет" },
                ],
                price: "1200 ₽/час",
            },
            {
                id: 3,
                name: "Автобус Setra S 415",
                rating: 4.8,
                image: busImg,
                amenities: [
                    { icon: seatIcon, text: "Мест: 53" },
                    { icon: seatBeltIcon, text: "Ремни безопасности" },
                    { icon: flashIcon, text: "Розетки" },
                    { icon: airConIcon, text: "Кондиционер" },
                    { icon: karaokeIcon, text: "Микрофон" },
                    { icon: wcIcon, text: "Туалет" },
                ],
                price: "1800 ₽/час",
            },
            {
                id: 4,
                name: "Автобус Volvo 9700",
                rating: 4.6,
                image: busImg,
                amenities: [
                    { icon: seatIcon, text: "Мест: 53" },
                    { icon: seatBeltIcon, text: "Ремни безопасности" },
                    { icon: flashIcon, text: "Розетки" },
                    { icon: airConIcon, text: "Кондиционер" },
                    { icon: karaokeIcon, text: "Микрофон" },
                    { icon: wcIcon, text: "Туалет" },
                ],
                price: "1900 ₽/час",
            },
            {
                id: 5,
                name: "Автобус Yutong ZK6122H9",
                rating: 4.7,
                image: busImg,
                amenities: [
                    { icon: seatIcon, text: "Мест: 53" },
                    { icon: seatBeltIcon, text: "Ремни безопасности" },
                    { icon: flashIcon, text: "Розетки" },
                    { icon: airConIcon, text: "Кондиционер" },
                    { icon: karaokeIcon, text: "Микрофон" },
                    { icon: wcIcon, text: "Туалет" },
                ],
                price: "1500 ₽/час",
            },
            {
                id: 6,
                name: "Автобус Mercedes-Benz Sprinter",
                rating: 4.5,
                image: busImg,
                amenities: [
                    { icon: seatIcon, text: "Мест: 53" },
                    { icon: seatBeltIcon, text: "Ремни безопасности" },
                    { icon: flashIcon, text: "Розетки" },
                    { icon: airConIcon, text: "Кондиционер" },
                    { icon: karaokeIcon, text: "Микрофон" },
                    { icon: wcIcon, text: "Туалет" },
                ],
                price: "1200 ₽/час",
            },
            {
                id: 7,
                name: "Автобус Setra S 415",
                rating: 4.8,
                image: busImg,
                amenities: [
                    { icon: seatIcon, text: "Мест: 53" },
                    { icon: seatBeltIcon, text: "Ремни безопасности" },
                    { icon: flashIcon, text: "Розетки" },
                    { icon: airConIcon, text: "Кондиционер" },
                    { icon: karaokeIcon, text: "Микрофон" },
                    { icon: wcIcon, text: "Туалет" },
                ],
                price: "1800 ₽/час",
            },
            {
                id: 8,
                name: "Автобус Volvo 9700",
                rating: 4.6,
                image: busImg,
                amenities: [
                    { icon: seatIcon, text: "Мест: 53" },
                    { icon: seatBeltIcon, text: "Ремни безопасности" },
                    { icon: flashIcon, text: "Розетки" },
                    { icon: airConIcon, text: "Кондиционер" },
                    { icon: karaokeIcon, text: "Микрофон" },
                    { icon: wcIcon, text: "Туалет" },
                ],
                price: "2100 ₽/час",
            },
        ],
    },
    {
        id: 2,
        title: "Для мероприятий",
        buses: [
            {
                id: 1,
                name: "Автобус Mercedes-Benz Sprinter",
                rating: 4.5,
                image: busImg,
                amenities: [
                    { icon: seatIcon, text: "Мест: 53" },
                    { icon: seatBeltIcon, text: "Ремни безопасности" },
                    { icon: flashIcon, text: "Розетки" },
                    { icon: airConIcon, text: "Кондиционер" },
                    { icon: karaokeIcon, text: "Микрофон" },
                    { icon: wcIcon, text: "Туалет" },
                ],
                price: "1200 ₽/час",
            },
            {
                id: 2,
                name: "Автобус Mercedes-Benz Sprinter",
                rating: 4.5,
                image: busImg,
                amenities: [
                    { icon: seatIcon, text: "Мест: 53" },
                    { icon: seatBeltIcon, text: "Ремни безопасности" },
                    { icon: flashIcon, text: "Розетки" },
                    { icon: airConIcon, text: "Кондиционер" },
                    { icon: karaokeIcon, text: "Микрофон" },
                    { icon: wcIcon, text: "Туалет" },
                ],
                price: "1200 ₽/час",
            },
            {
                id: 3,
                name: "Автобус Setra S 415",
                rating: 4.8,
                image: busImg,
                amenities: [
                    { icon: seatIcon, text: "Мест: 53" },
                    { icon: seatBeltIcon, text: "Ремни безопасности" },
                    { icon: flashIcon, text: "Розетки" },
                    { icon: airConIcon, text: "Кондиционер" },
                    { icon: karaokeIcon, text: "Микрофон" },
                    { icon: wcIcon, text: "Туалет" },
                ],
                price: "1800 ₽/час",
            },
            {
                id: 4,
                name: "Автобус Volvo 9700",
                rating: 4.6,
                image: busImg,
                amenities: [
                    { icon: seatIcon, text: "Мест: 53" },
                    { icon: seatBeltIcon, text: "Ремни безопасности" },
                    { icon: flashIcon, text: "Розетки" },
                    { icon: airConIcon, text: "Кондиционер" },
                    { icon: karaokeIcon, text: "Микрофон" },
                    { icon: wcIcon, text: "Туалет" },
                ],
                price: "3100 ₽/час",
            },
            {
                id: 5,
                name: "Автобус Yutong ZK6122H9",
                rating: 4.7,
                image: busImg,
                amenities: [
                    { icon: seatIcon, text: "Мест: 53" },
                    { icon: seatBeltIcon, text: "Ремни безопасности" },
                    { icon: flashIcon, text: "Розетки" },
                    { icon: airConIcon, text: "Кондиционер" },
                    { icon: karaokeIcon, text: "Микрофон" },
                    { icon: wcIcon, text: "Туалет" },
                ],
                price: "1500 ₽/час",
            },
            {
                id: 6,
                name: "Автобус Mercedes-Benz Sprinter",
                rating: 4.5,
                image: busImg,
                amenities: [
                    { icon: seatIcon, text: "Мест: 53" },
                    { icon: seatBeltIcon, text: "Ремни безопасности" },
                    { icon: flashIcon, text: "Розетки" },
                    { icon: airConIcon, text: "Кондиционер" },
                    { icon: karaokeIcon, text: "Микрофон" },
                    { icon: wcIcon, text: "Туалет" },
                ],
                price: "1200 ₽/час",
            },
            {
                id: 7,
                name: "Автобус Setra S 415",
                rating: 4.8,
                image: busImg,
                amenities: [
                    { icon: seatIcon, text: "Мест: 53" },
                    { icon: seatBeltIcon, text: "Ремни безопасности" },
                    { icon: flashIcon, text: "Розетки" },
                    { icon: airConIcon, text: "Кондиционер" },
                    { icon: karaokeIcon, text: "Микрофон" },
                    { icon: wcIcon, text: "Туалет" },
                ],
                price: "1800 ₽/час",
            },
            {
                id: 8,
                name: "Автобус Volvo 9700",
                rating: 4.6,
                image: busImg,
                amenities: [
                    { icon: seatIcon, text: "Мест: 53" },
                    { icon: seatBeltIcon, text: "Ремни безопасности" },
                    { icon: flashIcon, text: "Розетки" },
                    { icon: airConIcon, text: "Кондиционер" },
                    { icon: karaokeIcon, text: "Микрофон" },
                    { icon: wcIcon, text: "Туалет" },
                ],
                price: "2100 ₽/час",
            },
        ],
    },
    {
        id: 3,
        title: "Для вечеринок",
        buses: [
            {
                id: 1,
                name: "Автобус Setra S 415",
                rating: 4.8,
                image: busImg,
                amenities: [
                    { icon: seatIcon, text: "Мест: 53" },
                    { icon: seatBeltIcon, text: "Ремни безопасности" },
                    { icon: flashIcon, text: "Розетки" },
                    { icon: airConIcon, text: "Кондиционер" },
                    { icon: karaokeIcon, text: "Микрофон" },
                    { icon: wcIcon, text: "Туалет" },
                ],
                price: "1800 ₽/час",
            },
            {
                id: 2,
                name: "Автобус Mercedes-Benz Sprinter",
                rating: 4.5,
                image: busImg,
                amenities: [
                    { icon: seatIcon, text: "Мест: 53" },
                    { icon: seatBeltIcon, text: "Ремни безопасности" },
                    { icon: flashIcon, text: "Розетки" },
                    { icon: airConIcon, text: "Кондиционер" },
                    { icon: karaokeIcon, text: "Микрофон" },
                    { icon: wcIcon, text: "Туалет" },
                ],
                price: "1200 ₽/час",
            },
            {
                id: 3,
                name: "Автобус Setra S 415",
                rating: 4.8,
                image: busImg,
                amenities: [
                    { icon: seatIcon, text: "Мест: 53" },
                    { icon: seatBeltIcon, text: "Ремни безопасности" },
                    { icon: flashIcon, text: "Розетки" },
                    { icon: airConIcon, text: "Кондиционер" },
                    { icon: karaokeIcon, text: "Микрофон" },
                    { icon: wcIcon, text: "Туалет" },
                ],
                price: "1800 ₽/час",
            },
            {
                id: 4,
                name: "Автобус Volvo 9700",
                rating: 4.6,
                image: busImg,
                amenities: [
                    { icon: seatIcon, text: "Мест: 53" },
                    { icon: seatBeltIcon, text: "Ремни безопасности" },
                    { icon: flashIcon, text: "Розетки" },
                    { icon: airConIcon, text: "Кондиционер" },
                    { icon: karaokeIcon, text: "Микрофон" },
                    { icon: wcIcon, text: "Туалет" },
                ],
                price: "2900 ₽/час",
            },
            {
                id: 5,
                name: "Автобус Yutong ZK6122H9",
                rating: 4.7,
                image: busImg,
                amenities: [
                    { icon: seatIcon, text: "Мест: 53" },
                    { icon: seatBeltIcon, text: "Ремни безопасности" },
                    { icon: flashIcon, text: "Розетки" },
                    { icon: airConIcon, text: "Кондиционер" },
                    { icon: karaokeIcon, text: "Микрофон" },
                    { icon: wcIcon, text: "Туалет" },
                ],
                price: "1500 ₽/час",
            },
            {
                id: 6,
                name: "Автобус Mercedes-Benz Sprinter",
                rating: 4.5,
                image: busImg,
                amenities: [
                    { icon: seatIcon, text: "Мест: 53" },
                    { icon: seatBeltIcon, text: "Ремни безопасности" },
                    { icon: flashIcon, text: "Розетки" },
                    { icon: airConIcon, text: "Кондиционер" },
                    { icon: karaokeIcon, text: "Микрофон" },
                    { icon: wcIcon, text: "Туалет" },
                ],
                price: "1200 ₽/час",
            },
            {
                id: 7,
                name: "Автобус Setra S 415",
                rating: 4.8,
                image: busImg,
                amenities: [
                    { icon: seatIcon, text: "Мест: 53" },
                    { icon: seatBeltIcon, text: "Ремни безопасности" },
                    { icon: flashIcon, text: "Розетки" },
                    { icon: airConIcon, text: "Кондиционер" },
                    { icon: karaokeIcon, text: "Микрофон" },
                    { icon: wcIcon, text: "Туалет" },
                ],
                price: "1800 ₽/час",
            },
            {
                id: 8,
                name: "Автобус Volvo 9700",
                rating: 4.6,
                image: busImg,
                amenities: [
                    { icon: seatIcon, text: "Мест: 53" },
                    { icon: seatBeltIcon, text: "Ремни безопасности" },
                    { icon: flashIcon, text: "Розетки" },
                    { icon: airConIcon, text: "Кондиционер" },
                    { icon: karaokeIcon, text: "Микрофон" },
                    { icon: wcIcon, text: "Туалет" },
                ],
                price: "1900 ₽/час",
            },
        ],
    },
];

export const FILTERS = [
    {
        id: 1,
        name: "Минивэны",
        src: minivanIcon,
    },
    {
        id: 2,
        name: "Микроавтобусы",
        src: microbusIcon,
    },
    {
        id: 3,
        name: "Автобусы",
        src: busesIcon,
    },
    {
        id: 4,
        name: "Все типы",
        src: allIcon,
    },
]

export const SEARCH__BUSES = [
    {
        buses: [
            {
                id: 1,
                name: "Автобус Yutong ZK6122H9",
                rating: 4.7,
                image: busImg,
                amenities: [
                    { icon: seatIcon, text: "Мест: 53" },
                    { icon: seatBeltIcon, text: "Ремни безопасности" },
                    { icon: flashIcon, text: "Розетки" },
                    { icon: airConIcon, text: "Кондиционер" },
                    { icon: karaokeIcon, text: "Микрофон" },
                    { icon: wcIcon, text: "Туалет" },
                ],
                price: "1500 ₽/час",
            },
            {
                id: 2,
                name: "Автобус Mercedes-Benz Sprinter",
                rating: 4.5,
                image: busImg2,
                amenities: [
                    { icon: seatIcon, text: "Мест: 53" },
                    { icon: seatBeltIcon, text: "Ремни безопасности" },
                    { icon: flashIcon, text: "Розетки" },
                    { icon: airConIcon, text: "Кондиционер" },
                    { icon: karaokeIcon, text: "Микрофон" },
                    { icon: wcIcon, text: "Туалет" },
                ],
                price: "1200 ₽/час",
            },
            {
                id: 3,
                name: "Автобус Setra S 415",
                rating: 4.8,
                image: busImg3,
                amenities: [
                    { icon: seatIcon, text: "Мест: 53" },
                    { icon: seatBeltIcon, text: "Ремни безопасности" },
                    { icon: flashIcon, text: "Розетки" },
                    { icon: airConIcon, text: "Кондиционер" },
                    { icon: karaokeIcon, text: "Микрофон" },
                    { icon: wcIcon, text: "Туалет" },
                ],
                price: "1800 ₽/час",
            },
            {
                id: 4,
                name: "Автобус Volvo 9700",
                rating: 4.6,
                image: busImg,
                amenities: [
                    { icon: seatIcon, text: "Мест: 53" },
                    { icon: seatBeltIcon, text: "Ремни безопасности" },
                    { icon: flashIcon, text: "Розетки" },
                    { icon: airConIcon, text: "Кондиционер" },
                    { icon: karaokeIcon, text: "Микрофон" },
                    { icon: wcIcon, text: "Туалет" },
                ],
                price: "1900 ₽/час",
            },
            {
                id: 5,
                name: "Автобус Yutong ZK6122H9",
                rating: 4.7,
                image: busImg,
                amenities: [
                    { icon: seatIcon, text: "Мест: 53" },
                    { icon: seatBeltIcon, text: "Ремни безопасности" },
                    { icon: flashIcon, text: "Розетки" },
                    { icon: airConIcon, text: "Кондиционер" },
                    { icon: karaokeIcon, text: "Микрофон" },
                    { icon: wcIcon, text: "Туалет" },
                ],
                price: "1500 ₽/час",
            },
            {
                id: 6,
                name: "Автобус Mercedes-Benz Sprinter",
                rating: 4.5,
                image: busImg,
                amenities: [
                    { icon: seatIcon, text: "Мест: 53" },
                    { icon: seatBeltIcon, text: "Ремни безопасности" },
                    { icon: flashIcon, text: "Розетки" },
                    { icon: airConIcon, text: "Кондиционер" },
                    { icon: karaokeIcon, text: "Микрофон" },
                    { icon: wcIcon, text: "Туалет" },
                ],
                price: "1200 ₽/час",
            },
        ]
    }
]

export const DETAILS__BUS = [
    {
        bus: [
            {
                id: 1,
                name: "Автобус Yutong ZK6122H9",
                rating: 4.7,
                ratingCount: ' 5 отзывов ',
                image: busImg,
                imageMin: [{ min: busmin1 }, { min: busmin2 }, { min: busmin3 }],
                amenities: [
                    { icon: seatIcon, text: "Мест: 53" },
                    { icon: seatBeltIcon, text: "Ремни безопасности" },
                    { icon: flashIcon, text: "Розетки" },
                    { icon: airConIcon, text: "Кондиционер" },
                    { icon: karaokeIcon, text: "Микрофон" },
                    { icon: wifiIcon, text: "WiFi" },
                    { icon: wcIcon, text: "Туалет" },
                    { icon: multiIcon, text: "Мультимедия" },
                    { icon: musicIcon, text: "Аудиосистема" },
                ],
                price: "2750 ₽/час",
            },

        ]
    }
]