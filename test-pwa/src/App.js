import { Provider, useSelector, useDispatch } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react' 
import logo from './logo.svg';
import './App.css';
import configureStore from './redux';

const { store, persistor } = configureStore();

function AppContent() {

  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={() => dispatch({ type: "COUNT_INCREMENT" })}>{`count is ${count}`}</button>
      </header>
    </div>
  );
}

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppContent />
      </PersistGate>
    </Provider>
  )
}

export default App;
