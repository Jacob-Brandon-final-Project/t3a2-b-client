import { Outlet } from 'react-router';
import './App.css';
import Header from './component/Header';

function App() {
  return (

    <div>
        <Header />
        <main className='pt-16'>
          <Outlet/>
        </main>
    </div>
  );
}

export default App;
