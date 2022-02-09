import React, { FC } from 'react';
import IndicatorSvgSelector from '../../../../assets/icons/indicators/IndicatorSvgSelector';
import { IThisDayItem } from '../../../../types/types';
import cloud from '../../../../assets/images/cloud.png';
import s from './ThisDayInfo.module.scss';

interface ThisDayItemProps {
    item: IThisDayItem;
}

const ThisDayItem: FC<ThisDayItemProps> = ({ item }) => {
    const { icon_id, name, value } = item;

    return (
        <div className={s.item}>
            <div className={s.indicator}>
                <IndicatorSvgSelector id={icon_id} />
            </div>
            <div className={s.indicator__name}>{name}</div>
            <div className={s.indicator__value}>{value}</div>
        </div>
    );
};

export default ThisDayItem;
