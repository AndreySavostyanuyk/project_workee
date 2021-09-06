import { useEffect, useState } from 'react';
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

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const Industries = ({ arrayIndustries, setArrayIndustries }) => {
  const [open, setOpen] = useState(false);

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
      const id = arrayIndustries.indexOf(item.text);

       if(id === -1) {
         return { ...item, check: false}
       }  return item
    })

  setListCheckbox(cloneListCheckbox)
  }, [arrayIndustries])

  const handleChange = (value, index) => {
    const id = arrayIndustries.indexOf(value.text);

    if (id >= 0) {
      listCheckbox[index].check = false
  
      const cloneArrayIndustries = arrayIndustries.filter(function (item) {
        return item !== arrayIndustries[id]
      })

      setArrayIndustries(cloneArrayIndustries)
    } else if (id === -1) {
      listCheckbox[index].check = true
      setArrayIndustries([...arrayIndustries, value.text]);
    }
  };

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
            <span>Apply</span>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default Industries;