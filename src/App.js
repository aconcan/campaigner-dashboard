import './App.css';
import SearchBar from './components/MainPanel/SearchBar.jsx';
import Sidebar from './components/Sidebar/Sidebar.jsx';

function App() {  
  return (
    <div className='App'>
      <Sidebar />
      <div className='mainpanel'>
        <SearchBar />
      </div>
    </div>
  );
}

export default App;
