const router = require('express').Router();
const express = require('express');
const { request, response } = require('express');
const multer = require('multer');
const path = require('path'); // Import the 'path' module



const storage = multer.diskStorage({
    destination: function (req, file, cb ){
        cb(null, "./uploads/");

    },
       
    filename: function(req, file, cb){
        const uniqueSuffix = Date.now();
        cb(null, uniqueSuffix + file.originalname);
    }
})

// const storage = multer.diskStorage({
//     destination: './uploads/',  
//     filename: function(req, file, cb){
//         // const uniqueSuffix = Date.now();
//         cb(null, file.originalname);
//     }
// })

const upload = multer({
    storage: storage
});

//import list model
const itemModel = require('../models/listItems');

//lets create second route -- get data from database
router.get('/:id', async (req, res)=>{
    try {
        const itemId = req.params.id;
        const item = await itemModel.findById(itemId);
        if (!item) {
            return res.status(404).json({ error: 'Item not found' });
        }
        res.status(200).json(item);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
})


router.get('/', async (req, res)=>{
    try{
        const allItems = await itemModel.find({});
        res.status(200).json(allItems)
    }catch(err){
        res.json(err);
    }
})

router.use('/uploads', express.static(path.join('C:/Users/user/Documents/GitHub/CST-IMS-main/CST-IMS/backend', 'uploads')));


//first route -- we will add Todo Item to our database
router.post('/add', upload.single('image'), async (req, res) =>{

  console.log(req.body); // Log request body
  console.log(req.file); // Log uploaded file details

    try{
        const { title, date, content, source } = req.body;
        const image = req.file.filename; 

        if (!title || !date || !content || !source || !image ) {
            return res.status(400).json({ error: 'All fields are required' });
          }

        const newItem = new itemModel ({
            title,
            date,
            content,
            source,
            image,      
            // image: req.body.image

        })

        //save this item in database
        const saveItem = await newItem.save()
        res.status(200).json(saveItem);
    }catch(err){
        res.json(err);
        console.log(err)
    }
})



//let's update item
router.put('/adds/:id', async (req, res) =>{
    try{
        
     //find the item by its id and update it
     const updateItem =  await itemModel.findByIdAndUpdate(req.params.id, {$set: req.body}, { new: true } );
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