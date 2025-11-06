import { Provider } from 'react-redux';
import '../public/css/style.css';
import store from '../redux/store';
import 'react-perfect-scrollbar/dist/css/styles.css';

function MyApp({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    )
  }

export default MyApp
