import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { DatabaseContext } from "../../context/DatabaseContext";
import Apply from "../Account/apply";
import { Link } from "react-router-dom";

export default function SinglePostPage() {
  const { data } = useContext(DatabaseContext);

  let { id } = useParams();

  const [singlePost, setSinglePost] = useState([]);
  const [loading, setLoading] = useState(true);

  

  useEffect(() => {
    const single = () => {

        const matchPage = data.filter((e) => e.id === id);
        console.log(matchPage)
    setSinglePost(matchPage)

   
        setLoading(false)
      }
      ;

    single()
  }, [data, id]);

 

  console.log(singlePost.title);
  return (
    <div>
      <Link className="font-bold "to="/account/search-help">BACK</Link>
      {loading && <p>...loading</p>}
      {!loading && singlePost.map((e) => {return (<div><div>{e.title} <Apply postID={e.id}/></div> 
      </div>)})}
      
    </div>
  );
}
