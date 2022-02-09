import React, { FC } from 'react';
import { ITabs } from '../../../../types/types';
import s from './Days.module.scss';

const Tabs: FC = () => {
    const tabs: ITabs[] = [
        {
            name: 'На неделю',
        },
        {
            name: 'На 10 дней ',
        },
        {
            name: 'На месяц',
        },
    ];

    return (
        <div className={s.tabs}>
            <ul className={s.tabs__list}>
                {tabs.map((tab) => (
                    <li key={tab.name} className={s.tabs__item}>
                        {tab.name}
                    </li>
                ))}
            </ul>
            <button className={s.tabs__cancel}>
                Отменить
            </button>
        </div>
    );
};

export default Tabs;
