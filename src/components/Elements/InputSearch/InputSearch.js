import { makeStyles, Paper, InputBase,IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import shadows from '@material-ui/core/styles/shadows';
import './InputSearch.scss';

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
    <div className="item_filretSearch">
      <Paper component="form" className={classes.root}>
        <IconButton className={classes.iconButton} aria-label="search">
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