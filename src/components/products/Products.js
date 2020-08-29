import React from 'react';
import Shoes from "./products.json";

import { Link } from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
        boxShadow: "none"
    },
    media: {
        height: 250,
    },
    link: {
        color: theme.palette.text.secondary,
        textDecoration: "none"
    }
}));

const Products = () => {
    const classes = useStyles();
    return (
        <div>
            <Container className="container" fixed>
                <div className={classes.root}>
                    <Grid container spacing={2}>
                        {Object.keys(Shoes).map(keyName => {
                            const shoe = Shoes[keyName];
                            return (
                                <Grid item lg={4} md={4} sm={6} xs={12} key={shoe.name}>
                                    <Paper className={classes.paper}>
                                        <Card>
                                            <CardActionArea>
                                                <CardMedia
                                                    component="img"
                                                    className={classes.media}
                                                    image={shoe.img}
                                                    title="Contemplative Reptile"
                                                />
                                                <CardContent>
                                                    <Typography gutterBottom variant="h5" component="h2">
                                                        <Link to={`products/${keyName}`} className={classes.link}>{shoe.name}</Link>
                                                    </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    </Paper>
                                </Grid>
                            )
                        })}
                    </Grid>
                </div>
            </Container>
        </div>
    );
}

export default Products;
