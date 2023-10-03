import React, { useState } from 'react';

const AdminBlog = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'Example Blog Post',
      date: '2023-10-03',
      content: 'This is a sample blog post.',
      image: '', // Add image URL here
    },
  ]);

  const [newPost, setNewPost] = useState({
    title: '',
    date: '',
    content: '',
    image: '', // Add image URL here
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPost({
      ...newPost,
      [name]: value,
    });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setNewPost({
        ...newPost,
        image: reader.result, // Set image URL to the base64 data URL
      });
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const addPost = () => {
    const newId = Math.max(...posts.map((post) => post.id), 0) + 1;
    setPosts([
      ...posts,
      {
        id: newId,
        ...newPost,
      },
    ]);
    setNewPost({
      title: '',
      date: '',
      content: '',
      image: '', // Clear image URL after adding a post
    });
  };

  const deletePost = (postId) => {
    const updatedPosts = posts.filter((post) => post.id !== postId);
    setPosts(updatedPosts);
  };

  return (
    <div className="flex flex-wrap justify-center">
      <div className="mx-4/6 p-4">
        <h1 className="text-2xl font-bold my-8">Admin Blog</h1>
        <p className="text-lg mb-8">Add health articles/news</p>
        <div className="mb-14">
          <input
            type="text"
            name="title"
            value={newPost.title}
            onChange={handleInputChange}
            placeholder="Title"
            className="mb-2 p-2 border rounded-md w-full"
          />
          <input
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
              )}
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
    </div>
  );
};

export default AdminBlog;
