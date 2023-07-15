import { TextField } from '@mui/material';
import { React, useState } from 'react'
// import data from "./ListData.json"
let usevard = useState [{
    "id": 1,
    "text": "Devpulse"
}, {
    "id": 2,
    "text": "Linklinks"
}, {
    "id": 3,
    "text": "Centizu"
}, {
    "id": 4,
    "text": "Dynabox"
}, {
    "id": 5,
    "text": "Avaveo"
}, {
    "id": 6,
    "text": "Demivee"
}, {
    "id": 7,
    "text": "Jayo"
}, {
    "id": 8,
    "text": "Blognation"
}, {
    "id": 9,
    "text": "Podcat"
}, {
    "id": 10,
    "text": "Layo"
}] 

function List(props) {
    const [data, setdata] = useState(usevard)
    let inputHandler = (e) => {
        //convert input text to lower case
        var lowerCase = e.target.value.toLowerCase();
        // setInputText(lowerCase);
      };
    return (
        <ul>
            {data.map((v,i) => (
                <div className="main">
                <h1>React Search</h1>
                <div className="search">
                    <TextField
                        id="outlined-basic"
                        variant="outlined"
                        fullWidth
                        label="Search"
                    />
                    <TextField
                        id="outlined-basic"
                        variant="outlined"
                        fullWidth
                        label="Search"
                    />
                    <TextField
                        id="outlined-basic"
                        variant="outlined"
                        fullWidth
                        label="Search"
                    />
                </div>
                <List />
            </div>
            ))}
        </ul>
    )
}

export default List;