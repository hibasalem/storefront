import React from 'react';
import { connect } from 'react-redux';
import { selectActive } from '../../store/categories';
import { selectActiveItems } from '../../store/products';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function Categories(props) {
  function change(name) {
    props.selectActive(name);
    props.selectActiveItems(name);
  }

  return (
    <div className="catego">
      <h3>Browse Our Categories</h3>
      {props.Categories.map((item) => {
        return (
          <Button
            color="primary"
            key={item.normalizedName}
            onClick={() => change(item.normalizedName)}
          >
            {item.normalizedName}
          </Button>
        );
      })}
    </div>
  );
}

const mapStateToProps = (state) => {
  return state.categories;
};

const mapDispatchToProps = { selectActive, selectActiveItems };
export default connect(mapStateToProps, mapDispatchToProps)(Categories);
