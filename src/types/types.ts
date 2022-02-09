export interface IThisDayItem {
    icon_id: string;
    name: string;
    value: string;
}

export interface IDay {
    dayWeek: string;
    day_info: string;
    icon_id: string;
    temp_day: string;
    temp_night: string;
    info: string;
}

export interface ISvgIcons {
    id: string;
}

export interface ITabs {
    name: string;
}

export enum themeChange {
    LIGHT = 'light',
    DARK = 'dark',
}

export type TypeTheme = themeChange.LIGHT | themeChange.DARK;

export enum rootTheme {
    BODY_BACKGROUND = 'body-background',
    COMPONENTS_BACGROUND = 'components-background',
    CARD_BACKGROUND = 'card-background',
    CARD_SHADOW = 'card-shadow',
    TEXT_COLOR = 'text-color',
}

export type TypeRootTheme =
    | rootTheme.BODY_BACKGROUND
    | rootTheme.CARD_BACKGROUND
    | rootTheme.CARD_SHADOW
    | rootTheme.COMPONENTS_BACGROUND
    | rootTheme.TEXT_COLOR;
