import React, { FC } from 'react';
import { GlobalSvgSelector } from '../../../../assets/icons/global/GlobalSvgSelector';
import { IDay } from '../../../../types/types';
import s from './Days.module.scss';

interface CartProps {
    day: IDay;
}

const Card: FC<CartProps> = ({ day }) => {
    const { dayWeek, day_info, icon_id, info, temp_day, temp_night } = day;

    return (
        <div className={s.card}>
            <h3 className={s.day}>{dayWeek}</h3>
            <div className={s.day__info}>{day_info}</div>
            <div className={s.img}>
                <GlobalSvgSelector id={icon_id} />
            </div>
            <div className={s.temp__day}>{temp_day}</div>
            <div className={s.temp__night}>{temp_night}</div>
            <div className={s.info}>{info}</div>
        </div>
    );
};

export default Card;
