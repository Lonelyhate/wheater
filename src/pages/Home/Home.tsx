import React, { FC } from 'react';
import Days from './components/Days/Days';
import Tabs from './components/Days/Tabs';
import ThisDay from './components/ThisDay/ThisDay';
import ThisDayInfo from './components/ThisDayInfo/ThisDayInfo';

import s from './Home.module.scss';

const Home:FC = () => {
    return (
        <div className={s.home}>
            <div className={s.wrapper}>
                <ThisDay />
                <ThisDayInfo />
            </div>
            <Days/>
        </div>
    );
};

export default Home;
