import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';
import { 
  makeStyles, 
  useTheme, 
  Drawer, 
  List, 
  Chip, 
  IconButton 
} from '@material-ui/core';
import Categories from '../../Accordion/Categories/Categories';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import './FilterPanelJobs.scss';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -260,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

const FilterPanelJobs = ({ setOpenFilterPanelJobs, openFilterPanelJobs }) => {
  const [arrayEmployeesCategories, setArrayEmployeesCategories] = useState([]);
  const classes = useStyles();
  const theme = useTheme();

  const dispatch = useDispatch();
  const filterArray = useSelector(state => state.filterJobs.filtersArrayJobs)
  const filters = useSelector(state => state.filterJobs.filtersJobs)

  useEffect(() => {
    dispatch({type:'ADD_FILTER_JOBS', payload: {category: arrayEmployeesCategories} });
  }, [arrayEmployeesCategories])
  
  const handleDrawerClose = () => {
    setOpenFilterPanelJobs(false);
    dispatch({type:'ADD_ARRAY_JOBS', payload: filterArray});
    setArrayEmployeesCategories([]);
  };

  const deleteEmployeesCategories = (index) => {
    const cloneArrayEmployeesCategories = arrayEmployeesCategories.filter((item) => { return item != arrayEmployeesCategories[index]});
    setArrayEmployeesCategories(cloneArrayEmployeesCategories)
  }

  const clearFilters = () => {
    setArrayEmployeesCategories([]);
    dispatch({type:'ADD_ARRAY_JOBS', payload: filterArray});
  }

  return (
    <div className={`${classes.root} filterPanelCandidates`}>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        open={openFilterPanelJobs}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
      <div className="filter_header">
        <span>Filters</span>
      </div>
      <div className="selectedFilters">
        <span>Selected filters:</span>
        <div className="item_chip">
        { arrayEmployeesCategories.map((value, index) =>
            <Chip 
              key={index}
              icon={ArrowBackIcon} 
              variant="outlined" 
              label={value} 
              onDelete={() => deleteEmployeesCategories(index)} 
            />
          ) 
          }
        </div>
        <span className="item_ClearFilters" onClick={() => clearFilters()} >Clear filters</span>
      </div>
      <List className="item_numberVacancies">
        <Categories
          openFilterPanelCandidates={openFilterPanelJobs}
          filterArray={filterArray}
          deleteEmployeesCategories={deleteEmployeesCategories} 
          arrayEmployeesCategories={arrayEmployeesCategories} 
          setArrayEmployeesCategories={setArrayEmployeesCategories} 
        />
      </List>
    </Drawer>
    <main
      className={clsx(classes.content, {
        [classes.contentShift]: openFilterPanelJobs,
      })}
    >
      <div className={classes.drawerHeader} />
    </main>
    <div className="CloseFilterPanel">
      <IconButton onClick={handleDrawerClose} className={!openFilterPanelJobs && "displayNone" }>
        {theme.direction === 'ltr' ? <ArrowBackIcon /> : <ChevronRightIcon />}
      </IconButton>
    </div>
    </div>
  );
}

export default FilterPanelJobs;