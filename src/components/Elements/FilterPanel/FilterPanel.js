import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { 
  makeStyles, 
  useTheme, 
  Drawer, 
  List, 
  Chip, 
  IconButton 
} from '@material-ui/core';
import NumberVacancies from '../Accordion/NumberVacancies/NumberVacancies';
import Industries from '../Accordion/Industries/Industries';
import NumberEmployees from '../Accordion/NumberEmployees/NumberEmployees';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import './FilterPanel.scss';

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
    marginLeft: -250,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

const FilterPanel = ({ setOpen, open }) => {
  const [arrayIndustries, setArrayIndustries] = useState([]);
  const [arrayEmployees, setArrayEmployees] = useState([]);
  const [arrayVacancies, setArrayVacancies] = useState([0, 20]);
  const classes = useStyles();
  const theme = useTheme();

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const deleteIndustries = (index) => {
    const cloneArrayIndustries = arrayIndustries.filter((item) => { return item != arrayIndustries[index]});
    setArrayIndustries(cloneArrayIndustries)
  }

  const deleteEmployees = (index) => {
    const cloneArrayEmployees = arrayEmployees.filter((item) => { return item != arrayEmployees[index]});
    setArrayEmployees(cloneArrayEmployees)
  }

  const clearFilters = () => {
    setArrayEmployees([]);
    setArrayIndustries([]);
  }

  return (
    <div className={`${classes.root} filterPanel`}>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        open={open}
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
          <Chip 
            icon={ArrowBackIcon} 
            variant="outlined" 
            label={`${arrayVacancies[1]} Vacancies`} 
            onDelete
          />
          { arrayEmployees.map((value, index) =>
            <Chip 
              key={index}
              icon={ArrowBackIcon} 
              variant="outlined" 
              label={value} 
              onDelete={() => deleteEmployees(index)} 
            />
          ) 
          }
          { arrayIndustries.map((value, index) =>
            <Chip 
              key={index}
              icon={ArrowBackIcon} 
              variant="outlined" 
              label={value} 
              onDelete={() => deleteIndustries(index)} 
            />
          ) 
          }
        </div>
        <span className="item_ClearFilters" onClick={() => clearFilters()} >Clear filters</span>
      </div>
      <List className="item_numberVacancies">
        <NumberVacancies 
          setArrayVacancies={setArrayVacancies} 
          arrayVacancies={arrayVacancies} 
        />
        <Industries 
          deleteIndustries={deleteIndustries} 
          arrayIndustries={arrayIndustries} 
          setArrayIndustries={setArrayIndustries} 
        />
        <NumberEmployees 
          deleteEmployees={deleteEmployees} 
          arrayEmployees={arrayEmployees} 
          setArrayEmployees={setArrayEmployees} 
        />
      </List>
    </Drawer>
    <main
      className={clsx(classes.content, {
        [classes.contentShift]: open,
      })}
    >
      <div className={classes.drawerHeader} />
    </main>
    <div className="CloseFilterPanel">
      <IconButton onClick={handleDrawerClose}>
        {theme.direction === 'ltr' ? <ArrowBackIcon /> : <ChevronRightIcon />}
      </IconButton>
    </div>
    </div>
  );
}

export default FilterPanel;