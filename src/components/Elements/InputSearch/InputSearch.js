import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';
import './InputSearch.scss';
import shadows from '@material-ui/core/styles/shadows';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 280,
    border: '1px solid #E8EFFA',
    boxShadow: 'none'
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

const InputSearch = () => {
  const classes = useStyles();

  return (
    <div className="item_search">
      <Paper component="form" className={classes.root}>
        <IconButton type="submit" className={classes.iconButton} aria-label="search">
          <SearchIcon />
        </IconButton>
        <InputBase
          className={classes.input}
          placeholder="Search"
        />
      </Paper>
    </div>
  );
}

export default InputSearch;