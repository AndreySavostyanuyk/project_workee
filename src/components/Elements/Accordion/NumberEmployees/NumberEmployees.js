import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
  makeStyles, 
  Accordion, 
  AccordionSummary, 
  AccordionDetails, 
  Typography,
  Checkbox
} from '@material-ui/core';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import RemoveRoundedIcon from '@material-ui/icons/RemoveRounded';
import './NumberEmployees.scss';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const NumberEmployees = ({ arrayEmployees, setArrayEmployees, deleteEmployees, filterArray }) => {
  const [open, setOpen] = useState(false);
  const [arrayListCheckbox, setArrayListCheckbox] = useState([
  {check:false, symbol: '-', text:'0-10', min: 0, max: 10},
  {check:false, symbol: '-', text:'11-20', min: 11, max: 20},
  {check:false, symbol: '-', text:'21-50', min: 21, max: 50},
  {check:false, symbol: '-', text:'50-100', min: 50, max: 100},
  {check:false, symbol: '+', text:'100+', min: 100, max: ""}
  ]);
  const classes = useStyles();
  const dispatch = useDispatch();

  const openAccordion = () => {
    const flag = !open;
    setOpen(flag);
  }

  useEffect(() => {
    const cloneArrayListCheckbox = arrayListCheckbox.map((item,index) => {
      const doesElement = arrayEmployees.find(x => x.min == item.min);
       if(!doesElement) {
         return { ...item, check: false}
       }  return item
    })
    setArrayListCheckbox(cloneArrayListCheckbox)
  }, [arrayEmployees])

  const handleChange = (value, index) => {
    const doesElement = arrayEmployees.find(x => x.min == value.min)
    if (doesElement) {
      arrayListCheckbox[index].check = false
    
      const cloneArrayEmployees = arrayEmployees.filter((item) => {
        return item !== doesElement
      })
      setArrayEmployees(cloneArrayEmployees)
    } else if (!doesElement) {
      arrayListCheckbox[index].check = true
      setArrayEmployees([...arrayEmployees, { min: value.min, max: value.max}]);
    }
  };

  const apply = () => {
    dispatch({type:'ADD_TEST' });
  }

  return (
    <div className="item_accordion_Employees">
      <Accordion>
        <AccordionSummary
          className={open ? "openAccordion": null}
          onClick={() => openAccordion()}
          expandIcon={ open ? <RemoveRoundedIcon /> : <AddRoundedIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Number of employees</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className="ListEmployees">
            { arrayListCheckbox.map((item, index) => 
              <div className="item_ListEmployees" key={index}>

                <Checkbox
                color="primary"
                onChange={() => handleChange(item, index)}
                
                checked={item.check}
                inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
                <span className="listEmployees_item_text">{item.min}{item.symbol}{item.max}</span>
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

export default NumberEmployees;