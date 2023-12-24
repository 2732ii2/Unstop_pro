import './App.css';
import MainDiv from './components/MainDiv';
import Sidebar from './components/sidebar';
import {Provider} from "react-redux";
import store from "./Redux/store";
function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Sidebar />
      <MainDiv />
      
    </div>
    </Provider>
  );
}

export default App;
