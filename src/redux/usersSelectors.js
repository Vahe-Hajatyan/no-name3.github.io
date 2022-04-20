

export const getUsers = (state) => {
  return state.usersPage.Users;
}
export const pageSize = (state) => {
  return state.usersPage.pageSize
}
export const totalItemsCount = (state) => {
  return state.usersPage.totalItemsCount
}
export const currentPage = (state) => {
  return state.usersPage.currentPage
}
export const isFetching = (state) => {
  return state.usersPage.isFetching
}
export const followingInProgress = (state) => {
  return state.usersPage.followingInProgress
}