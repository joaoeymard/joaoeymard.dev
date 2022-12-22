import Header from '../../components/header';
import Aside from '../../components/aside';
import Footer from '../../components/footer';

import './style.css';

function App() {
  return (
    <main className="page-container">
      <Header></Header>

      <div className="page-content">
        <Aside></Aside>
      </div>

      <Footer></Footer>
    </main>
  );
}

export default App;
