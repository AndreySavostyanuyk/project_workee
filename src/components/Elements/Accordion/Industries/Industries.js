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
import './Industries.scss';
import { applyMiddleware } from 'redux';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const Industries = ({ arrayIndustries, setArrayIndustries, filterArray, arrayVacancies }) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const clonefilterArray = useSelector(state => state.filters.cloneFiltersArray)
  const filters = useSelector(state => state.filters.filters)

  const classes = useStyles();
  const [listCheckbox, setListCheckbox] = useState([
    { check: false, text: 'Restaurants/Cafe' },
    { check: false, text: 'Hotel/Hostel' },
    { check: false, text: 'Cleaning' },
    { check: false, text: 'Construction' },
    { check: false, text: 'Retail' },
    { check: false, text: 'Transport' },
  ]);

  const openAccordion = () => {
    const flag = !open;
    setOpen(flag);
  }

  useEffect(() => {
    const cloneListCheckbox = listCheckbox.map((item,index) => {
      const doesElement = arrayIndustries.indexOf(item.text);

       if(doesElement === -1) {
         return { ...item, check: false}
       }  return item
    })

  setListCheckbox(cloneListCheckbox)
  }, [arrayIndustries])

  const handleChange = (value, index) => {
    const doesElement = arrayIndustries.indexOf(value.text);

    if (doesElement >= 0) {
      listCheckbox[index].check = false
  
      const cloneArrayIndustries = arrayIndustries.filter((item) => {
        return item !== arrayIndustries[doesElement]
      })

      setArrayIndustries(cloneArrayIndustries)
    } else if (doesElement === -1) {
      listCheckbox[index].check = true;
      setArrayIndustries([...arrayIndustries, value.text]);
    }
  };

  const apply = () => {
    
    dispatch({type:'ADD_TEST'});
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
          <Typography className={classes.heading}>Industries</Typography>
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

export default Industries;