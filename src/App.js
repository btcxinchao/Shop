import "../../Shop/src/assets/scss/global.scss"
import './App.css';
import { BrowserRouter } from 'react-router';
import LayoutDefault from './components/Layouts/LayoutDefault/LayoutDefault';
import Allroutes from './components/Allrouter/Allroutes';
function App() {
  return (
    <BrowserRouter>
      <LayoutDefault />
       <Allroutes />  
    </BrowserRouter>
  );
}

export default App;
