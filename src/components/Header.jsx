import React from 'react';
import { connect } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function Header(props) {
  const classes = useStyles();

  return (
    <div className="header">
      {/* {console.log('haeder', props)} */}
      <div className={classes.root}>
        <AppBar className="appp" position="static">
          <Toolbar>
            <Typography variant="h4" className={classes.title}>
              Our Store
            </Typography>
            <Button>Cart ({props.cart.count})</Button>
          </Toolbar>
        </AppBar>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(Header);
