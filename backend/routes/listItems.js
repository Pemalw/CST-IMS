const router = require('express').Router();
const { request, response } = require('express');
const multer = require('multer');
//import list model
const itemModel = require('../models/listItems');

// storage
const storage = multer.diskStorage({
    destination : (req, file, callback) => {
        callback(null, "../frontend/public/uploads/")
    },
    filename: (req, file, callback) =>{
        callback(null, file.originalname);
    }
})

const upload = multer({storage: storage});

//first route -- we will add Todo Item to our database
router.post('/api/item', upload.single("image"), async (req, res) =>{
    try{

        if (
            !req.body.title||
            !req.body.date||
            !req.body.content

            // !req.body.image
        ) {
            return response.status(400).send({
                message: 'Send all required fields: title, content, file ',
            });

        }
        const newItem = new itemModel ({
            title: req.body.title, 
            date: req.body.date,
            content: req.body.content,

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

//lets create second route -- get data from database
router.get('/api/items', async (req, res)=>{
    try{
        const allItems = await itemModel.find({});
        res.status(200).json(allItems)
    }catch(err){
        res.json(err);
    }
})

//let's update item
router.put('/api/item/:id', upload.single("image"), async (req, res) =>{
    try{
        
     //find the item by its id and update it
     const updateItem =  await itemModel.findByIdAndUpdate(req.params.id, {$set: req.body});
     res.status(200).json('Item Updated');
    }catch(err){
        res.json(err);
    }

})

//lets delete item from the database
router.delete('/api/item/:id', async(req, res)=>{
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