import React, { FC } from 'react';
import Select from 'react-select';
import { GlobalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector';
import s from './Header.module.scss';

interface optionsSelect {
    value: string;
    label: string;
}

const Header: FC = () => {
    const options: optionsSelect[] = [
        { value: 'dedovsk', label: 'Дедовск' },
        { value: 'moscow', label: 'Москва' },
        {value: 'sochi', label: 'Сочи'}
    ];

    const colorStyles = {
        control: (styles: any) => ({
            ...styles,
            backgroundColor: 'rgba(71, 147, 255, 0.2)',
            width: '194px',
            height: '37px',
            border: 'none',
            borderRadius: '10px',
            zIndex: 100,
        }),
    };

    return (
        <header className={s.header}>
            <div className={s.wrapper}>
                <div className={s.logo}>
                    <GlobalSvgSelector id="header-logo" />
                </div>
                <span className={s.title}>React weather</span>
            </div>
            <div className={s.wrapper}>
                <div className={s.change_theme}>
                    <GlobalSvgSelector id="change-theme" />
                </div>
                <Select defaultValue={options[0]} styles={colorStyles} options={options} />
            </div>
        </header>
    );
};

export default Header;
