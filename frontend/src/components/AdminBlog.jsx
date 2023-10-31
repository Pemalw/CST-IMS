import React, { useEffect, useState } from 'react';
import axios from 'axios';


const AdminBlog = () => {
   const [postTitle, setPostTitle] = useState('');
   const [postContent, setPostContent] = useState('');
   const [postImage, setPostImage] = useState('');   const [listItems, setListItems] = useState([]);
   const [isUpdating, setIsUpdating] = useState('');
   const [updateItemText, setUpdateItemText] = useState('');
  
   //add new inventory item to database

  const addItem =  async(e) => {
    e.preventDefault();  
    try{
      const res =  await axios.post('http://localhost:5501/api/item', {
        title: postTitle,
        content: postContent,
        image: postImage, 
      });
      setListItems((prev) => [...prev, res.data]);
      setPostTitle('');
      setPostContent('');
      setPostImage('');


    } catch(err){
      console.log('Error adding item:', err)
    }

  };
    

  //Create function to fetch all items from database --- we will use useEffect hook 
  useEffect(()=>{
    const getItemsList = async() =>{

      try{
        const res = await axios.get('http://localhost:5501/api/items')
        setListItems(res.data);
        console.log('render')

      }catch(err){
        console.log(err)
      }
    }
    getItemsList()
  }, []);
    

  // Delete item when click on delete
   const deleteItem = async (id) =>{
    try{
      const res = await axios.delete(`http://localhost:5501/api/item/${id}`)
      const newListItems = listItems.filter(item=> item._id !== id);
      setListItems(newListItems);
    }catch(err){
      console.log(err);
    }
   }

   //update item
   const updateItem = async (e) => {
    e.preventDefault()
   
    try{
      const res = await axios.put(`http://localhost:5501/api/item/${isUpdating}`, {content: updateItemText})
      console.log(res.data)
      const updatedItemIndex = listItems.findIndex(item => item._id === isUpdating);
      const updatedItem = listItems[updatedItemIndex].item = updateItemText;
      setUpdateItemText('');
      setIsUpdating('');

    }catch(err){
      console.log(err);
    }
  }
    
   //before updating item we need to show input field where we will create our updated item
   const renderUpdateForm = () => (
    <form className="flex justify-between w-full" onSubmit={(e)=>{updateItem(e)}} >
      <input className="w-80 border border-gray-300 rounded-md p-2 outline-none" type="text" placeholder="New Item" onChange={e=>{setUpdateItemText(e.target.value)}} value={updateItemText} />
      <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" type="submit">Update</button>
    </form>
  )
  // const [posts, setPosts] = useState([
  //   {
  //     id: 1,
  //     title: 'Example Blog Post',
  //     date: '2023-10-03',
  //     content: 'This is a sample blog post.',
  //     image: '', // Add image URL here
  //   },
  // ]);

  // const [newPost, setNewPost] = useState({
  //   title: '',
  //   date: '',
  //   content: '',
  //   image: '', // Add image URL here
  // });

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setNewPost({
  //     ...newPost,
  //     [name]: value,
  //   });
  // };

  // const handleImageUpload = (e) => {
  //   const file = e.target.files[0];
  //   const reader = new FileReader();

  //   reader.onloadend = () => {
  //     setNewPost({
  //       ...newPost,
  //       image: reader.result, // Set image URL to the base64 data URL
  //     });
  //   };

  //   if (file) {
  //     reader.readAsDataURL(file);
  //   }
  // };

  // const addPost = () => {
  //   const newId = Math.max(...posts.map((post) => post.id), 0) + 1;
  //   setPosts([
  //     ...posts,
  //     {
  //       id: newId,
  //       ...newPost,
  //     },
  //   ]);
  //   setNewPost({
  //     title: '',
  //     date: '',
  //     content: '',
  //     image: '', // Clear image URL after adding a post
  //   });
  // };

  // const deletePost = (postId) => {
  //   const updatedPosts = posts.filter((post) => post.id !== postId);
  //   setPosts(updatedPosts);
  // };

  return (
    <div className="flex flex-wrap justify-center">
     <div className="mx-4/6 p-4">
         <h1 className="text-2xl font-bold my-8" >Admin Blog</h1>
         <p className="text-lg mb-8">Add health articles/news</p>

         <form className='form' onSubmit={e => addItem(e)}>
        {/* <div className="mb-14"> */}
           <input
            type="text"
            name="title"
            placeholder="Title"
            value={postTitle}
            onChange={e => {setPostTitle(e.target.value)}} 
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
           
           <input
            type="file"
            accept="image/*"
            value={postImage}
            onChange={e => {setPostImage(e.target.value)}}
            className="file-input file-input-bordered w-full max-w-xs mr-3"
          />

          <button type = 'submit' className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"> Submit </button>   
        </form>    

       
        <div className=" p-4 mb-4 rounded-md my-5 ">   
          {
            listItems.map((item) => (
            <div className="item" key={item._id}>
              <h2 className="text-xl font-bold mb-2">{item.title}</h2>
              <p className="text-gray-500">{item.content}</p>
              {item.image && (
                <img
                  src={item.image}
                  alt="Image"
                  className="mb-2 rounded-md max-w-full h-auto w-32" // Set the image size here (small)
                />
              )
              }

        

              {isUpdating === item._id
              ? renderUpdateForm()
              : <>
              {/* <h2 className="text-xl font-bold mb-2">{post.title}</h2> */}

              {/* <div key={post.id} className="border p-4 mb-4 rounded-md"> */}
              <h1 className="text-gray-500">{item.item}</h1>   
              {/* <p className="text-gray-500">{post.date}</p> */}
         
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-2" onClick={()=>{setIsUpdating(item._id)}}>Update</button>
              <button className = "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-2" onClick={()=> {deleteItem(item._id)}}>Delete</button>
              {/* </div> */}

               </>
           }
             </div>
              ))
            }

        </div>
.       </div>

          {/* <input
            type="date"
            name="date"
            value={newPost.date}
            onChange={handleInputChange}
            className="mb-2 p-2 border rounded-md w-full"
          />
          <textarea
            name="content"
            value={newPost.content}
            onChange={handleInputChange}
            placeholder="Blog Content"
            className="mb-2 p-2 border rounded-md w-full h-32"
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="file-input file-input-bordered w-full max-w-xs mr-3"
          />
          {newPost.image && (
            <img
              src={newPost.image}
              alt="Preview"
              className="mb-2 rounded-md max-w-full h-auto w-32" // Set the image size here (small)
            />
          )}
          <button
            onClick={addPost}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Add Post
          </button>
        </div>
        

        <div>
          {posts.map((post) => (
            <div key={post.id} className="border p-4 mb-4 rounded-md">
              <h2 className="text-xl font-bold mb-2">{post.title}</h2>
              <p className="text-gray-500">{post.date}</p>
              {post.image && (
                <img
                  src={post.image}
                  alt="Image"
                  className="mb-2 rounded-md max-w-full h-auto w-32" // Set the image size here (small)
                />
              )
              
              }
              <p className="mt-2">{post.content}</p>
              <button
                onClick={() => deletePost(post.id)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-2"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div> 
      
      */}

    // </div>
  );
};

export default AdminBlog;
