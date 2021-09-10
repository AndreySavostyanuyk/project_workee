import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { lighten, makeStyles } from '@material-ui/core/styles';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer,
  TableHead, 
  TableRow, 
  TableSortLabel, 
  Paper, 
  Checkbox  
} from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import './Table.scss';

function createData(id, name, industry, cvr, vacancies, employees, date, plan) {
  return { id, name, industry, cvr, vacancies, employees, date, plan };
}

const rowsArray = [
  createData('1', "nM Electronic supplier", "Construction", 67, 4.3, "16 vacancies", "45 employess", "12.24.21", "premium"),
  createData('2', "nM Electronic supplier", "Construction", 51, 4.9, "16 vacancies", "45 employess", "12.24.21", "premium"),
  createData('3', "nM Electronic supplier", "Construction", 24, 6.0, "16 vacancies", "45 employess", "12.24.21", "premium"),
  createData('4', "nM Electronic supplier", "Construction", 24, 4.0, "16 vacancies", "45 employess", "12.24.21", "premium"),
  createData('5', "nM Electronic supplier", "Construction", 49, 3.9, "16 vacancies", "45 employess", "12.24.21", "premium"),
  createData('6', "nM Electronic supplier", "Construction", 87, 6.5, "16 vacancies", "45 employess", "12.24.21", "premium"),
  createData('7', "nM Electronic supplier", "Construction", 37, 4.3, "16 vacancies", "45 employess", "12.24.21", "premium"),
  createData('8', "nM Electronic supplier", "Construction", 94, 0.0, "16 vacancies", "45 employess", "12.24.21", "premium"),
  createData('9', "nM Electronic supplier", "Construction", 65, 7.0, "16 vacancies", "45 employess", "12.24.21", "premium"),
  createData('10', "nM Electronic supplier", "Construction", 98, 0.0, "16 vacancies", "45 employess", "12.24.21", "premium"),
  createData('11', "nM Electronic supplier", "Construction", 81, 2.0, "16 vacancies", "45 employess", "12.24.21", "premium"),
  createData('12', "nM Electronic supplier", "Construction", 9, 37.0, "16 vacancies", "45 employess", "12.24.21", "premium"),
  createData('13', "nM Electronic supplier", "Construction", 63, 4.0, "16 vacancies", "45 employess", "12.24.21", "premium"),
];


function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  { id: 'id', numeric: false, disablePadding: true, label: '#' },
  { id: 'name', numeric: true, disablePadding: false, label: 'Company name' },
  { id: 'industry', numeric: true, disablePadding: false, label: 'industry' },
  { id: 'cvr', numeric: true, disablePadding: false, label: 'cvr' },
  { id: 'vacancies', numeric: true, disablePadding: false, label: 'vacancies' },
  { id: 'employees', numeric: true, disablePadding: false, label: 'employees' },
  { id: 'date', numeric: true, disablePadding: false, label: 'date' },
  { id: 'plan', numeric: true, disablePadding: false, label: 'plan' }
];

const EnhancedTableHead = (props) => {
  const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead className="item_tableHead">
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ 'aria-label': 'select all desserts' }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <span className={classes.visuallyHidden}>
              {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
            </span>

            {headCell.label}

            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === 'light'
      ? {
        color: theme.palette.secondary.main,
        backgroundColor: lighten(theme.palette.secondary.light, 0.85),
      }
      : {
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.secondary.dark,
      },
  title: {
    flex: '1 1 100%',
  },
}));

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
}));

const EnhancedTable = () => {
  const classes = useStyles();
  const dispatch = useDispatch()
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('calories');
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [dense, setDense] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [rows, setRows] = useState(useSelector(state => state.filters.filtersArray));

  const vacanciesArray = useSelector(state => state.filters.cloneFiltersArray);

  useEffect(() => {
    if (vacanciesArray.length > 0) {
      setRows(vacanciesArray)
    }
  }, [vacanciesArray])

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage - 1);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);


  const next = () => {
    if ((page + 1) < Math.round(rows.length / rowsPerPage)) {
      setPage(page+1)
    }
  }

  const prev = () => {
    if (page <= Math.round(rows.length / rowsPerPage) && page >= 1) {
      setPage(page - 1)
    }
  }

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.name);
                  const labelId = `enhanced-table-checkbox-${index}`;
                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.name)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.name}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={isItemSelected}
                          inputProps={{ 'aria-labelledby': labelId }}
                        />
                      </TableCell>
                      <TableCell component="th" id={labelId} scope="row" padding="none">
                        {row.id}
                      </TableCell>
                      <TableCell align="right">{row.name}</TableCell>
                      <TableCell align="right">{row.industry}</TableCell>
                      <TableCell align="right">{row.cvr}</TableCell>
                      <TableCell align="right">{row.vacancies}</TableCell>
                      <TableCell align="right">{row.employees}</TableCell>
                      <TableCell align="right">{row.plan}</TableCell>
                      <TableCell align="right">{row.date}</TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      <div className="item_pagination">
        <span className={page > 0 ? "item_button__next" : "item_button__prev"} onClick={prev}>
          Prev
        </span>
        <Pagination
          count={Math.round(rows.length / rowsPerPage)}
          page={page + 1}
          onChange={handleChangePage}
          variant="outlined"
          shape="rounded"
          hideNextButton="true"
          hidePrevButton="true"
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
        <span className={(page + 1) === Math.round(rows.length / rowsPerPage) ? "item_button__prev" : "item_button__next"} onClick={next}>
          Next
        </span>
      </div>
    </div>
  );
}

export default EnhancedTable;