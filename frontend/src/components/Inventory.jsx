import React, { useState } from 'react';
import { BiEdit, BiTrash } from 'react-icons/bi';

const Inventory = () => {
  // Sample inventory data
  const initialInventory = [
    { id: 1, name: 'Bandages', quantity: 100, price: 1.99 },
    { id: 2, name: 'Painkillers', quantity: 50, price: 4.99 },
    { id: 3, name: 'First Aid Kits', quantity: 20, price: 9.99 },
  ];

  const [inventory, setInventory] = useState(initialInventory);
  const [editingItem, setEditingItem] = useState(null);

  const [newInventoryItem, setNewInventoryItem] = useState({
    name: '',
    quantity: 0,
    price: 0.0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewInventoryItem({
      ...newInventoryItem,
      [name]: name === 'quantity' ? parseInt(value, 10) : value,
    });
  };

  const handleAddItem = () => {
    // Generate a unique ID for the new item (You can use a library like 'uuid' for this)
    const newItemId = Date.now();

    // Create a new inventory item with the generated ID
    const newItem = { ...newInventoryItem, id: newItemId };

    // Add the new item to the inventory
    setInventory([...inventory, newItem]);

    // Reset the input fields
    setNewInventoryItem({
      name: '',
      quantity: 0,
      price: 0.0,
    });
  };

  const handleEditClick = (item) => {
    setEditingItem(item);
  };

  const handleSaveEdit = (item) => {
    const updatedInventory = inventory.map((invItem) =>
      invItem.id === item.id ? item : invItem
    );
    setInventory(updatedInventory);
    setEditingItem(null);
  };

  const handleDeleteClick = (item) => {
    const updatedInventory = inventory.filter((invItem) => invItem.id !== item.id);
    setInventory(updatedInventory);
  };

  return (
    <div className="p-4 flex flex-col justify-center">
      <h2 className="text-2xl font-semibold mb-4 text-center mb-16">Inventories</h2>
      <div className="flex justify-center">
        <table className="table w-4/5">
          <thead>
            <tr className="font-bold text-lg border-b-black">
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {inventory.map((item) => (
              <tr key={item.id}>
                <td>
                  {editingItem === item ? (
                    <input
                      type="text"
                      className="input input-sm"
                      name="name"
                      value={item.name}
                      onChange={(e) =>
                        setEditingItem({ ...item, name: e.target.value })
                      }
                    />
                  ) : (
                    item.name
                  )}
                </td>
                <td>
                  {editingItem === item ? (
                    <input
                      type="number"
                      className="input input-sm"
                      name="quantity"
                      value={item.quantity}
                      onChange={(e) =>
                        setEditingItem({ ...item, quantity: e.target.value })
                      }
                    />
                  ) : (
                    item.quantity
                  )}
                </td>
                <td>
                  {editingItem === item ? (
                    <input
                      type="number"
                      step="0.01"
                      className="input input-sm"
                      name="price"
                      value={item.price}
                      onChange={(e) =>
                        setEditingItem({ ...item, price: e.target.value })
                      }
                    />
                  ) : (
                    `$${item.price.toFixed(2)}`
                  )}
                </td>
                <div className="flex justify-end">
                <td>
                  {editingItem === item ? (
                    <button
                      className="btn btn-sm btn-success"
                      onClick={() => handleSaveEdit(item)}
                    >
                      Save
                    </button>
                  ) : (
                    <>
                      <button
                        className="btn btn-sm btn-primary"
                        onClick={() => handleEditClick(item)}
                      >
                        <BiEdit />
                      </button>
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => handleDeleteClick(item)}
                      >
                        <BiTrash />
                      </button>
                    </>
                  )}
                </td>
                </div>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-16 flex justify-center">
        <h3 className="text-lg font-semibold mr-4 pt-2">Add New Inventory Item:</h3>
        <div className="flex space-x-2">
          <input
            type="text"x
            name="name"
            placeholder="Name"
            className="input"
            value={newInventoryItem.name}
            onChange={handleInputChange}
          />
          <input
            type="number"
            name="quantity"
            placeholder="Quantity"
            className="input"
            value={newInventoryItem.quantity}
            onChange={handleInputChange}
          />
          <input
            type="number"
            step="0.01"
            name="price"
            placeholder="Price"
            className="input"
            value={newInventoryItem.price}
            onChange={handleInputChange}
          />
          <button
            className="btn btn-primary"
            onClick={handleAddItem}
            disabled={!newInventoryItem.name || newInventoryItem.quantity <= 0 || newInventoryItem.price <= 0}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
