const defaultState = {
  filtersArray: [
  {id:'1', name: "nM Electronic supplier1", industry: "Construction", cvr: 67, vacancies: "16 vacancies", employees: 155, date: "12.24.21", plan: "premium"},
  {id:'2', name: "nM Electronic supplier2", industry: "Construction", cvr: 23, vacancies: "16 vacancies", employees: 8, date: "12.24.21", plan: "premium"},
  {id:'3', name: "nM Electronic supplier3", industry: "Restaurants/Cafe", cvr: 64, vacancies: "16 vacancies", employees: 25, date: "12.24.21", plan: "premium"},
  {id:'4', name: "nM Electronic supplier4", industry: "Hotel/Hostel", cvr: 21, vacancies: "16 vacancies", employees: 46, date: "12.24.21", plan: "premium"},
  {id:'5', name: "nM Electronic supplier5", industry: "Cleaning", cvr: 25, vacancies: "16 vacancies", employees: 80, date: "12.24.21", plan: "premium"},
  {id:'6', name: "nM Electronic supplier6", industry: "Construction", cvr: 32, vacancies: "16 vacancies", employees: 1, date: "12.24.21", plan: "premium"},
  {id:'7', name: "nM Electronic supplier7", industry: "Retail", cvr: 52, vacancies: "16 vacancies", employees: 4, date: "12.24.21", plan: "premium"},
  {id:'8', name: "nM Electronic supplier8", industry: "Construction", cvr: 15, vacancies: "16 vacancies", employees: 15, date: "12.24.21", plan: "premium"},
  {id:'9', name: "nM Electronic supplier9", industry: "Construction", cvr: 62, vacancies: "16 vacancies", employees: 18, date: "12.24.21", plan: "premium"},
  {id:'10', name: "nM Electronic supplier10", industry: "Transport", cvr: 64, vacancies: "16 vacancies", employees: 66, date: "12.24.21", plan: "premium"},
  {id:'11', name: "nM Electronic supplier11", industry: "Construction", cvr: 21, vacancies: "16 vacancies", employees: 34, date: "12.24.21", plan: "premium"},
  {id:'12', name: "nM Electronic supplier12", industry: "Construction", cvr: 24, vacancies: "16 vacancies", employees: 76, date: "12.24.21", plan: "premium"},
  {id:'13', name: "nM Electronic supplier13", industry: "Construction", cvr: 63, vacancies: "16 vacancies", employees: 22, date: "12.24.21", plan: "premium"},
  ],
  cloneFiltersArray: [],
  filters: {industries: [], employess: [], vacancies: null }
}

const filter = (filters) => {
  const {industries, employess, vacancies } = filters
  let array = defaultState.filtersArray

  if (vacancies) {
    array = array.filter(cloneArray => (cloneArray.id <= filters.vacancies))
  }
  if (industries.length > 0) {
    array = array.filter(cloneArray => filters.industries.includes(cloneArray.industry)).map(cloneArray => cloneArray)
  }
  if (employess.length > 0) {
    array = array.filter(cloneArray => cloneArray.employees < employess[employess.length - 1].max && cloneArray.employees > employess[0].min )
  }

  return array
}

export const filterReducer = (state = defaultState, action) => {
  filter(state.filters)
  switch(action.type) {
    case 'ADD_TEST':
      return {...state, cloneFiltersArray: filter(state.filters)}
    case 'ADD_FILTER':
      return {...state, filters: action.payload}
    case 'ADD_ARRAY':
      return {...state, cloneFiltersArray: action.payload}
    case 'GET_VACANCIES':
      return {...state, cloneFiltersArray: state.cloneFiltersArray.filter(cloneArray => cloneArray.id <= action.payload) }
    case 'GET_INDUSTRIES':
      return {...state, cloneFiltersArray: state.cloneFiltersArray.filter(cloneArray => action.payload.includes(cloneArray.industry)).map(cloneArray => cloneArray) }
    case 'GET_EMPLOYEES':
      return {...state, cloneFiltersArray: state.cloneFiltersArray.filter(cloneArray => action.payload.includes(cloneArray.employees)).map(cloneArray => cloneArray) }
    default:
      return state
  }  
}