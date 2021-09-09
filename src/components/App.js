import './App.css';
import Layout from './Layout/Layout';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Quiz from './Pages/Quiz';
import Result from './Pages/Result';
import Signup from './Pages/Signup';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AuthContextProvider from '../contexts/AuthContext';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';

function App() {
  return (
    <Router>
      <AuthContextProvider>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <PublicRoute path="/signup" component={Signup} />
            <PublicRoute path="/login" component={Login} />
            <PrivateRoute path="/quiz/:id" component={Quiz} />
            <PrivateRoute path="/result/:id" component={Result} />
          </Switch>
        </Layout>
      </AuthContextProvider>
    </Router>
  );
}

export default App;
