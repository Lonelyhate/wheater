import React, { FC, useEffect, useState } from 'react';
import Select from 'react-select';
import { GlobalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector';
import { useTheme } from '../../hooks/useTheme';
import { rootTheme, themeChange, TypeRootTheme, TypeTheme } from '../../types/types';
import s from './Header.module.scss';

interface optionsSelect {
    value: string;
    label: string;
}

const Header: FC = () => {
    const theme = useTheme();

    const options: optionsSelect[] = [
        { value: 'dedovsk', label: 'Дедовск' },
        { value: 'moscow', label: 'Москва' },
        { value: 'sochi', label: 'Сочи' },
    ];

    const changTheme = () => {
        theme.changeTheme(theme.theme === themeChange.LIGHT ? themeChange.DARK : themeChange.LIGHT);
    };

    const colorStyles = {
        control: (styles: any) => ({
            ...styles,
            backgroundColor:
                theme.theme === themeChange.DARK ? '#4F4F4F' : 'rgba(71, 147, 255, 0.2)',
            width: '194px',
            height: '37px',
            border: 'none',
            borderRadius: '10px',
            zIndex: 100,
        }),
        singleValue: (styles: any) => ({
            ...styles,
            color: theme.theme === themeChange.DARK ? '#fff' : '#000',
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
                <div className={s.change_theme} onClick={changTheme}>
                    <GlobalSvgSelector id="change-theme" />
                </div>
                <Select defaultValue={options[0]} styles={colorStyles} options={options} />
            </div>
        </header>
    );
};

export default Header;
