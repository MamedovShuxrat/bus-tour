import busImg from '/src/assets/images/bus-card/bus.png'
import seatIcon from '/src/assets/icons/bus-card/seat.svg'
import seatBeltIcon from '/src/assets/icons/bus-card/seat-belt.svg'
import flashIcon from '/src/assets/icons/bus-card/flash.svg'
import airConIcon from '/src/assets/icons/bus-card/air-conditioner.svg'
import karaokeIcon from '/src/assets/icons/bus-card/karaoke.svg'
import wcIcon from '/src/assets/icons/bus-card/WC.svg'

export const buses = [
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
        price: "1500 ₽",
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
        price: "1200 ₽",
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
        price: "1800 ₽",
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
        image: busImg,
    },
];