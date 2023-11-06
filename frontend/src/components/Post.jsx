import { Link } from "react-router-dom";
// import "./post.css";

// import Single from "../singlePost/Single"

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Post() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(`http://127.0.0.1:5000/item`).then((response) => {
      setPost(response.data);
    });
  }, [id]);

  // Check if post is null, if so, display loading message
  if (post === null) {
    return <div>Loading...</div>;
  }

  return (
    <div className="post w-96 mx-4 flex flex-col mt-8">
      <Link to="/SinglePost-page">
        <div className="flex flex-wrap justify-center p-6 rounded-xl shadow-lg hover:shadow-[#61AAC5] hover:bg-[#61AAC5] hover:text-white">
          <div className="postTitle text-xl md:text-2xl lg:text-3xl font-semibold mt-4 cursor-pointer">
            {post.title}
          </div>
          <span className="postDate italic text-sm text-gray-600 mt-4">{post.date}</span>
          <p className="postDesc text-base leading-6 text-gray-700 mt-4 overflow-hidden overflow-ellipsis line-clamp-4">
            {post.content}
          </p>
        </div>
      </Link>
    </div>
  );
}
