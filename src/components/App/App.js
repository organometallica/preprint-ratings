import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

// Icons
import DehazeIcon from '@material-ui/icons/Dehaze';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="http://www.organometallica.com/">
        Organometallica / Marshall Brennan
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [
  {
    title: 'Predicting the Mechanical Properties of Zeolite Frameworks by Machine Learning',
    author: 'Jack D. Evans',
    doi: '10.26434/chemrxiv.5349151.v1',
    thumb: 'https://s3-eu-west-1.amazonaws.com/ppreviews-chemrxiv-7984736271254/9190342/thumb.png',
    resourceURL: 'https://doi.org/10.26434/chemrxiv.5349151.v1'
  },
  {
    title: 'Predicting the Mechanical Properties of Zeolite Frameworks by Machine Learning',
    author: 'Jack D. Evans',
    doi: '10.26434/chemrxiv.5349151.v1',
    thumb: 'https://s3-eu-west-1.amazonaws.com/ppreviews-chemrxiv-7984736271254/9190342/thumb.png',
    resourceURL: 'https://doi.org/10.26434/chemrxiv.5349151.v1'
  },
  {
    title: 'Predicting the Mechanical Properties of Zeolite Frameworks by Machine Learning',
    author: 'Jack D. Evans',
    doi: '10.26434/chemrxiv.5349151.v1',
    thumb: 'https://s3-eu-west-1.amazonaws.com/ppreviews-chemrxiv-7984736271254/9190342/thumb.png',
    resourceURL: 'https://doi.org/10.26434/chemrxiv.5349151.v1'
  },
  {
    title: 'Predicting the Mechanical Properties of Zeolite Frameworks by Machine Learning',
    author: 'Jack D. Evans',
    doi: '10.26434/chemrxiv.5349151.v1',
    thumb: 'https://s3-eu-west-1.amazonaws.com/ppreviews-chemrxiv-7984736271254/9190342/thumb.png',
    resourceURL: 'https://doi.org/10.26434/chemrxiv.5349151.v1'
  },
  {
    title: 'Predicting the Mechanical Properties of Zeolite Frameworks by Machine Learning',
    author: 'Jack D. Evans',
    doi: '10.26434/chemrxiv.5349151.v1',
    thumb: 'https://s3-eu-west-1.amazonaws.com/ppreviews-chemrxiv-7984736271254/9190342/thumb.png',
    resourceURL: 'https://doi.org/10.26434/chemrxiv.5349151.v1'
  },
  {
    title: 'Predicting the Mechanical Properties of Zeolite Frameworks by Machine Learning',
    author: 'Jack D. Evans',
    doi: '10.26434/chemrxiv.5349151.v1',
    thumb: 'https://s3-eu-west-1.amazonaws.com/ppreviews-chemrxiv-7984736271254/9190342/thumb.png',
    resourceURL: 'https://doi.org/10.26434/chemrxiv.5349151.v1'
  }, {
    title: 'Predicting the Mechanical Properties of Zeolite Frameworks by Machine Learning',
    author: 'Jack D. Evans',
    doi: '10.26434/chemrxiv.5349151.v1',
    thumb: 'https://s3-eu-west-1.amazonaws.com/ppreviews-chemrxiv-7984736271254/9190342/thumb.png',
    resourceURL: 'https://doi.org/10.26434/chemrxiv.5349151.v1'
  }, {
    title: 'Predicting the Mechanical Properties of Zeolite Frameworks by Machine Learning',
    author: 'Jack D. Evans',
    doi: '10.26434/chemrxiv.5349151.v1',
    thumb: 'https://s3-eu-west-1.amazonaws.com/ppreviews-chemrxiv-7984736271254/9190342/thumb.png',
    resourceURL: 'https://doi.org/10.26434/chemrxiv.5349151.v1'
  }, {
    title: 'Predicting the Mechanical Properties of Zeolite Frameworks by Machine Learning',
    author: 'Jack D. Evans',
    doi: '10.26434/chemrxiv.5349151.v1',
    thumb: 'https://s3-eu-west-1.amazonaws.com/ppreviews-chemrxiv-7984736271254/9190342/thumb.png',
    resourceURL: 'https://doi.org/10.26434/chemrxiv.5349151.v1'
  }];

export default function App() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <DehazeIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            Preprint Ratings
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Preprint Ratings
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              You need the best papers today, and we know sorting through the newest preprints to find the best ones is time-consuming. Welcome to Preprint Ratings, where you and your peers can guide you to better reading.
            </Typography>
          </Container>
        </div>
        {/* End hero unit */}

        <Container className={classes.cardGrid} maxWidth="md">

          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <a href={card.resourceURL} target="_blank">
                  <CardMedia
                    className={classes.cardMedia}
                    image={card.thumb}
                    title={card.title}
                  />
                  </a>
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h6" component="h2" align='center'>
                      {card.title}
                    </Typography>
                    <Typography align='center'>
                      {card.author} <br />
                      {card.doi}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      <ThumbUpIcon />
                    </Button>
                    <Button size="small" color="primary">
                      <ThumbDownIcon />
                    </Button>
                    <a href={card.resourceURL} target="_blank">
                    <Button size="small" color="primary">
                      View
                    </Button>
                    </a>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>


        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}
