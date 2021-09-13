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
import './EmployesAge.scss';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const EmployesAge = ({ arrayEmployeesAge, setArrayEmployeesAge }) => {
  const [open, setOpen] = useState(false);
  const [arrayListCheckbox, setArrayListCheckbox] = useState([
  {check:false, symbol: '-', text:'0-10', min: 0, max: 18},
  {check:false, symbol: '-', text:'11-20', min: 19, max: 34},
  {check:false, symbol: '-', text:'21-50', min: 35, max: 49},
  {check:false, symbol: '+', text:'50+', min: 50, max: ""},
  ]);
  const classes = useStyles();
  const dispatch = useDispatch();

  const openAccordion = () => {
    const flag = !open;
    setOpen(flag);
  }

  useEffect(() => {
    const cloneArrayListCheckbox = arrayListCheckbox.map((item,index) => {
      const doesElement = arrayEmployeesAge.find(x => x.min == item.min);
       if(!doesElement) {
         return { ...item, check: false}
       }  return item
    })
    setArrayListCheckbox(cloneArrayListCheckbox)
  }, [arrayEmployeesAge])

  const handleChange = (value, index) => {
    const doesElement = arrayEmployeesAge.find(x => x.min == value.min)
    if (doesElement) {
      arrayListCheckbox[index].check = false
    
      const cloneArrayEmployees = arrayEmployeesAge.filter((item) => {
        return item !== doesElement
      })
      setArrayEmployeesAge(cloneArrayEmployees)
    } else if (!doesElement) {
      arrayListCheckbox[index].check = true
      setArrayEmployeesAge([...arrayEmployeesAge, { min: value.min, max: value.max}]);
    }
  };

  const apply = () => {
    dispatch({type:'ADD_TEST' });
  }

  return (
    <div className="item_accordion_EmployeesAge">
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

export default EmployesAge;