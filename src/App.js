import SidePanel from './components/SidePanel/SidePanel';
import Jobs from './components/Jobs/Jobs';
import Companies from './components/Companies/Companies';
import Candidates from './components/Candidates/Candidates';
import ProblemReports from './components/ProblemReports/ProblemReports';
import Settings from './components/Settings/Settings';
import { 
  Switch, 
  Route, 
  Redirect 
} from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <SidePanel />
      <Switch>
        <Route path='/jobs' component={Jobs} />
        <Route path='/companies' component={Companies} />
        <Route path='/candidates' component={Candidates} />
        <Route path='/problemReports' component={ProblemReports} />
        <Route path='/settings' component={Settings} />
        <Redirect from='/' to='/companies' />
      </Switch>
    </div>
  );
}

export default App;
