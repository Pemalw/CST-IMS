import { Link } from "react-router-dom";
// import "./post.css";

// import Single from "../singlePost/Single"

export default function Post({img}) {
  return (
    <div className="post w-96 mx-4 flex flex-col mt-8">
      <Link to="/SinglePost-page">
        <div className="flex flex-wrap justify-center p-6 rounded-xl shadow-lg hover:shadow-[#61AAC5] hover:bg-[#61AAC5] hover:text-white">
          <img className="postImg w-50 h-50 lg:w-96 lg:h-72 object-cover"src={img} alt="" />
          <div className="postTitle text-xl md:text-2xl lg:text-3xl font-semibold mt-4 cursor-pointer">
            H-Awareness Article
          </div>
          <div className=" flex flex-wrap justify-center">
            <p className="postDate italic text-sm text-gray-600 mt-4">22nd August 2023 </p>
            <p className="postDesc text-base leading-6 text-gray-700 mt-4 overflow-hidden overflow-ellipsis line-clamp-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
              officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
