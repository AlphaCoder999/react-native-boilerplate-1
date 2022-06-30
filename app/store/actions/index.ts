// export action creators
import * as loginActions from './login';
import * as navigationActions from './navigation';
import * as themeActions from './theme';

const ActionCreators = Object.assign(
  {},
  loginActions,
  navigationActions,
  themeActions,
);

export { ActionCreators };
