module.exports.setForexDataToPage = (param1) => ( dispatch ) =>
  console.log param1
  dispatch(type: 'ASSIGN_PAGES', data: {activePage: 'currency'})
