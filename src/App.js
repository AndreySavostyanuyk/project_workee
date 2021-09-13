import { useEffect, useState } from 'react';
import SidePanel from './components/SidePanel/SidePanel';
import Jobs from './components/Jobs/Jobs';
import Companies from './components/Companies/Companies';
import Candidates from './components/Candidates/Candidates';
import ProblemReports from './components/ProblemReports/ProblemReports';
import Settings from './components/Settings/Settings';
import FilterPanel from './components/Elements/FilterPanel/FilterPanel';
import FilterPanelCandidates from './components/Elements/FilterPanel/FilterPanelCandidates/FilterPanelCandidates';
import FilterPanelJobs from './components/Elements/FilterPanel/FilterPanelJobs/FilterPanelJobs';
import { 
  Switch, 
  Route, 
  Redirect 
} from 'react-router-dom';
import './App.css';

const App = () => {
  const [openFilterPanel, setOpenFilterPanel] = useState(false);
  const [openFilterPanelCandidates, setOpenFilterPanelCandidates] = useState(false);
  const [openFilterPanelJobs, setOpenFilterPanelJobs] = useState(false);

  return (
    <div className="App">
      <SidePanel />
      <FilterPanel setOpenFilterPanel={setOpenFilterPanel} openFilterPanel={openFilterPanel} />
      <FilterPanelCandidates openFilterPanelCandidates={openFilterPanelCandidates} setOpenFilterPanelCandidates={setOpenFilterPanelCandidates} />
      <FilterPanelJobs openFilterPanelJobs={openFilterPanelJobs} setOpenFilterPanelJobs={setOpenFilterPanelJobs} />
      <Switch>
        <Route path='/jobs'>
          <Jobs openFilterPanelJobs={openFilterPanelJobs} setOpenFilterPanelJobs={setOpenFilterPanelJobs} />
        </Route>
        <Route path='/companies'>
          <Companies openFilterPanel={openFilterPanel} setOpenFilterPanel={setOpenFilterPanel}  />
        </Route>
        <Route path='/candidates'>
          <Candidates openFilterPanelCandidates={openFilterPanelCandidates} setOpenFilterPanelCandidates={setOpenFilterPanelCandidates} />
        </Route>  
        <Route path='/problemReports' component={ProblemReports} />
        <Route path='/settings' component={Settings} />
        <Redirect from='/' to='/companies' />
      </Switch>
    </div>
  );
}

export default App;
