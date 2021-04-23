import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import Router from './Router'
import Header from './containers/Header'
import store from './redux/store'


const Main = () => (
  <BrowserRouter>
    <Header />
    <Router />
  </BrowserRouter>
)

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <Main />
      </Provider>
    </div>
  );
}

export default App;