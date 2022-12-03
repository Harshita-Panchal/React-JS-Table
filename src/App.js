import './App.css';
import TableComponent from "./components/table";
import tableConfig1 from './Data/tableconfig1.json';        //Configurable data
import tableConfig2 from './Data/tableconfig2.json';        //Configurable data
import tableConfig3 from './Data/tableconfig3.json';        //Configurable data
import tableDataConfig from './Data/tableDataConfig.json'               //Configurable data

function App() {

  return (
    <div>
      <br /><br />
      <TableComponent tableConfig={tableDataConfig} />
      <br /><br />
      <TableComponent tableConfig={tableConfig1} />
      <br /><br />
      <TableComponent tableConfig={tableConfig2} />
      <br /><br />
      <TableComponent tableConfig={tableConfig3} />

    </div>
  );
}

export default App;
