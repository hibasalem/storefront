import React from 'react';
import { connect } from 'react-redux';
import { increseCount } from '../../store/products';
import { removeFromCart } from '../../store/thunk';
import { removeItem } from '../../store/cart';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Icon from '@material-ui/core/Icon';
import { loadCSS } from 'fg-loadcss';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
    '& > span': {
      margin: theme.spacing(2),
    },
    '& > .fa': {
      margin: theme.spacing(2),
    },
  },
}));

function SimpleCart(props) {
  const classes = useStyles();

  React.useEffect(() => {
    const node = loadCSS(
      'https://use.fontawesome.com/releases/v5.12.0/css/all.css',
      document.querySelector('#font-awesome-css')
    );

    return () => {
      node.parentNode.removeChild(node);
    };
  }, []);

  function deleteItem(item) {
    // props.increseCount(item);
    props.removeFromCart(item);
    props.removeItem(item);
  }

  return (
    <div className="outterCard">
      {props.cart.items.length > 0 && (
        <Paper className="cartCont">
          <p>
            total :{' '}
            {Math.round((props.cart.total + Number.EPSILON) * 100) / 100}
          </p>

          {props.cart.items.map((item, idx) => {
            return (
              <p key={idx}>
                {/* {console.log('cart', item)} */}
                {item.name} &nbsp; &nbsp;
                <Icon
                  onClick={() => deleteItem(item)}
                  class="far fa-trash-alt"
                ></Icon>
              </p>
            );
          })}
          <div className="cart"></div>
        </Paper>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = { increseCount, removeItem, removeFromCart };
export default connect(mapStateToProps, mapDispatchToProps)(SimpleCart);
