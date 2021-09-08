import {BrowserRouter as Router,Route, Switch} from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';
import Footer from './Components/Footer/Footer';
import Home from './page/Home';
import Cart from './page/Cart';

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/cart' component={Cart} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
