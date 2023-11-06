const router = require('express').Router();
const { request, response } = require('express');

//import list model
const itemModel = require('../models/inventorylist');


//lets create second route -- get data from database
router.get('/', async (req, res)=>{
    try{
        const allItems = await itemModel.find({});
        res.status(200).json(allItems)
    }catch(err){
        res.json(err);
    }
})
//first route -- we will add Todo Item to our database
router.post('/add', async (req, res) =>{
    try{

        const { inventory_name, quantity, expiryDate } = req.body;
        if (!inventory_name || !quantity || !expiryDate) {
            return res.status(400).json({
              message: 'Send all required fields: inventory_name, quantity, expiryDate',
            });
          }

        const newItem = new itemModel({
            inventory_name: inventory_name,
            quantity: quantity,
            expiryDate: expiryDate,
        });


        //save this item in database
        const saveItem = await newItem.save();
        res.status(200).json(saveItem);
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error' });
      }
    });
    



//let's update item
router.put('/adds/:id', async (req, res) =>{
    try{
        
     //find the item by its id and update it
     const updateItem =  await itemModel.findByIdAndUpdate(req.params.id, {$set: req.body});
     res.status(200).json('Item Updated');
    }catch(err){
        res.json(err);
    }

})

//lets delete item from the database
router.delete('/delete/:id', async(req, res)=>{
    try{
        //find the item by its id and delete it 
        const deleteItem = await itemModel.findByIdAndDelete(req.params.id);
        res.status(200).json('Item Deleted');   
    } catch(err){
        res.json(err);
    }
})

//export router
module.exports = router;