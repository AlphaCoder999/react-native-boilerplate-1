import authReducer from './auth/reducers';
import loadingReducer from './loader/reducers';
import themeReducer from './theme/reducers';

const rootReducers = {
  auth: authReducer,
  loading: loadingReducer,
  theme: themeReducer,
};

export default rootReducers;
