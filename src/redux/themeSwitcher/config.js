import { themeConfig } from '../../theme/config/theme.config';
const changeThemes = {
  id: 'changeThemes',
  label: 'themeSwitcher',
  defaultTheme: themeConfig.theme,
  options: [
    {
      themeName: 'defaultTheme',
      buttonColor: '#ffffff',
      textColor: '#323332',
    },
    {
      themeName: 'customTheme',
      buttonColor: '#ffffff',
      textColor: '#323332',
    },
  ],
};
const customizedThemes = {
  changeThemes,
};
export function getCurrentTheme(attribute, selectedThemename) {
  let selecetedTheme = {};
  customizedThemes[attribute].options.forEach(theme => {
    if (theme.themeName === selectedThemename) {
      selecetedTheme = theme;
    }
  });
  return selecetedTheme;
}
export default customizedThemes;
