import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const Nayoks = ['Rittik', 'Shahrukh', 'Dulqar'];
  const products = [
    { name: 'Photoshop', price: '$89' },
    { name: 'Illustrator', price: '$49' },
    { name: 'Premiere Pro', price: '$199' },
    { name: 'After effects', price: '$299' }
  ]


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit Done <code>src/App.js</code> and save to reload.
        </p>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            Nayoks.map(nayok => <li>{nayok}</li>)
          }

        </ul>
        <ul>
          {
            products.map(pd => <li>{pd.name}</li>)
          }
        </ul>
        {
          products.map(pd => <Product product={pd}></Product>)
        }

      </header>
    </div >
  );

}

function Counter() {
  const [count, setCount] = useState(0)
  const handleIncrease = () => setCount(count + 1)
  return (
    <div>
      <h3>Count:{count}</h3>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  )
}

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  })


  return (
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {users.map(user => <li>{user.email}</li>)}
      </ul>
    </div>
  )
}

function Product(props) {
  const productStyle = {
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '200px',
    width: '200px',
    float: 'left'
  }
  const { name, price } = props.product;
  return (
    <div style={productStyle}>
      <h3>{props.product.name}</h3>
      <h4>{props.product.price}</h4>
      <h5><button>BuyNow</button></h5>
    </div>
  )
}


export default App;
