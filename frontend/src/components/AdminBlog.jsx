import React, { useEffect, useState } from 'react';
import axios from 'axios';


const AdminBlog = () => {
   const [postTitle, setPostTitle] = useState('');
   const [postContent, setPostContent] = useState('');
   const [postImage, setPostImage] = useState('');  
   const [postDate, setPostDate] = useState('');
   const [ListItems, setListItems] = useState([]);      
   const [updateTitle, setUpdateTitle] = useState('');
   const [updateDate, setUpdateDate] = useState('');
   const [updateContent, setUpdateContent] = useState('');
   const [isUpdating, setIsUpdating] = useState('');
   const[image, setImage] = useState("");


   //add new inventory item to database
   const addItem = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('title', postTitle);
      formData.append('date', postDate);
      formData.append('content', postContent);
      // formData.append('image', postImage);
      console.log(formData.get('image'))
      const res = await axios.post('http://localhost:5001/item/add', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });


      setListItems((prev) => [...prev, res.data]);
      setPostTitle('');
      setPostDate('');
      setPostContent('');
      // setPostImage('');
    } catch (err) {
      console.log('Error adding item:', err);
    }

  };
    

  //Create function to fetch all items from database --- we will use useEffect hook 
  useEffect(()=>{
    const getItemsList = async() =>{

      try{
        const res = await axios.get('http://localhost:5001/item')
        setListItems(res.data);
        console.log('render')

      }catch(err){
        console.log(err)
      }
    }
    getItemsList();
  }, []);
    

  // Delete item when click on delete
   const deleteItem = async (id) =>{
    try{
      const res = await axios.delete(`http://localhost:5001/item/delete/${id}`)
      const newListItems = ListItems.filter(item=> item._id !== id);
      setListItems(newListItems);
    }catch(err){
      console.log(err);
    }
   }


   //update item
   const updateItem = async (e) => {
    e.preventDefault();
  
    try {
      const res = await axios.put(`http://localhost:5001/item/adds/${isUpdating}`, {
        title: updateTitle,
        date: updateDate,
        content: updateContent,
      });
  
      // Update the item in the local state
      const updatedItems = ListItems.map((item) =>
        item._id === isUpdating ? res.data : item
      );
  
      setListItems(updatedItems);
      setUpdateTitle('');
      setUpdateDate('');
      setUpdateContent('');
      setIsUpdating('');
    } catch (err) {
      console.error('Error updating item:', err);
      // Handle error, show error message to the user
    }
  };

  
   //before updating item we need to show input field where we will create our updated item
   const renderUpdateForm = () => {
    const selectedItem = ListItems.find((item) => item._id === isUpdating);
     
    return (

    <form className="flex flex-col w-full" onSubmit={(e) => updateItem(e)}>
        <input
          className="mb-2 p-2 border rounded-md"
          type="text"
          placeholder="New Title"
          onChange={(e) => setUpdateTitle(e.target.value)}
          value={updateTitle || selectedItem.title} // Populate title with current item's title
        />
        <input
          className="mb-2 p-2 border rounded-md"
          type="date"
          onChange={(e) => setUpdateDate(e.target.value)}
          value={updateDate || selectedItem.date} // Populate date with current item's date
        />
        <textarea
          className="mb-2 p-2 border rounded-md h-32"
          placeholder="New Content"
          onChange={(e) => setUpdateContent(e.target.value)}
          value={updateContent || selectedItem.content} // Populate content with current item's content
        />
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Update
        </button>
      </form>


  );
    };
  

  return (
    <div className="flex flex-wrap justify-center">
     <div className="mx-4/6 p-4">
         <h1 className="text-2xl font-bold my-8" >Admin Blog</h1>
         <p className="text-lg mb-8">Add health articles/news</p>

         <form className='form' onSubmit={e => addItem(e)} encType='multipart/form-data'>
        {/* <div className="mb-14"> */}
           <input
            type="text"
            name="title"
            placeholder="Title"
            value={postTitle}
            onChange={e => {setPostTitle(e.target.value)}} 
            className="mb-2 p-2 border rounded-md w-full"
            />

           <input
            type="date"
            name="date"
            value={postDate}
            onChange={ e => {setPostDate(e.target.value)}}
            className="mb-2 p-2 border rounded-md w-full"
          />

           <textarea
            name="content"
            // value={newPost.content}
            // onChange={handleInputChange}
            placeholder="Blog Content"
            value={postContent}
            onChange={e => {setPostContent(e.target.value)}} 
            className="mb-2 p-2 border rounded-md w-full h-32"
          />
           
           {/* <label htmlFor="fileInput" className="block mb-2 font-medium text-gray-700">
              Upload Image:
            </label>
            <input
              type="file"
              accept="image/*"
              id="fileInput"
              name='image'
              onChange={(e) => setPostImage(e.target.files[0])}
              className="file-input file-input-bordered w-full max-w-xs mr-3"
            />


            {image && <img width={100} height={100} src={image} alt="Preview" />} */}
         

          <button type = 'submit' className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"> Submit </button>   
          
        </form>    
        
      
        <div className=" p-4 mb-4 rounded-md my-5  ">   
          {
            ListItems.map((item) => (
            <div className="item mt-4" key={item._id}>
              <h2 className="text-xl font-bold mb-2">{item.title}</h2>
              <p className="text-gray-500">{item.date}</p>
              <p className="text-gray-500">{item.content}</p>
              {item.image && (
                <img
                  src={item.image}
                  alt="Image"
                  className="mb-2 rounded-md max-w-full h-auto w-32" // Set the image size here (small)
                />
              )
              }

              
              {/* <h2 className="text-xl font-bold mb-2">{post.title}</h2> */}

              {/* <div key={post.id} className="border p-4 mb-4 rounded-md"> */}
              <h1 className="text-gray-500">{item.item}</h1>   
         
              <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded " onClick={()=>{setIsUpdating(item._id)}}>Update</button>
              <button className = "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4" onClick={()=> {deleteItem(item._id)}}>Delete</button>
              {/* </div> */}

            {isUpdating === item._id && renderUpdateForm()}

           
             </div>

              ))
              
            }
        </div>
.       </div>

     </div>
  );
};

export default AdminBlog;
