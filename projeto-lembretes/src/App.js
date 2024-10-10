import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LembreteEntrada from './components/LembreteEntrada';
import LembreteLista from './components/LembreteLista';

function App() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 text-center">
          <LembreteLista />
          <LembreteEntrada />
        </div>
      </div>
    </div>
  );
}
export default App;