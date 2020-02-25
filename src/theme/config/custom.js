import defaultTheme from "./default";
import VARIABLES from "../global/variables";

export default {
  ...defaultTheme,
  palette: {
    primary: [
      VARIABLES.COLORS[0], // 0: Default blue
      VARIABLES.COLORS[1], // 1: Darken 4%
      VARIABLES.COLORS[2], // 2: Darken 5%
      VARIABLES.COLORS[3], // 3: Fade 20%
      VARIABLES.COLORS[4], // 4: Lighten 3%
      VARIABLES.COLORS[5], // 5: Fade 75%
      VARIABLES.COLORS[6], // 6: Lighten 15%
      VARIABLES.COLORS[7], // 7: Lighten 12%
      VARIABLES.COLORS[8], // 8: Darken 2%
      VARIABLES.COLORS[9], // 9: Algolia color
      VARIABLES.COLORS[10], // 10: Lighten 8%
      VARIABLES.COLORS[11], // 11:
      VARIABLES.COLORS[12], // 12: darken 10%
      VARIABLES.COLORS[13] // 13: Lighten 5%
    ],
    secondary: [
      VARIABLES.COLORS[14], // 0: DarkBlue
      VARIABLES.COLORS[15], // 1: LightBluish
      VARIABLES.COLORS[16], // 2: LightBlue
      VARIABLES.COLORS[17], // 3: LightBluish Darken 5%
      VARIABLES.COLORS[18], // 4:
      VARIABLES.COLORS[19], // 5: DarkBlue Darken 5%
      VARIABLES.COLORS[20], // 6: LighterBluish
      VARIABLES.COLORS[21], // 7: DarkBluish
      VARIABLES.COLORS[22], // 8: LighterBluish Lighten 2%
      VARIABLES.COLORS[23], // 9: LighterBluish Darken 3%
      VARIABLES.COLORS[24] // 10: Sidebar submenu select
    ],
    color: [
      VARIABLES.COLORS[25], // 0: Orange
      VARIABLES.COLORS[26], // 1: Purple
      VARIABLES.COLORS[27], // 2: Pink
      VARIABLES.COLORS[28], // 3: LimeGreen
      VARIABLES.COLORS[29], // 4: BlueShade
      VARIABLES.COLORS[30], // 5: Yellow
      VARIABLES.COLORS[31], // 6: Yellow Darken 5%
      VARIABLES.COLORS[32], // 7: Facebook
      VARIABLES.COLORS[33], // 8: Facebook Darken 5%
      VARIABLES.COLORS[34], // 9: Google Plus
      VARIABLES.COLORS[35], // 10: Google Plus Darken 5%
      VARIABLES.COLORS[36], // 11: Auth0
      VARIABLES.COLORS[37], // 12: Auth0
      VARIABLES.COLORS[38], // 13: themeColor--AlizarinCrimson
      VARIABLES.COLORS[39], // 14: light green
      VARIABLES.COLORS[40], // 15: themeColor--- Dark green
      VARIABLES.COLORS[41], // 16: white,
      VARIABLES.COLORS[42], // 17: light gray,
      VARIABLES.COLORS[43], // 18: light red,
      VARIABLES.COLORS[44], // 19: themeColor-- extra light green,
      VARIABLES.COLORS[45], // 20: extra light green,
      VARIABLES.COLORS[46], // 21: black,
      VARIABLES.COLORS[47], // 22: yellow,
      VARIABLES.COLORS[48], // 23: light yellow
      VARIABLES.COLORS[49] // 24 green upload button
    ],
    warning: [
      VARIABLES.COLORS[50] // 0: Warning
    ],
    success: [
      VARIABLES.COLORS[51] // 0: Success
    ],
    error: [
      VARIABLES.COLORS[52], // 0: Error
      VARIABLES.COLORS[53], // 1: Darken 4%
      VARIABLES.COLORS[54], // 2: Lighten 8%
      VARIABLES.COLORS[55] // 3: Red
    ],
    grayscale: [
      VARIABLES.COLORS[56], // 0: GreyShade
      VARIABLES.COLORS[57], // 1: GreyDark
      VARIABLES.COLORS[58], // 2: Grey
      VARIABLES.COLORS[59], // 3: GreyAlt
      VARIABLES.COLORS[60], // 4: GreyLight
      VARIABLES.COLORS[61], // 5: DarkWhite
      VARIABLES.COLORS[62], // 6: DarkerWhite
      VARIABLES.COLORS[63], // 7: #fff Darken 1%
      VARIABLES.COLORS[64], // 8:
      VARIABLES.COLORS[65], // 9:
      VARIABLES.COLORS[66], // 10:
      VARIABLES.COLORS[67], // 11: today-highlight-bg
      VARIABLES.COLORS[68], // 12: light gray with less opacity
      VARIABLES.COLORS[69], // 13: extra light gray with green
      VARIABLES.COLORS[70], // 14: extra light gray with green
      VARIABLES.COLORS[71], // 15: gray with red
      VARIABLES.COLORS[72], // 16: extra light gray with green
      VARIABLES.COLORS[73], // 17: GreyDarker
      VARIABLES.COLORS[74], // 18: Grey
      VARIABLES.COLORS[75] // 19: Grey sade
    ],
    text: [
      VARIABLES.COLORS[76], // 0: Heading
      VARIABLES.COLORS[77], // 1: HeadingLight
      VARIABLES.COLORS[78], // 2: Text
      VARIABLES.COLORS[79], // 3: TextDark
      VARIABLES.COLORS[80] // 4: Heading Lighten 22%
    ],
    border: [
      VARIABLES.COLORS[81], // 0: Border
      VARIABLES.COLORS[82], // 1: BorderDark
      VARIABLES.COLORS[83], // 2: BorderLight
      VARIABLES.COLORS[84], // 3: orderExtraLight
      VARIABLES.COLORS[85], // 4:
      VARIABLES.COLORS[86], // 5: extra light green
      VARIABLES.COLORS[87], // 6: light green
      VARIABLES.COLORS[88] // 7: light gray
    ],

    calendar: [
      VARIABLES.COLORS[89], // 0:
      VARIABLES.COLORS[90], // 1:
      VARIABLES.COLORS[91], // 2:
      VARIABLES.COLORS[92], // 3:
      VARIABLES.COLORS[93], // 4:
      VARIABLES.COLORS[94] // 5:
    ],
    header: [
      VARIABLES.COLORS[41], // 0: white
      VARIABLES.COLORS[41], // 1: white
      VARIABLES.COLORS[46] // 2: black
    ]
  }
};
