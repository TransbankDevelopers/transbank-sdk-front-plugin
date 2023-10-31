
import './App.css';
import { TabConfig } from './components/TabConfig';

function App(props) {
  return (
    <div>
      <TabConfig env={props.env} img={props.img} ecommerce={props.ecommerce} />
    </div>
  );
}

export default App;
