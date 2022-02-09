import React, { FC } from 'react';
import { GlobalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector';
import { IThisDayItem } from '../../types/types';
import s from './Popup.module.scss';

interface PopupProps {
    items: IThisDayItem;
}

const Popup: FC = () => {
    return (
        <div className={s.popup}>
            <div className={s.popup__content}>
                <div className={s.popup__left}>
                    <h3 className={s.popup__temp}>13</h3>
                    <div className={s.popup__day}>Среда</div>
                    <div className={s.popup__img}>
                        <GlobalSvgSelector id="sun" />
                    </div>
                    <span className={s.popup__bottom}>Время: 212</span>
                    <p className={s.popup__bottom}>Город: СП</p>
                </div>
                <div className={s.popup__close}>
                    <GlobalSvgSelector id="close" />
                </div>
            </div>
        </div>
    );
};

export default Popup;
