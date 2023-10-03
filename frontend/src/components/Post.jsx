import { Link } from "react-router-dom";
// import "./post.css";

// import Single from "../singlePost/Single"

export default function Post({img}) {
  return (
    <div className="post w-96 mx-4 my-0 flex flex-col ">
      <img 
        className="postImg w-96 h-72 object-cover rounded-2xl"
        src={img}
        alt=""
      />
      <div className="postInfo flex flex-col items-center">
        <div className="postCats  ">
          <span className="postCat font-varela text-xs text-yellow-500 leading-5 mt-4 mr-2 cursor-pointer ">


            <Link className="link" to="/posts?cat=Music">
              {/* Music */}
            </Link>


          </span>

          <span className="postCat font-varela text-xs text-yellow-500 leading-5 mt-4 mr-2 cursor-pointer">
            <Link className="link" to="/posts?cat=Music">
              {/* Life */}
            </Link>
          </span>
        </div>
        
        <span className="postTitle font-josefin text-3xl font-semibold mt-4 cursor-pointer">
          <Link to="/SinglePost-page" className="link">
            Lorem ipsum dolor sit amet
          </Link>
        </span>
        <hr />
        <span className="postDate font-lora italic text-sm text-gray-600 mt-4">22nd August 2023 </span>
      </div>
      <p className="postDesc font-varela text-base leading-6 text-gray-700 mt-4 overflow-hidden overflow-ellipsis line-clamp-4">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
        officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
        fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
        atque, exercitationem quibusdam, reiciendis odio laboriosam?
      </p>
    </div>
  );
}
