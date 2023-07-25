import Form from './Form';
//import List from './List';
import Table from './Table';
import { useState, useEffect } from 'react';


function App() {
  const API_URL = 'https://jsonplaceholder.typicode.com/';
  const [reqType, setReqType] = useState('users');//request type
  const [items, setItems] = useState([]);//data returned from the backend

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(`${API_URL}${reqType}`);
        if (!response.ok) throw Error('Did not receive the expected data');
        const data = await response.json();
        setItems(data);
      } catch (err) {
        console.log(err.message);
      }
    }

    fetchItems();//calling the fetch call

  }, [reqType]);//runs every time the reqType changes



  return (
    <div className='App'>
      <Form 
        reqType={reqType}
        setReqType={setReqType}
      />
      {/* <List items={items} /> */}
      <Table items={items}/>
    </div>
   
  )
}

export default App
