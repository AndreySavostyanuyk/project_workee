import { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import RemoveRoundedIcon from '@material-ui/icons/RemoveRounded';
import RangeSlider from '../../RangeSlider/RangeSlider';
import './NumberVacancies.scss';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const NumberVacancies = ({ setArrayVacancies, arrayVacancies }) => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  const openAccordion = () => {
    const flag = !open;
    setOpen(flag);
  }

  return (
    <div className="item_accordion_Vacancies">
      <Accordion>
        <AccordionSummary
          className={open ? "openAccordion": null}
          onClick={() => openAccordion()}
          expandIcon={ open ? <RemoveRoundedIcon /> : <AddRoundedIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Number of Vacancies</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <RangeSlider setArrayVacancies={setArrayVacancies} arrayVacancies={arrayVacancies} />
          <div className="item_text">
            <span>Apply</span>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default NumberVacancies;