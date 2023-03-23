import logo from './logo.svg';
import './App.css';
import React from 'react';
import {useState}from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import { variables } from './variables';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [table1, setTable1] = useState([]);
  const [table2, setTable2] = useState([]);
  const getTable1 = async() => 
  {
      await axios.get(variables.ApiUrl+'AllItems/GetAllItems').then((response) => {
       const category = response.data.map(res => res)
       setTable1(category);});       
  };
  const getTable2 = async() => 
  {
      await axios.get(variables.ApiUrl+'AllItems/GetAllItemsAfterSum').then((response) => {
       const category = response.data.map(res => res)
       setTable2(category);});       
  };
  React.useEffect(() => 
  {
          getTable1();
          getTable2();

  });
  return (
    <div className="App" style={{height:'50%',width:'50%',marginLeft:'25%'}} >
       <h3>-all tables-</h3><br/>
       <h5>regular items table</h5><br/>
   <Table striped  >
        <thead>
        <tr >
          <th>amount</th>
          <th>name</th>
        </tr>
      </thead>
  <tbody>  
    { table1.map((o,i)=>{
      return( 
      <tr key={i} style={{ listStyleType:'none'}}>
      <th>{o.amount}</th><th>{o.name}</th>
        </tr>
      )})
    }
    </tbody>
</Table>
<h5>items sum table</h5><br/>
<Table striped  >
        <thead>
        <tr >
          <th>amount</th>
          <th>name</th>
        </tr>
      </thead>
  <tbody>  
    { table2.map((o,i)=>{
      return( 
      <tr key={i} style={{ listStyleType:'none'}}>
      <th>{o.amount}</th><th>{o.name}</th>
        </tr>
      )})
    }
    </tbody>
</Table>
    </div>
  );
}

export default App;
