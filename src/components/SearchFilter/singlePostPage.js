import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { DatabaseContext } from "../../context/DatabaseContext";
import { UserAuth } from "../../context/AuthContext";
import Apply from "../Account/apply";
import { Link } from "react-router-dom";

export default function SinglePostPage() {
  const { data } = useContext(DatabaseContext);
  const { user } = UserAuth();

 

  let { id } = useParams();

  const [singlePost, setSinglePost] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const single = () => {
      const matchPage = data.filter((e) => e.id === id);
      console.log(matchPage);
      setSinglePost(matchPage);

      setLoading(false);
    };
    single();
  }, [data, id]);

  console.log(data);
  const postee = singlePost.filter((e) => e.user === user.uid);
console.log(postee)
console.log(user)
  return (
    <div>
      <Link className="font-bold " to="/account/search-help">
        BACK
      </Link>
      {loading && <p>...loading</p>}
      {!loading &&
        singlePost.map((e) => {
          return (
            <div className="flex w-full m-4 p-2 justify-evenly">
              <div className="w-1/2 text-justify 	">
                <h2 className="font-bold p-2">{e.title} </h2>
                <p>{e.message}</p>
                <ul className="flex font-bold space-x-2 m-2 p-2 justify-center">
                  <li>{e.location.toUpperCase()}</li>
                  <li>{e.name.toUpperCase()} & {e.age}</li>
                  <li>applied</li>
                </ul>
              </div>
             
                
                
                 {!postee.length > 0 &&  <div className="w-1/2"><Apply postID={e.id} postUser={e.user} /></div>} 
                
              
            </div>
          );
        })}
    </div>
  );
}
