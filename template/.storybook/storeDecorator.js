import { Provider } from 'react-redux';
import { store } from '../src/store/store';

const StoreDecorator = (storyFn) => (
  <Provider store={store}>{storyFn()}</Provider>
);

export default StoreDecorator;
