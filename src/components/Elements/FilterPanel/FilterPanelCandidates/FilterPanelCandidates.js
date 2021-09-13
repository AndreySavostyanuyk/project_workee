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
import EmployesAge from '../../Accordion/EmployesAge/EmployesAge';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import './FilterPanelCandidates.scss';

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

const FilterPanelCandidates = ({ setOpenFilterPanelCandidates, openFilterPanelCandidates }) => {
  const [arrayEmployeesAge, setArrayEmployeesAge] = useState([]);
  const classes = useStyles();
  const theme = useTheme();

  const dispatch = useDispatch();
  const filterArray = useSelector(state => state.filters.filtersArray)
  
  const handleDrawerClose = () => {
    setOpenFilterPanelCandidates(false);
    setArrayEmployeesAge([]);
  };

  const deleteEmployeesAge = (index) => {
    const cloneArrayEmployeesAge = arrayEmployeesAge.filter((item) => { return item != arrayEmployeesAge[index]});
    setArrayEmployeesAge(cloneArrayEmployeesAge)
  }

  const clearFilters = () => {
    setArrayEmployeesAge([]);
  }

  return (
    <div className={`${classes.root} filterPanelCandidates`}>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        open={openFilterPanelCandidates}
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
          { arrayEmployeesAge.map((value, index) =>
            <Chip 
              key={index}
              icon={ArrowBackIcon} 
              variant="outlined" 
              label={`${value.min}-${value.max}`} 
              onDelete={() => deleteEmployeesAge(index)} 
            />
          ) 
          }
        </div>
        <span className="item_ClearFilters" onClick={() => clearFilters()} >Clear filters</span>
      </div>
      <List className="item_numberVacancies">
        <EmployesAge
          openFilterPanelCandidates={openFilterPanelCandidates}
          filterArray={filterArray}
          deleteEmployeesAge={deleteEmployeesAge} 
          arrayEmployeesAge={arrayEmployeesAge} 
          setArrayEmployeesAge={setArrayEmployeesAge} 
        />
      </List>
    </Drawer>
    <main
      className={clsx(classes.content, {
        [classes.contentShift]: openFilterPanelCandidates,
      })}
    >
      <div className={classes.drawerHeader} />
    </main>
    <div className="CloseFilterPanel">
      <IconButton onClick={handleDrawerClose} className={!openFilterPanelCandidates && "displayNone" }>
        {theme.direction === 'ltr' ? <ArrowBackIcon /> : <ChevronRightIcon />}
      </IconButton>
    </div>
    </div>
  );
}

export default FilterPanelCandidates;