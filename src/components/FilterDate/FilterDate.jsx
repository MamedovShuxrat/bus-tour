import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { format } from 'date-fns'
import './filterDate.scss'
import calendarIcon from '../../assets/icons/calendar.svg'

const FilterDate = () => {
    const [startDate, setStartDate] = useState(null)
    const [endDate, setEndDate] = useState(null)
    const [isStartDatePickerOpen, setStartDatePickerOpen] = useState(false)
    const [isEndDatePickerOpen, setEndDatePickerOpen] = useState(false)

    const handleStartDateChange = (date) => {
        setStartDate(date)
        setStartDatePickerOpen(false)
    }
    const handleEndDateChange = (date) => {
        setEndDate(date);
        setEndDatePickerOpen(false);
    };
    return (
        <div className="filter-date">
            <div className="container">
                <div className="filter-date__inner">

                    <div className="filter-date__item">
                        <div className="filter-date__wrapper">
                            <div className="filter-date__content">
                                <span className='filter-date__name'>Начало аренды: </span>
                                <span className='filter-date__select'>
                                    {startDate ? format(startDate, 'dd/MM/yyyy') : 'Выберите дату'}
                                </span>
                            </div>
                            <div className="filter-date__visual" onClick={() => setStartDatePickerOpen(!isStartDatePickerOpen)}>
                                <img width={24} height={24} src={calendarIcon} alt="calendarIcon" />
                            </div>
                        </div>
                        {isStartDatePickerOpen && (<>
                            <div className='filter-date__modal'>
                                <DatePicker
                                    selected={startDate}
                                    onChange={handleStartDateChange}
                                    onClickOutside={() => setStartDatePickerOpen(false)}
                                    inline
                                />
                            </div>
                        </>
                        )}
                    </div>
                    <div className="filter-date__item">
                        <div className="filter-date__wrapper">
                            <div className="filter-date__content">
                                <span className='filter-date__name'>Конец аренды: </span>
                                <span className='filter-date__select'>
                                    {endDate ? format(endDate, 'dd/MM/yyyy') : 'Выберите дату'}
                                </span>
                            </div>
                            <div className="filter-date__visual" onClick={() => setEndDatePickerOpen(!isEndDatePickerOpen)}>
                                <img width={24} height={24} src={calendarIcon} alt="calendarIcon" />
                            </div>
                        </div>
                        {isEndDatePickerOpen && (
                            <div className='filter-date__modal'>
                                <DatePicker
                                    selected={endDate}
                                    onChange={handleEndDateChange}
                                    onClickOutside={() => setEndDatePickerOpen(false)}
                                    inline
                                />
                            </div>
                        )}
                    </div>
                    <div className=" filter-date__btn">
                        <button >
                            Поиск
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FilterDate