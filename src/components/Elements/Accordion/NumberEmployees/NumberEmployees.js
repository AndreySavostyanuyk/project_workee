import { useEffect, useState } from 'react';
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

const NumberEmployees = ({ arrayEmployees, setArrayEmployees, deleteEmployees }) => {
  const [open, setOpen] = useState(false);
  const [arrayListCheckbox, setArrayListCheckbox] = useState([
  {check:false, text: '0 - 10'},
  {check:false, text: '11 - 20'},
  {check:false, text: '21 - 50'},
  {check:false, text: '50 - 100'},
  {check:false, text: '100+'}
  ]);
  const classes = useStyles();

  const openAccordion = () => {
    const flag = !open;
    setOpen(flag);
  }

  useEffect(() => {
    const cloneArrayListCheckbox = arrayListCheckbox.map((item,index) => {
      const id = arrayEmployees.indexOf(item.text);
       if(id === -1) {
         return { ...item, check: false}
       }  return item
    })
    setArrayListCheckbox(cloneArrayListCheckbox)
  }, [arrayEmployees])

  const handleChange = (value, index) => {
    const id = arrayEmployees.indexOf(value.text);
    if (id >= 0) {
      arrayListCheckbox[index].check = false
    
      const cloneArrayEmployees = arrayEmployees.filter((item) => {
        return item !== arrayEmployees[id]
      })
      setArrayEmployees(cloneArrayEmployees)
    } else if (id === -1) {
      arrayListCheckbox[index].check = true
      setArrayEmployees([...arrayEmployees, value.text]);
    }
    // setArrayIndustries([...arrayIndustries,value])
  };

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
              <div className="item_ListEmployees">
                <Checkbox
                color="primary"
                onChange={() => handleChange(item, index)}
                checked={item.check}
                inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
                <span className="listEmployees_item_text">{item.text}</span>
              </div>
            )
            }
          </div>
          <div className="item_text">
            <span>Apply</span>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default NumberEmployees;