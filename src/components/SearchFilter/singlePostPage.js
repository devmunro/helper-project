import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { DatabaseContext } from "../../context/DatabaseContext";
import { UserAuth } from "../../context/AuthContext";
import Apply from "../Account/apply";
import { useNavigate } from "react-router-dom";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";
import Delete from "./delete";
import { updateCurrentUser } from "firebase/auth";

export default function SinglePostPage() {
  const { data } = useContext(DatabaseContext);
  const { user } = UserAuth();

  const [checkDelete, setCheckDelete] = useState(false);
  // when click back button goes back one page
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };

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

  //DELETE POST



  const handleBox = (e) => {
    if (e.target.value === "no") 
    {console.log("box closed")
      
      setCheckDelete(false) ;
      } 
    else if (e.target.value === "yes") {
      console.log("deleted")
     handleDelete() 
    } else { setCheckDelete(true)
    console.log("box open")}
  };

  const handleDelete = async () => {
    const collectionRef = doc(db, "users", id);
    await deleteDoc(collectionRef);
    navigate("/success");
  };

  // FUNCTION for  Checking if user has posted this, if so Appliction form does not show
  const postee = singlePost.filter((e) => e.user === user.uid);

  return (
    <div>
      <button className="font-bold" onClick={handleBack}>
        BACK
      </button>
      {loading && <p>...loading</p>}
      {!loading &&
        singlePost &&
        singlePost.map((e) => {
          return (
            <div className="flex w-full m-4 p-2 justify-evenly">
              <div className="w-1/2 text-justify 	">
                <h2 className="font-bold p-2">{e.title} </h2>
                <p>{e.message}</p>
                <ul className="flex font-bold space-x-2 m-2 p-2 justify-center">
                  <li>{e.location.toUpperCase()}</li>
                  <li>
                    {e.name.toUpperCase()} & {e.age}
                  </li>
                  <button onClick={handleBox}>
                    DELETE POST
                  </button>
                </ul>
              </div>
              {checkDelete && (
                <div className="z-1 bg-blue-500 w-1/2 h-1/2 absolute">
                  ARE YOU SURE
                  <button
                  value="yes"
                    onClick={handleBox}
                    className="bg-blue-800 text-white p-2 m-2 block shadow-lg"
                  >
                    YES
                  </button>
                  <button
                    value="no"
                    onClick={handleBox}
                    className="bg-blue-800 text-white p-2 m-2 block shadow-lg"
                  >
                    No
                  </button>
                </div>
              )}

              {/* // Checking if user has posted this, if so Appliction form does not show */}
              {!postee.length > 0 && (
                <div className="w-1/2">
                  <Apply postID={e.id} postUser={e.user} />
                </div>
              )}
            </div>
          );
        })}
    </div>
  );
}
