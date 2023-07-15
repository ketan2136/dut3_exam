import { Button, CardActionArea, CardActions } from '@mui/material';
import React, { useState } from 'react';
// import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import About from './About';
// import { Button, CardActionArea, CardActions } from '@mui/material';


function Home({ children }) {
    const [card, setcard] = useState(" ");

    const handleckick = () => {
        console.log(children);
    }
    return (
        // <>
        //     {

        //         card.map((v, i) => (
        //             // return (
        //                 <Card sx={{ maxWidth: 345 }}>
        //                     <CardActionArea>
        //                         <CardMedia
        //                             component="img"
        //                             height="140"
        //                             image="/static/images/cards/contemplative-reptile.jpg"
        //                             alt="green iguana"
        //                         />
        //                         <CardContent>
        //                             <Typography gutterBottom variant="h5" component="div">
        //                                 Lizard
        //                             </Typography>
        //                             <Typography variant="body2" color="text.secondary">
        //                                 Lizards are a widespread group of squamate reptiles, with over 6,000
        //                                 species, ranging across all continents except Antarctica
        //                             </Typography>
        //                         </CardContent>
        //                     </CardActionArea>
        //                     <CardActions>
        //                         <Button variant="contained" >Contained</Button>


        //                     </CardActions>
        //                 </Card>


        //             // )

        //         ))

        //     }
        
        // </>

        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image="/static/images/cards/contemplative-reptile.jpg"
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button variant="contained" onClick={handleckick}>Contained</Button>


            </CardActions>
        </Card>

        

    );
};

export default Home;
