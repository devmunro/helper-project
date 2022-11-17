import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { DatabaseContext } from "../../context/DatabaseContext";

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

 

  console.log(singlePost);
  return (
    <div>
      {loading && <p>...loading</p>}
      {!loading && <p>{singlePost[0].title}</p>}
    </div>
  );
}
