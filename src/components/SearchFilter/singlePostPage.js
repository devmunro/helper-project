import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { DatabaseContext } from "../../context/DatabaseContext";
import { UserAuth } from "../../context/AuthContext";
import Apply from "../Account/apply";
import { useNavigate } from "react-router-dom";
import { deleteDoc, doc, getDocs, collection } from "firebase/firestore";
import { db } from "../../firebase";

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

  ///find responses for related post

  //DELETE POST

  const handleBox = (e) => {
    if (e.target.value === "no") {
      console.log("box closed");

      setCheckDelete(false);
    } else if (e.target.value === "yes") {
      console.log("deleted");
      handleDelete(id);
    } else {
      setCheckDelete(true);
      console.log("box open");
    }
  };

  const handleDelete = async (post) => {
    /// related post
    const collectionRef = doc(db, "users", id);
    await deleteDoc(collectionRef);

    ///find responses for related post
    const responseRef = collection(db, `applied`);
    const docSnap = await getDocs(responseRef);

    const matchItems = docSnap._snapshot.docChanges.filter(
      (e) => e.doc.data.value.mapValue.fields.PostID.stringValue === id
    );

    ///delete responses for related post
    matchItems.forEach((item) => {
      const specific = item.doc.key.path.segments[6];

      const test = doc(db, "applied", specific);
      deleteDoc(test);

      console.log("finsih");
    });

    navigate("/success");
  };

  // FUNCTION for  Checking if user has posted this, if so Appliction form does not show for postee, and blocks delete for (possible) applier
  const postee = singlePost.filter((e) => e.user === user.uid);
  console.log(postee);

  return (
    <div className="w-full ">
      {checkDelete && (
        <div className="w-full h-full flex justify-center bg-black bg-opacity-50 z-1 absolute">
          <div className=" flex-col jus z-2 bg-blue-700 w-2/3 h-max m-10 p-4 rounded-xl border-2 border-white text-white">
            <div className="flex justify-center 	">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 28 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-16 h-16"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                />
              </svg>
              <h2 className=" font-bold text-xl my-4">ARE YOU SURE YOU WANT TO DELETE!!!</h2>
            </div>
            <div className="flex justify-center ">
              <button
                value="yes"
                onClick={handleBox}
                className= "rounded bg-blue-800 font-bold text-white px-4 p-2 m-2 block shadow-lg"
              >
                YES
              </button>
              <button
                value="no"
                onClick={handleBox}
                className="bg-blue-800 rounded text-white font-bold px-4 p-2 m-2 block shadow-lg"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
      <button className="font-bold" onClick={handleBack}>
        BACK
      </button>
      {loading && <p>...loading</p>}
      {!loading &&
        singlePost &&
        singlePost.map((e) => {
          return (
            <div className=" lg:flex md:m-4 p-2 justify-center ">
              <div className=" w-full lg:w-1/2 lg:mx-4 text-justify border-2 p-4 shadow-lg	">
                <h2 className="font-bold p-2 bg-blue-400">{e.title} </h2>
                <ul className="flex-col font-bold  text-white m-2 p-2 justify-center text-sm ">
                  <li className="flex space-x-3 p-2 m-1 bg-blue-400 w-max rounded-full ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      l
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
                      />
                    </svg>
                    Location: {e.location.toUpperCase()}
                  </li>
                  <li className="flex space-x-3 p-2 m-1 bg-blue-400 w-max rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
                      />
                    </svg>
                    Short Bio: {e.name.toUpperCase()} & {e.age}
                  </li>
                  
                </ul>
                <div className="flex justify-between"> 
                <h3 className="font-bold md:px-10 md:mx-8">Description</h3>
                <span>{postee.length > 0 && (
                  <button className="font-bold italic text-black mx-5" onClick={handleBox}>
                    DELETE
                  </button>
                )}
                {/*REMOVES DELETE BUTTON FOR POTENTIAL APPLIER*/}</span>
                </div>
                <p className="p-4 m-1 bg-blue-300 shadow-sm rounded-lg md:px-10 md:mx-8">
                  {e.message}
                </p>
                
              </div>

              {/* // Checking if user has posted this, if so Appliction form does not show */}
              {!postee.length > 0 && (
                <div className="w-full lg:w-1/2 my-2 lg:mx-4 text-justify border-2 p-4 shadow-lg text-white ">
                  <h2 className=" flex font-bold mx-4 text-justify  p-2 text-white bg-blue-600 w-max">
                    Complete the form to apply{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                      />
                    </svg>
                  </h2>
                  <Apply postID={e.id} postUser={e.user} />
                </div>
              )}
            </div>
          );
        })}
    </div>
  );
}
