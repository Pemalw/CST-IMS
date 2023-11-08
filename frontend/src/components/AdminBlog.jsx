


import React, { useEffect, useState } from 'react';
import axios from 'axios';


const AdminBlog = () => {
   const [postTitle, setPostTitle] = useState('');
   const [postContent, setPostContent] = useState('');
   const [postImage, setPostImage] = useState('');  
   const [postSource, setPostSource] = useState('');  
   const [postDate, setPostDate] = useState('');
   const [ListItems, setListItems] = useState([]);      
   const [updateTitle, setUpdateTitle] = useState('');
   const [updateDate, setUpdateDate] = useState('');
   const [updateSource, setUpdateSource] = useState('');
   const [updateImage, setUpdateImage] = useState('');
   const [updateContent, setUpdateContent] = useState('');
   const [isUpdating, setIsUpdating] = useState('');
   const [previewImage, setPreviewImage] = useState('');



   //add new inventory item to database
   const addItem = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('title', postTitle);
      formData.append('date', postDate);
      formData.append('content', postContent);
      formData.append('source', postSource);
      formData.append('image', postImage);


      // formData.append('image', postImage);
      // console.log(formData.get('image'))
      const res = await axios.post('http://localhost:5001/item/add', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });


      setListItems((prev) => [...prev, res.data]);
      setPostTitle('');
      setPostDate('');
      setPostImage('');
      setPostContent('');
      setPostSource('');


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
        console.log(res.data);

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
        source: updateSource,
        image: updateImage,

      });
  
      // Update the item in the local state
      const updatedItems = ListItems.map((item) =>
        item._id === isUpdating ? res.data : item
      );
  
      setListItems(updatedItems);
      setUpdateTitle('');
      setUpdateDate('');
      setUpdateContent('');
      setUpdateSource('');
      setUpdateImage('');
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

   <form className="flex flex-col w-full my-7" onSubmit={(e) => updateItem(e)}>

      <input
        className="mb-2 p-2 border rounded-md"
        type="text"
        placeholder="New Title"
        onChange={(e) => setUpdateTitle(e.target.value)}
        value={updateTitle || selectedItem.title}
      />
      <input
        className="mb-2 p-2 border rounded-md"
        type="date"
        placeholder="New Date"
        onChange={(e) => setUpdateDate(e.target.value)}
        value={updateDate || selectedItem.date}
      />

      <textarea
            className="mb-2 p-2 border rounded-md w-full h-32"
            type="text"
            placeholder="New Content"
            value={updateContent || selectedItem.content}
            onChange={e => setUpdateContent(e.target.value)} 
          />

      {/* ... Other input fields */}
      <input
        className="file-input file-input-bordered w-full max-w-xs mr-3"
        type="file"
        onChange={(e) => {
          const file = e.target.files[0];
          // Do not set state with the file object directly
          // Store the file object for submission instead
          setUpdateImage(file);
        }}
      />
      {/* <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        type="submit"
      >
        Update
      </button> */}

     <div className="flex mt-4">

          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
            onClick={(e) => updateItem(e)}>
            Update
          </button>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            type="button"
            onClick={() => setIsUpdating('')}
          >
            Cancel
          </button>
        </div>
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
            placeholder="Blog Content"
            value={postContent}
            onChange={e => {setPostContent(e.target.value)}} 
            className="mb-2 p-2 border rounded-md w-full h-32"
          />

          <input
            type="text"
            name="source"
            placeholder="Source URL"
            value={postSource}
            onChange={(e) => setPostSource(e.target.value)}
            className="mb-2 p-2 border rounded-md w-full"
          />
                    
            <label htmlFor="fileInput" className="block mb-2 font-medium text-gray-700">
            </label>
            <input
                type="file"
                accept="image/*"
                name="image"
                onChange={(e) => {
                const file = e.target.files[0];
                setPostImage(file);

                  // Image preview code
                  const reader = new FileReader();
                  reader.onloadend = () => {
                    setPreviewImage(reader.result);
                    const fileName = file.name;
                    setPostImage(fileName);
      // Set the combined filename as state
      
                  };
                  reader.readAsDataURL(file);
                  
                }}
                className="file-input file-input-bordered w-full max-w-xs mr-3"
              />


              {previewImage && <img width={100} height={100} src={previewImage} alt="Preview" />}
                      

          <button type = 'submit' className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"> Submit </button>   
        </form>    
        
      
        <div className= "p-10 mb-4 rounded-md my-5">   
          {
            ListItems.map((item) => (
            <div className="item mt-4" key={item._id}>
              <h2 className="text-xl font-bold mb-2">{item.title}</h2>
              <p className="text-gray-500 mb-2"> {new Date(item.date).toLocaleDateString()}</p>
              <p className="text-gray-500 mb-2">{item.content}</p>
              <p className="text-blue-500 mb-2">{item.source}</p>
              {/* <p className="file-input file-input-bordered w-full max-w-xs mr-3">{item.image}</p> */}
              {item.image && (
                    <img
                    className='file-input file-input-bordered w-full h-full max-w-xs mr-3' 
                    src={`http://localhost:5001/uploads/${item.image}`} alt="Not found" />

              )
              }

              {/* <img src={require(`../../../backend/uploads/${item.image}`)} */}
              <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded " onClick={()=>{setIsUpdating(item._id)}}>Update</button>
              <button className = "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4" onClick={()=> {deleteItem(item._id)}}>Delete</button>
              {/* </div> */}

            {isUpdating === item._id && renderUpdateForm()}

           
             </div>

              ))            
            }
        </div>
      </div>

     </div>
  );
};

export default AdminBlog;
