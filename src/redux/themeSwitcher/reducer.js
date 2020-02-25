import config, { getCurrentTheme } from './config';
import actions from './actions';

const initState = {
  isActivated: false,
  changeThemes: getCurrentTheme(
    'changeThemes',
    config.changeThemes.defaultTheme || 'themedefault'
  )
};

export default function(state = initState, action) {
  switch (action.type) {
    case actions.CHANGE_THEME:
      return {
        ...state,
        [action.attribute]: action.theme,
      };
    default:
      return state;
  }
}
