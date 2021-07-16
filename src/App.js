import Navbar from './component/navbar/Navbar.js';
import Content from './component/content/content.js';
import Toolbar from '@material-ui/core/Toolbar';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Toolbar/>
      <Content/>
    </div>
  );
}

export default App;
