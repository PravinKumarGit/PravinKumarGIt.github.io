const variables = Object.freeze({
  COLORS: {
    defaultBlue: "#4482FF", // 0: Default blue
    darkBlueFour: "#3A78F5", // 1: Darken 4%  blue
    darBluekFive: "#3775F2", // 2: Darken 5%  blue
    fadeBlueTwenty: "#4482ff33", // 3: Fade 20%  blue
    lightBlueThree: "#4C8AFF", // 4: Lighten 3%  blue
    fadeBlueSeventyFive: "#4482ffbf", // 5: Fade 75%  blue
    fadeBlueFifteen: "#6AA8FF", // 6: Lighten 15%  blue
    lightBlueTwelve: "#63A1FF", // 7: Lighten 12%  blue
    darkBlueTwo: "#3F7DFA", // 8: Darken 2%  blue
    algoliaBlue: "#3369e7", // 9: Algolia color  blue
    lightBlueEight: "#5896FF", // 10: Lighten 8%  blue
    lightBlueNine: "#2b69e6", // 11:
    darkBlueTen: "#236cfe", // 12: darken 10%  blue
    lightBlueFive: "#4d88ff", // 13: Lighten 5%  blue
    darkBlue: "#2d3446", // 14: DarkBlue
    lightBlueTwo: "#f1f3f6", // 15: LightBluish
    lightBlue: "#788195", // 16: LightBlue
    darkBlueSix: "#E4E6E9", // 17: LightBluish Darken 5%
    darkBlueSeven: "#364d79", // 18:
    darkBlueFifteen: "#202739", // 19: DarkBlue Darken 5%
    lightBlueFour: "#f5f6f8", // 20: LighterBluish
    darkBlueSixteen: "#e9ebf1", // 21: DarkBluish
    lightBlueSix: "#F6F8FB", // 22: LighterBluish Lighten 2%
    lightBlueSeven: "#E9EBEE", // 23: LighterBluish Darken 3%
    lightBlack: "#1a1a1a", // 24: Sidebar submenu select
    orange: "#FEAC01", // 25: Orange
    purple: "#42299a", // 26: Purple
    pink: "#F75D81", // 27: Pink
    limeGreen: "#7ED321", // 28: LimeGreen
    blueShade: "#39435f", // 29: BlueShade
    yellow: "#FFCA28", // 30: Yellow
    darkYellowFive: "#F2BD1B", // 31: Yellow Darken 5%
    facebook: "#3b5998", // 32: Facebook
    darkFacebookFive: "#344e86", // 33: Facebook Darken 5%
    googlePlus: "#dd4b39", // 34: Google Plus
    darkGooglePlusFive: "#d73925", // 35: Google Plus Darken 5%
    lightOrangeOne: "#e14615", // 36: Auth0
    lightOrangeTwo: "#ca3f13", // 37: Auth0
    lightRedOne: "#e0364c", // 38: themeColor--AlizarinCrimson
    lightGreenOne: "#94c840", // 39: light green
    darkGreenOne: "#00673f", // 40: themeColor--- Dark green
    white: "#FFFFFF", // 41: white,
    lightGrayOne: "#7b7b7b", // 42: light gray,
    lightRedTwo: "#fb5708", // 43: light red,
    lightGreenTwo: "#7bb840", // 44: themeColor-- extra light green,
    lightGreenThree: "#50b849", // 45: extra light green,
    black: "#000000", // 46: black,
    lightYellowOne: "#FCB817", // 47: yellow,
    lightYellowTwo: "#f6bf00", // 48: light yellow
    lightGreenSeven: "#00BA53", // 49: green upload button
    lightRedThree: "#ffbf00", // 50: red warning
    lightGreenFour: "#00b16a", // 51: Success green
    lightRedFour: "#f64744", // 52: Error
    darkRedOne: "#EC3D3A", // 53: Darken 4%
    lightRedFive: "#FF5B58", // 54: Lighten 8%
    red: "#ff0000", // 55: Red
    lightGrayTwenty: "#bababa", // 56: GreyShade
    lightGrayTwo: "#c1c1c1", // 57: GreyDark
    lightGrayFour: "#D8D8D8", // 58: Grey
    lightGrayFive: "#f1f1f1", // 59: GreyAlt
    lightGraySix: "#F3F3F3", // 60: GreyLight
    lightGraySeven: "#fafafa", // 61: DarkWhite
    lightGrayEight: "#F9F9F9", // 62: DarkerWhite
    lightGrayNine: "#fcfcfc", // 63: #fff Darken 1%
    lightGrayTen: "#eeeeee", // 64:
    lightGrayEleven: "#fbfbfb", // 65:
    lightGrayTwelve: "#f5f5f5", // 66:
    lightGrayTherteen: "#f7f8f9", // 67: today-highlight-bg
    lightFourteenGray: "#8888886e", // 68: light gray with less opacity
    lightGrayFifteen: "#f9fbf8", // 69: extra light gray with green
    lightGraySixteen: "#f2f7f0", // 70: extra light gray with green
    lightGraySeventeen: "#aaaaaa", // 71: gray with red
    lightGrayEighteen: "#fdfff9", // 72: extra light gray with green
    gray: "#808080", // 73: GreyDarker
    darkGrayOne: "#fefefe", // 74: Grey
    darkGrayTwo: "#e4e4e4", // 75: Grey sade
    darkGrayThree: "#323332", // 76: Heading
    darkGrayFour: "#595959", // 77: HeadingLight
    darkGrayFive: "#979797", // 78: Text
    darkGraySix: "#797979", // 79: TextDark
    darkGraySeven: "#6a6c6a", // 80: Heading Lighten 22%
    darkGrayEight: "#e9e9e9", // 81: Border
    darkGrayNine: "#d8d8d8", // 82: BorderDark
    darkGrayTen: "#ebebeb", // 83: BorderLight
    darkGrayEleven: "#d3d3d3", // 84: orderExtraLight
    darkGrayTwelve: "#e4e4e4a6", // 85:
    darkGrayTharteen: "#94c8404d", // 86: extra light green
    lightGreenFive: "#94c84080", // 87: light green
    lightGrayNinteen: "#c7c3c333", // 88: light gray
    lightBrownOne: "#905905", // 89:
    lightVioletOne: "#690690", // 90:
    lightBrownTwo: "#a67f59", // 91:
    lightGreenSix: "#07a07a", // 92:
    lightRedsix: "#dd4a68", // 93:
    lightPinkOne: "#e90e90", // 94:
    lightNavyBlueOne: "#526AB5", //95:
    darkGrayFourteen: "#999", // 96: Gray redish
    darkGrayFifteen: "#e6e6e6", // 97: Gray
    lightOrangeThree: "#f47e28", //98:
    lightGreenEight: "#f1f6ef"
  }
});

export default variables;
