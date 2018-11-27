initialState = {
  pages:
    unauthorized: true
    errorCode: 200
    loader: false,
    loading: true,
    searchFlag: false
    titleSearch: ''
    viewMode: 'recap'
    width: ''
    viewModeAudience: 'name'
    activePage: 'dashboard'
    contentSelected: null
    currentUser: null
    displayViewAsMode: false
    viewAsMode: 'personal'
    displayDashboardPipelineSelectFlag: false
    displayPipelineSelected: null
    permission:
      arrayItems: []
      items: []
    menuFilter: false
    authUser: null
}

pages = (state = initialState.pages, action) =>
  switch action.type
    when 'LOAD_PAGES'
      action.data
    when 'ASSIGN_PAGES'
      Object.assign({}, state, action.data)
    when 'LOAD_ITEM'
      Object.assign({}, state, action.data)
    else
      state
module.exports = pages
