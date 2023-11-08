import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BiEdit, BiTrash } from 'react-icons/bi';


const Inventory = () => {
  const [postName, setPostName] = useState('');
  const [postDate, setPostDate] = useState('');
  const [postQuantity, setPostQuantity] = useState('');   
  const [inventoryItems, setinventoryItems] = useState([]);  
  const [isUpdating, setIsUpdating] = useState('');
  const [updatePostName, setUpdatePostName] = useState('');
  const [updatePostDate, setUpdatePostDate] = useState('');
  const [updatePostQuantity, setUpdatePostQuantity] = useState('');

  const selectItemForUpdate = (item) => {
    setIsUpdating(item._id);
    setUpdatePostName(item.inventory_name);
    setUpdatePostQuantity(item.quantity);
    setUpdatePostDate(item.expiryDate);
  };

  const resetUpdateForm = () => {
    setIsUpdating('');
    setUpdatePostName('');
    setUpdatePostQuantity('');
    setUpdatePostDate('');
  };

  
  useEffect(()=>{
    const fetchInventoryItems = async() =>{
  
      try{
        const res = await axios.get('http://127.0.0.1:5001/inventory')
        setinventoryItems(res.data);
        console.log('render')
  
      }catch(err){
        console.log(err)
      }
    };
  
    fetchInventoryItems()
  }, []);

  //add new inventory item to database
  const addItem = async (e) => {
    e.preventDefault();
  
    try {
      const newItem = {
        inventory_name: postName,
        quantity: postQuantity,
        expiryDate: postDate,
      };
  
      const response = await axios.post('http://127.0.0.1:5001/inventory/add', newItem, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      // Handle successful response, update state, show success message, etc.
      console.log('Item added successfully:', response.data);
      
      // Reset form fields
      setPostName('');
      setPostQuantity('');
      setPostDate('');
    } catch (error) {
      // Handle errors, show error message to the user, log to console, etc.
      console.error('Error adding item:', error);
    }
  };
  
  //Create function to fetch all items from database --- we will use useEffect hook 

  
// Delete item when click on delete
const deleteItem = async (id) =>{
  try{
    const res = await axios.delete(`http://127.0.0.1:5001/inventory/delete/${id}`)
    const newListItems = inventoryItems.filter(item=> item._id !== id);
    setinventoryItems(newListItems);
  }catch(err){
    console.log(err);
  }
 }


 //update item
 const updateItem = async (e) => {
  e.preventDefault()

  try {
    const updatedItem = {
      inventory_name: updatePostName,
      quantity: updatePostQuantity,
      expiryDate: updatePostDate,
    };

 
    const res = await axios.put(
      `http://127.0.0.1:5001/inventory/adds/${isUpdating}`,
      updatedItem,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    

    
    setinventoryItems(
      inventoryItems.map((item) =>
        item._id === isUpdating ? res.data : item
      )
    );

    setUpdatePostName('');
    setUpdatePostQuantity('');
    setUpdatePostDate('');
    setIsUpdating('');
  } catch (err) {
    console.log(err);
  }
 };


//before updating item we need to show input field where we will create our updated item
const renderUpdateForm = () => {
  const selectedItem = inventoryItems.find((item) => item._id === isUpdating);

  return(
  <form className="flex justify-between w-full" onSubmit={(e)=>{updateItem(e)}} >

    <input className="w-80 border border-gray-300 rounded-md p-2 outline-none" type="text" placeholder="New Name" onChange={e=>{setUpdatePostName(e.target.value)}} value={updatePostName || selectedItem.inventory_name} />
    <input className="input" type="number" placeholder="New Quantity" onChange={e=>{setUpdatePostQuantity(e.target.value)}} value={updatePostQuantity || selectedItem.quantity} />
    <input className="input" type="date" placeholder="Expirary Date" onChange={e=>{setUpdatePostDate(e.target.value)}} value={updatePostDate || selectedItem.expiryDate} />
    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" type="submit">Update</button>
  </form>

);
  }


  return (
    <div className="p-4 h-auto">
      <h2 className="text-2xl font-semibold mb-4 text-center mb-16">Inventories</h2>
      <div className="flex justify-center">
        <table className="table w-4/5">
          <thead>
            <tr className="font-bold text-lg border-b-black">
              <th>Name</th>
              <th>Quantity</th>
              <th>Expiry Date</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
          {inventoryItems.map((item) => (
          <tr key={item._id}>
            <td>
              {isUpdating === item._id ? (
                <input
                  type="text"
                  value={updatePostName}
                  onChange={(e) => setUpdatePostName(e.target.value)}
                />
              ) : (
                item.inventory_name
              )}
            </td>
            <td>
              {isUpdating === item._id ? (
                <input
                  type="number"
                  value={updatePostQuantity}
                  onChange={(e) => setUpdatePostQuantity(e.target.value)}
                />
              ) : (
                item.quantity
              )}
            </td>
            <td>
              {isUpdating === item._id ? (
                <input
                  type="date"
                  value={updatePostDate}
                  onChange={(e) => setUpdatePostDate(e.target.value)}
                />
              ) : (
                item.expiryDate
              )}
            </td>
            <td className="flex justify-end">
              {isUpdating === item._id ? (
                <>
                  <button
                    className="btn btn-sm bg-[#003046] border-0 btn-accent text-base-100"
                    onClick={(e) => updateItem(e)}
                  >
                    Update
                  </button>
                  <button
                    className="btn btn-sm btn-error ml-2"
                    onClick={resetUpdateForm}
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <button
                    className="btn btn-sm bg-[#003046] text-base-100 btn-accent border-0"
                    onClick={() => selectItemForUpdate(item)}
                  >
                    <BiEdit />
                  </button>
                  <button
                    className="btn btn-sm btn-error ml-2"
                    onClick={() => deleteItem(item._id)}
                  >
                    <BiTrash />
                  </button>
                </>
              )}
            </td>
          </tr>
        ))}
      </tbody>

        </table>

      </div>

      <div className="mt-16 flex justify-center">
        <h3 className="text-lg font-semibold mr-4 pt-2">Add New Inventory Item:</h3>
        <div className="flex flex-col md:flex-row ">
          <form className="form space-y-2 md:space-y-0 md:space-x-2" onSubmit={e => addItem(e)} encType='multipart/form-data'>
          <input
            type="text"
            name="inventory_name"
            placeholder="Name"
            className="input"
            value={postName}
            onChange={(e) => setPostName(e.target.value)}
          />
          <input
            type="number"
            name="quantity"
            placeholder="Quantity"
            className="input"
            value={postQuantity}
            onChange={(e)=> setPostQuantity(e.target.value)}
          />
          <input
            type="date"
            name="expiryDate"
            placeholder="Expiry Date"
            className="input"
            value={postDate}
            onChange={(e) => setPostDate(e.target.value)}
          />
          <button type = "submit" className="btn btn-accent bg-[#003046] text-base-100 border-0"> Add </button>
          </form>
        </div>
      </div>
      
      </div>
    
  );
};

export default Inventory;
