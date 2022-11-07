const mediaQurey = (maxWidth) => `@media (max-width: ${maxWidth}px)`;

const size = {
    mobileS: 375,
    mobileM: 568,
    mobileL: 768,
    tablet: 1024,
    desktopS: 1280,
    desktopM: 1440,
    desktopL: 1920,
};

export const {
    mobileS,
    mobileM,
    mobileL,
    tablet,
    desktopS,
    desktopM,
    desktopL,
} = size;

export const media = {
    mobileS: mediaQurey(mobileS),
    mobileM: mediaQurey(mobileM),
    mobileL: mediaQurey(mobileL),
    tablet: mediaQurey(tablet),
    desktopS: mediaQurey(desktopS),
    desktopM: mediaQurey(desktopM),
    desktopL: mediaQurey(desktopL),
    custom: (maxWidth) => mediaQurey(maxWidth),
};
