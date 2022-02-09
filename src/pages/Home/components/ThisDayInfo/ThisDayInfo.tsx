import React, { FC } from 'react';
import s from './ThisDayInfo.module.scss';
import cloud from '../../../../assets/images/cloud.png';
import { IThisDayItem } from '../../../../types/types';
import ThisDayItem from './ThisDayItem';

const ThisDayInfo: FC = () => {
    const items: IThisDayItem[] = [
        {
            icon_id: 'temp',
            name: 'Температура',
            value: '20° - ощущается как 17°',
        },
        {
            icon_id: 'pressure',
            name: 'Давление',
            value: '765 мм ртутного столба - нормальное',
        },
        {
            icon_id: 'precipitation',
            name: 'Осадки',
            value: 'Без осадков',
        },
        {
            icon_id: 'wind',
            name: 'Ветер',
            value: '3 м/с юго-запад - легкий ветер',
        },
    ];

    return (
        <div className={s.this__day_info}>
            <div className={s.this__day_info_items}>
                {items.map((item) => (
                    <ThisDayItem key={item.icon_id} item={item} />
                ))}
            </div>
            <img src={cloud} alt="Облако" />
        </div>
    );
};

export default ThisDayInfo;
