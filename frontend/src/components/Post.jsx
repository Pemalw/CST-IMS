import { Link } from "react-router-dom";
// import "./post.css";

// import Single from "../singlePost/Single"

<<<<<<< Updated upstream
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Post() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(`http://127.0.0.1:5001/item`).then((response) => {
      setPost(response.data);
    });
  }, [id]);

  // Check if post is null, if so, display loading message
  if (post === null) {
    return <div>Loading...</div>;
  }

=======
export default function Post({img}) {
>>>>>>> Stashed changes
  return (
    <div className="post w-96 mx-4 flex flex-col mt-8">
      <Link to="/SinglePost-page">
        <div className="flex flex-wrap justify-center p-6 rounded-xl shadow-lg hover:shadow-[#61AAC5] hover:bg-[#61AAC5] hover:text-white">
          <img className="postImg w-96 h-72 object-cover"src={img} alt="" />
          <div className="postTitle text-3xl font-semibold mt-4 cursor-pointer">
            H-Awareness Article
          </div>
          <span className="postDate font-lora italic text-sm text-gray-600 mt-4">22nd August 2023 </span>
          <p className="postDesc font-varela text-base leading-6 text-gray-700 mt-4 overflow-hidden overflow-ellipsis line-clamp-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
            officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
          </p>
        </div>
      </Link>
    </div>
  );
}
