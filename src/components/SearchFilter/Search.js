import "./Search.css";
import JSONDATA from './MOCK_DATA.json';
import { useState } from "react";

const Search = () => {
    const [search, setSearch] = useState('')
    return (
        <div className="Search">
            <input type="text" placeholder="Search..." onChange={e => { setSearch(e.target.value) }} />
            {JSONDATA.filter((val) => {
                if (search == "") {
                    return val
                } else if (val.first_name.toLowerCase().includes(search.toLowerCase())) {
                    return val
                }
            }).map((val, key) => {
                return (<div className="user" key={key}>
                    {/* Uncomment the code below to check how beuty is the Filter :D */}
                    {/* <p>{val.first_name}</p> */}
                </div>
                );

            })}

        </div>
    );
};

console.log(JSONDATA, "Hey im here!");

export default Search;