import { Link } from "react-router-dom";
import "./post.css";
import Single from "../singlePost/Single"

export default function Post({img}) {
  return (
    <div className="post">
      <img
        className="postImg"
        src={img}
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              {/* Music */}
            </Link>
          </span>
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              {/* Life */}
            </Link>
          </span>
        </div>
        
        <span className="postTitle">
          <Link to="/SinglePost-page" className="link">
            Lorem ipsum dolor sit amet
          </Link>
        </span>
        <hr />
        <span className="postDate">22nd August 2023 </span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
        officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
        fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
        atque, exercitationem quibusdam, reiciendis odio laboriosam?
      </p>
    </div>
  );
}
