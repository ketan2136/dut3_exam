import { List, TextField } from '@mui/material';
import React from 'react';

function Card(props) {
    return (
        <div>
            <div className="main">
                <h1>React Search</h1>
                <div className="search">
                    <TextField
                        id="outlined-basic"
                        variant="outlined"
                        fullWidth
                        label="Search"
                    />
                </div>
                <List />
            </div>
        </div>
    );
}

export default Card;