import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { DatabaseContext } from "../../context/DatabaseContext";
import { UserAuth } from "../../context/AuthContext";
import Apply from "../Account/apply";
import { useNavigate } from "react-router-dom";
import { deleteDoc, doc, getDocs, collection } from "firebase/firestore";
import { db } from "../../firebase";
import skyscraper from "../../icons/SkyscraperIcon.png";
import info from "../../icons/Infoicon.png";
import warning from "../../icons/WarningIcon.png";
import complete from "../../icons/Completeicon.png";

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
          <div className=" flex-col jus z-2 bg-blue-700 w-full md:w-2/3 h-max m-10 p-4 rounded-xl border-2 border-white text-white">
            <div className="flex justify-center 	">
            <img className="p-2" src={warning} alt="icon of skyscraper"></img>
              <h2 className=" font-bold text-xl my-4">
                ARE YOU SURE YOU WANT TO DELETE!!!
              </h2>
            </div>
            <div className="flex justify-center ">
              <button
                value="yes"
                onClick={handleBox}
                className="rounded bg-blue-800 font-bold text-white px-4 p-2 m-2 block shadow-lg"
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
            <div key="e.id" className=" lg:flex md:m-4 p-2 justify-center ">
              <div className=" w-full lg:w-2/3 lg:mx-4 text-justify border-2 p-4 shadow-lg	">
                <h2 className="font-bold p-2 bg-blue-400">{e.title} </h2>
                <ul className="flex-col font-bold  text-white m-2 p-2 justify-center text-sm ">
                  <li className="flex space-x-3 p-2 m-1 bg-blue-400 w-max rounded-full items-center	">
                    <div>
                      <img src={skyscraper} alt="icon of skyscraper"></img>
                    </div>
                    Location: {e.location.toUpperCase()}
                  </li>
                  <li className="flex space-x-3 p-2 m-1 bg-blue-400 w-max rounded-full items-center	">
                    <img src={info} alt="icon of info sign"></img>
                    Short Bio: {e.name.toUpperCase()} & {e.age}
                  </li>
                </ul>
                <div className="flex justify-between">
                  <h3 className="font-bold md:px-10 md:mx-8">Description</h3>
                  <span>
                    {postee.length > 0 && (
                      <button
                        className="font-bold italic text-black mx-5"
                        onClick={handleBox}
                      >
                        DELETE
                      </button>
                    )}
                    {/*REMOVES DELETE BUTTON FOR POTENTIAL APPLIER*/}
                  </span>
                </div>
                <p className="p-4 m-1 bg-blue-300 shadow-sm rounded-lg md:px-10 md:mx-8">
                  {e.message}
                </p>
              </div>

              {/* // Checking if user has posted this, if so Appliction form does not show */}
              {!postee.length > 0 && (
                <div className="w-full lg:w-1/2 my-2 lg:mx-4 text-justify border-2 p-4 shadow-lg text-white ">
                  <h2 className=" flex items-center font-bold mx-4 text-justify  p-2 text-white bg-blue-600 w-max">
                    Complete the form to apply{" "}
                    <img className="p-2" src={complete} alt="icon of skyscraper"></img>
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
