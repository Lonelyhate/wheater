import { rootTheme, TypeRootTheme, TypeTheme } from "../types/types";

export const ChangeCssRootVariables = (theme: TypeTheme) => {
    const root = document.querySelector(':root') as HTMLElement;

    const components: TypeRootTheme[] = [
        rootTheme.BODY_BACKGROUND,
        rootTheme.CARD_BACKGROUND,
        rootTheme.CARD_SHADOW,
        rootTheme.COMPONENTS_BACGROUND,
        rootTheme.TEXT_COLOR,
    ];

    components.forEach((component) => {
        root.style.setProperty(`--${component}-default`, `var(--${component}-${theme})`);
    });
} 