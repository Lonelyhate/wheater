import React, { FC } from 'react';
import { IDay } from '../../../../types/types';
import Card from './Card';
import s from './Days.module.scss';
import Tabs from './Tabs';

const Days: FC = () => {
    const days: IDay[] = [
        {
            dayWeek: 'Сегодня',
            day_info: '28 авг',
            icon_id: 'sun',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Облачно',
        },
        {
            dayWeek: 'Завтра',
            day_info: '29 авг',
            icon_id: 'small_rain_sun',
            temp_day: '+18',
            temp_night: '+15',
            info: 'небольшой дождь и солнце',
        },
        {
            dayWeek: 'Ср',
            day_info: '30 авг',
            icon_id: 'small_rain',
            temp_day: '+18',
            temp_night: '+15',
            info: 'небольшой дождь',
        },
        {
            dayWeek: 'Чт',
            day_info: '28 авг',
            icon_id: 'mainly_cloudy',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Облачно',
        },
        {
            dayWeek: 'Пт',
            day_info: '28 авг',
            icon_id: 'rain',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Облачно',
        },
        {
            dayWeek: 'Сб',
            day_info: '28 авг',
            icon_id: 'sun',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Облачно',
        },
        {
            dayWeek: 'Вс',
            day_info: '28 авг',
            icon_id: 'sun',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Облачно',
        },
    ];

    return (
        <>
            <Tabs />
            <div className={s.days}>
                {days.map((day) => (
                    <Card day={day} />
                ))}
            </div>
        </>
    );
};

export default Days;
