import axios from 'axios';
const URL='https://api.github.com/search/users';

const fetchUsers=()=>{
    const response=axios.get(`${URL}?q=location:Kyiv&per_page=10&client_id=354b481a0938e04b511c&client_secret=00de099a5dcefd53ec83e21dc7a9a6a5bfbcb20f`)
    .then(response=>response.data)
    if(response.status>=400){
        throw new Error(response.errors);
    }
    console.log(response)
    return response;
}

const fetchUsersStats=(url)=>{
    const response=axios.get(`${url}?client_id=354b481a0938e04b511c&client_secret=00de099a5dcefd53ec83e21dc7a9a6a5bfbcb20f`)
    .then(response=>response.data)
    if(response.status>=400){
        throw new Error(response.errors);
    }
    return response;
}

const fetchUsersStars=(url,i)=>{
        const stars=axios.get(`${url}/starred?per_page=100&page=${i}&client_id=354b481a0938e04b511c&client_secret=00de099a5dcefd53ec83e21dc7a9a6a5bfbcb20f`)
        .then(stars=>stars.data.length)
        if(stars.status>=400){
            throw new Error(stars.errors);
        }
        return stars;
    }

export {fetchUsers, fetchUsersStats,fetchUsersStars};

