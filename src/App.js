import { useEffect, useState } from 'react';
import SidePanel from './components/SidePanel/SidePanel';
import Jobs from './components/Jobs/Jobs';
import Companies from './components/Companies/Companies';
import Candidates from './components/Candidates/Candidates';
import ProblemReports from './components/ProblemReports/ProblemReports';
import Settings from './components/Settings/Settings';
import FilterPanel from './components/Elements/FilterPanel/FilterPanel';
import { 
  Switch, 
  Route, 
  Redirect 
} from 'react-router-dom';
import './App.css';

const App = () => {
  const [openFilterPanel, setOpenFilterPanel] = useState(false);

  return (
    <div className="App">
      <SidePanel />
      <FilterPanel setOpenFilterPanel={setOpenFilterPanel} openFilterPanel={openFilterPanel} />
      <Switch>
        <Route path='/jobs' component={Jobs} />
        <Route path='/companies'>
          <Companies openFilterPanel={openFilterPanel} setOpenFilterPanel={setOpenFilterPanel}  />
        </Route>
        <Route path='/candidates' component={Candidates} />
        <Route path='/problemReports' component={ProblemReports} />
        <Route path='/settings' component={Settings} />
        <Redirect from='/' to='/companies' />
      </Switch>
    </div>
  );
}

export default App;
