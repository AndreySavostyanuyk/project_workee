import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { 
  Accordion,
  AccordionSummary, 
  AccordionDetails, 
  Typography, 
  Checkbox 
} from '@material-ui/core';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import RemoveRoundedIcon from '@material-ui/icons/RemoveRounded';
import './Categories.scss';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const Categories = ({ arrayEmployeesCategories, setArrayEmployeesCategories }) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const classes = useStyles();
  const [listCheckbox, setListCheckbox] = useState([
    { check: false, text: 'Chef/Cook' },
    { check: false, text: 'Waiter/Waitress' },
    { check: false, text: 'Barista/Bartender' },
    { check: false, text: 'Warehouse' },
    { check: false, text: 'Office/Admin' },
    { check: false, text: 'Events/Promoter' },
  ]);

  const openAccordion = () => {
    const flag = !open;
    setOpen(flag);
  }

  useEffect(() => {
    const cloneListCheckbox = listCheckbox.map((item,index) => {
      const doesElement = arrayEmployeesCategories.indexOf(item.text);

       if(doesElement === -1) {
         return { ...item, check: false}
       }  return item
    })

  setListCheckbox(cloneListCheckbox)
  }, [arrayEmployeesCategories])

  const handleChange = (value, index) => {
    const doesElement = arrayEmployeesCategories.indexOf(value.text);

    if (doesElement >= 0) {
      listCheckbox[index].check = false
  
      const cloneArrayIndustries = arrayEmployeesCategories.filter((item) => {
        return item !== arrayEmployeesCategories[doesElement]
      })

      setArrayEmployeesCategories(cloneArrayIndustries)
    } else if (doesElement === -1) {
      listCheckbox[index].check = true;
      setArrayEmployeesCategories([...arrayEmployeesCategories, value.text]);
    }
  };

  const apply = () => {
  
    dispatch({type:'ADD_TEST_JOBS'});
  }

  return (
    <div className="item_accordion_Industries">
      <Accordion>
        <AccordionSummary
          className={open ? "openAccordion" : null}
          onClick={() => openAccordion()}
          expandIcon={open ? <RemoveRoundedIcon /> : <AddRoundedIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Categories</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className="ListIdustries">
            {listCheckbox.map((item, index) =>
              <div className="item_ListIdustries" key={index}>
                <Checkbox
                  color="primary"
                  onChange={() => handleChange(item, index)}
                  checked={item.check}
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
                <span className="listIdustries_item_text">{item.text}</span>
              </div>
            )
            }
          </div>
          <div className="item_text">
            <span onClick={() => apply()}>Apply</span>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default Categories;