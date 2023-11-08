
const router = require('express').Router();
const { request, response } = require('express');
//import list model
const itemModel = require('../models/listItems');



router.get('/', async (req, res)=>{
    try{
        const allItems = await itemModel.find({});
        res.status(200).json(allItems)
    }catch(err){
        res.json(err);
    }
})


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



//first route -- we will add Todo Item to our database
router.post('/add', async (req, res) =>{
    try{

        if (
            !req.body.title||
            !req.body.date||
            !req.body.content||
            !req.body.source||
            !req.body.image||
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
            source: req.body.source,
            image: req.body.image


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