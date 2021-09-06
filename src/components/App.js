import './App.css';
import Layout from './Layout/Layout';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Quiz from './Pages/Quiz';
import Result from './Pages/Result';
import Signup from './Pages/Signup';

function App() {
  return (
    <>
      <Layout>
        {/* <Home /> */}
        {/* <Signup /> */}
        {/* <Login /> */}
        {/* <Quiz /> */}
        <Result />
      </Layout>
    </>
  );
}

export default App;
