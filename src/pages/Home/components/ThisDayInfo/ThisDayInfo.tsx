import React, { FC } from 'react';
import s from './ThisDayInfo.module.scss';
import cloud from '../../../../assets/images/cloud.png';

const ThisDayInfo: FC = () => {
    return (
        <div className={s.this__day_info}>
            <div className={s.this__day_info_items}></div>
            <img src={cloud} alt="" />
        </div>
    );
};

export default ThisDayInfo;
