import React, { useEffect, useState } from 'react'
import * as XLSX from 'xlsx';
import file from "../images/Book1.xlsx"
import axios from 'axios';



export const Quotemaker = () => {

  // const [excelData, setExcelData] = useState([]);

  // const handleFileUpload = (event) => {
  //   const file = event.target.files[0];

  //   const reader = new FileReader();
  //   reader.onload = (e) => {
  //     const data = new Uint8Array(e.target.result);
  //     const workbook = XLSX.read(data, { type: 'array' });

  //     const worksheet = workbook.Sheets[workbook.SheetNames[0]];
  //     const jsonData = XLSX.utils.sheet_to_json(worksheet);

  //     console.log('JSON Data:', jsonData);

  //     const filteredData = jsonData.map((row) => ({
  //       name: row['NAME'], 
  //       price: row['PRICE'], 
  //       set: row['SIZE'], 
  //     }));

  //     setExcelData(filteredData);
  //   };

  //   reader.readAsArrayBuffer(file);
  // };

  const [items, setItems] = useState([])
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get('http://localhost:4000/getitems');
        setItems(response.data);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };

    fetchItems();
  }, []);

  const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');


  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);


  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);


  const handleAddToCart = (item) => {
    const quantity = quantities[item.name] || 1; 
    const updatedCart = [...cart, { ...item, quantity }];
    setCart(updatedCart);
  };


  const handleQuantityChange = (e, itemName) => {
    setQuantities({
      ...quantities,
      [itemName]: Number(e.target.value),
    });
  };

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleRemoveFromCart = (itemName) => {
    const updatedCart = cart.filter((item) => item.name !== itemName);
    setCart(updatedCart);
  };


  return(
    <div>

      <input
        type="text"
        placeholder="Search items..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-bar"
      />

     <div className='flex'> 
            <div>
            <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Set</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredItems.length > 0 ? (
            filteredItems.map((data) => (
              <tr key={data.name}>
                <td>{data.name}</td>
                <td>{data.price}</td>
                <td>{data.set}</td>
                <td>
                  <input
                    type="number"
                    min="1"
                    value={quantities[data.name] || 1}
                    onChange={(e) => handleQuantityChange(e, data.name)}
                    className="quantity-input"
                  />
                </td>
                <td>
                  <button onClick={() => handleAddToCart(data)}>
                    Add to Cart
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No items found</td>
            </tr>
          )}
        </tbody>
      </table>
      </div>
      <div>
      <div>
        <h2>Cart</h2>
        {cart.length > 0 ? (
          cart.map((item, index) => (
            <div key={index}>
            <span>{item.name} - {item.price} x {item.quantity} </span>

            <button
                onClick={() => handleRemoveFromCart(item.name)}
                style={{ marginLeft: '10px' }}
              >
                Remove
              </button>
          </div>
          ))
        ) : (
          <div>Cart is empty</div>
        )}
      </div>

      <button > Preview</button>
      </div>
      </div>

    </div>
   )

 }