const defaultState = {
  filtersArray: [
  {id:'1', name: "Jacob Jones", applies: "12", shortlised: 12, rejected: "16 rejected", languages: "English, Danish", location: "Denmark, Сopenhagen", date: "12.24.21"},
  {id:'2', name: "Jacob Jones2", applies: "12", shortlised: 12, rejected: "16 rejected", languages: "English, Danish", location: "Denmark, Сopenhagen", date: "12.24.21"},
  {id:'3', name: "Jacob Jones3", applies: "12", shortlised: 12, rejected: "16 rejected", languages: "English, Danish", location: "Denmark, Сopenhagen", date: "12.24.21"},
  {id:'4', name: "Jacob Jones4", applies: "12", shortlised: 12, rejected: "16 rejected", languages: "English, Danish", location: "Denmark, Сopenhagen", date: "12.24.21"},
  {id:'5', name: "Jacob Jones5", applies: "12", shortlised: 12, rejected: "16 rejected", languages: "English, Danish", location: "Denmark, Сopenhagen", date: "12.24.21"},
  {id:'6', name: "Jacob Jones6", applies: "12", shortlised: 12, rejected: "16 rejected", languages: "English, Danish", location: "Denmark, Сopenhagen", date: "12.24.21"},
  {id:'7', name: "Jacob Jones7", applies: "12", shortlised: 52, rejected: "16 rejected", languages: "English, Danish", location: "Denmark, Сopenhagen", date: "12.24.21"},
  {id:'8', name: "Jacob Jones8", applies: "12", shortlised: 15, rejected: "16 rejected", languages: "English, Danish", location: "Denmark, Сopenhagen", date: "12.24.21"},
  {id:'9', name: "Jacob Jones9", applies: "12", shortlised: 62, rejected: "16 rejected", languages: "English, Danish", location: "Denmark, Сopenhagen", date: "12.24.21"},
  {id:'10', name: "Jacob Jones10", applies: "12", shortlised: 64, rejected: "16 rejected", languages: "English, Danish", location: "Denmark, Сopenhagen", date: "12.24.21"},
  {id:'11', name: "Jacob Jones11", applies: "12", shortlised: 21, rejected: "16 rejected", languages: "English, Danish", location: "Denmark, Сopenhagen", date: "12.24.21"},
  {id:'12', name: "Jacob Jones12", applies: "12", shortlised: 24, rejected: "16 rejected", languages: "English, Danish", location: "Denmark, Сopenhagen", date: "12.24.21"},
  {id:'13', name: "Jacob Jones13", applies: "12", shortlised: 63, rejected: "16 rejected", languages: "English, Danish", location: "Denmark, Сopenhagen", date: "12.24.21"},
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

export const filterCandidatesReducer = (state = defaultState, action) => {
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