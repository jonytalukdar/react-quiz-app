import './App.css';
import Layout from './Layout/Layout';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Quiz from './Pages/Quiz';
import Signup from './Pages/Signup';

function App() {
  return (
    <>
      <Layout>
        {/* <Home /> */}
        <Signup />
        {/* <Login /> */}
        <Quiz />
      </Layout>
    </>
  );
}

export default App;
