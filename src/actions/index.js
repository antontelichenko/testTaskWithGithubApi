
const loadUsers=()=>({
    type:'LOAD_USERS',
});
const setUsers=(users)=>({
    type:'LOAD_SUCCESS',
    users,
});
const setError=(error)=>({
    type:'LOAD_ERROR',
    error
});
const loadUsersStats=(login)=>({
    type:'LOAD_STATS',
    login,
});
const setUsersStats=(id, response, stars)=>({
    type:'LOAD_SUCCESS_STATS',
    response,
    stars,
    id
});
const setErrorStats=(login)=>({
    type:'LOAD_ERROR_STATS',
    login
});


export{loadUsers, setUsers, setError, loadUsersStats, setUsersStats, setErrorStats}


