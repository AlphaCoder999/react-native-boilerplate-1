/*
 * combines all th existing reducers
 */
import loading from './loadingReducer';
import login from './loginReducer';
import theme from './themeReducer';

export default { login, loading, theme };
