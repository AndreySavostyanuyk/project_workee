const stateJobs = {
  filtersArrayJobs: [
  {id:'1', name: "Search for a developer", company: "12", category: "Chef/Cook", location: "16 location", applications: "English, Danish", shortlisted: "Denmark, Сopenhagen", rejected: "12.24.21", status: "Active", date:"12/02/21"},
  {id:'2', name: "Search for a developer2", company: "12", category: "Chef/Cook", location: "16 location", applications: "English, Danish", shortlisted: "Denmark, Сopenhagen", rejected: "12.24.21", status: "Active", date:"12/02/21"},
  {id:'3', name: "Search for a developer3", company: "12", category: "Chef/Cook", location: "16 location", applications: "English, Danish", shortlisted: "Denmark, Сopenhagen", rejected: "12.24.21", status: "Active", date:"12/02/21"},
  {id:'4', name: "Search for a developer4", company: "12", category: "Waiter/Waitress", location: "16 location", applications: "English, Danish", shortlisted: "Denmark, Сopenhagen", rejected: "12.24.21", status: "Active", date:"12/02/21"},
  {id:'5', name: "Search for a developer5", company: "12", category: "Chef/Cook", location: "16 location", applications: "English, Danish", shortlisted: "Denmark, Сopenhagen", rejected: "12.24.21", status: "Active", date:"12/02/21"},
  {id:'6', name: "Search for a developer6", company: "12", category: "Chef/Cook", location: "16 location", applications: "English, Danish", shortlisted: "Denmark, Сopenhagen", rejected: "12.24.21", status: "Active", date:"12/02/21"},
  {id:'7', name: "Search for a developer7", company: "12", category: "Chef/Cook", location: "16 location", applications: "English, Danish", shortlisted: "Denmark, Сopenhagen", rejected: "12.24.21", status: "Active", date:"12/02/21"},
  {id:'8', name: "Search for a developer8", company: "12", category: "Chef/Cook", location: "16 location", applications: "English, Danish", shortlisted: "Denmark, Сopenhagen", rejected: "12.24.21", status: "Active", date:"12/02/21"},
  {id:'9', name: "Search for a developer9", company: "12", category: "Barista/Bartender", location: "16 location", applications: "English, Danish", shortlisted: "Denmark, Сopenhagen", rejected: "12.24.21", status: "Active", date:"12/02/21"},
  {id:'10', name: "Search for a developer10", company: "12", category: "Warehouse", location: "16 location", applications: "English, Danish", shortlisted: "Denmark, Сopenhagen", rejected: "12.24.21", status: "Active", date:"12/02/21"},
  {id:'11', name: "Search for a developer11", company: "12", category: "Office/Admin", location: "16 location", applications: "English, Danish", shortlisted: "Denmark, Сopenhagen", rejected: "12.24.21", status: "Active", date:"12/02/21"},
  {id:'12', name: "Search for a developer12", company: "12", category: "Events/Promoter", location: "16 location", applications: "English, Danish", shortlisted: "Denmark, Сopenhagen", rejected: "12.24.21", status: "Active", date:"12/02/21"},
  {id:'13', name: "Search for a developer13", company: "12", category: "Chef/Cook", location: "16 location", applications: "English, Danish", shortlisted: "Denmark, Сopenhagen", rejected: "12.24.21", status: "Active", date:"12/02/21"},
  ],
  cloneFiltersArrayJobs: [],
  filtersJob: {category: []}
}

const filterJobs = (filters) => {
  const { category } = filters
  let array = stateJobs.filtersArrayJobs

  if (category.length > 0) {
    array = array.filter(cloneArray => filters.category.includes(cloneArray.category)).map(cloneArray => cloneArray)
  }

  return array
}

export const filterJobsReducer = (state = stateJobs, action) => {
  filterJobs(state.filtersJob)
  switch(action.type) {
    case 'ADD_TEST_JOBS':
      return {...state, cloneFiltersArrayJobs: filterJobs(state.filtersJob)}
    case 'ADD_FILTER_JOBS':
      return {...state, filtersJob: action.payload}
    case 'ADD_ARRAY_JOBS':
      return {...state, cloneFiltersArrayJobs: action.payload}
   
    default:
      return state
  }  
}