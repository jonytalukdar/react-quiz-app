import './App.css';
import Layout from './Layout/Layout';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Quiz from './Pages/Quiz';
import Result from './Pages/Result';
import Signup from './Pages/Signup';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AuthContextProvider from '../contexts/AuthContext';

function App() {
  return (
    <Router>
      <AuthContextProvider>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/quiz" component={Quiz} />
            <Route path="/result" component={Result} />
          </Switch>
        </Layout>
      </AuthContextProvider>
    </Router>
  );
}

export default App;
