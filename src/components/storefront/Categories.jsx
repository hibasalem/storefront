import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { selectActive } from '../../store/categories';
import { selectActiveItems } from '../../store/products';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { getRemoteData } from '../../store/thunk';
import { getCategories } from '../../store/thunk';

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
  useEffect(() => {
    // console.log('hi');
    props.getRemoteData();
    props.getCategories();
  }, []);

  return (
    <div className="catego">
      <h3>Browse Our Categories</h3>
      {/* {console.log(props.Categories)} */}
      {props.Categories.map((item) => {
        return (
          <Button
            color="primary"
            key={item.name}
            onClick={() => change(item.name)}
          >
            {item.name}
          </Button>
        );
      })}
    </div>
  );
}

const mapStateToProps = (state) => {
  return state.categories;
};

const mapDispatchToProps = {
  selectActive,
  selectActiveItems,
  getRemoteData,
  getCategories,
};
export default connect(mapStateToProps, mapDispatchToProps)(Categories);
