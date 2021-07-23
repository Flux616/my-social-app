import {createSelector} from "reselect";

export const getUsers = (state) => {
    return state.usersPage.users
}

export const getPageSize = (state) => {
    return state.usersPage.pageSize
}

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage
}

export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress
}

export const getTotalUsersCount = (state) => {
    return state.usersPage.totalItemsCount
}

//      Пример использования реселекта (сложных селекторов):
//
//       const getUsersSelector = (state) => {
//           return state.usersPage.users;
//       }
//
//       export const getUsersFilter = createSelector(getUsersSelector, (users) => {
//           return users.filter( u => true)
//       })
/*

    функция createSelector создает реселектор, она принимает в качестве зависимостей простые селекты из стейта (селекты без сложных вычислений),
    при первом вызове реселекта значения зависимостей кешируются внутри реселекта, а при следующих вызовах дергаются простые селекторы
    зависимости и их  значения сравниваются с кешироваными!
    Если изменений по сравнению с кешем нет, то сразу возвращается кеншированный результат без запуска дорогого селектора,

    если же что-то из зависимостей изменилось в стейте по сравнению с кешем то тогда уже вызывается
    селектор с дорогими вычислениями!
*/

