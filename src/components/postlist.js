// import React from 'react';
// import styled from 'styled-components';

// const Artistlist = (props) =>{
//     const Wrapper = styled.section`
//         padding: 2em;
//         width:150px;
//         font-size:30px;
//         margin: 1em;
//     `;
//     return (

//         <div>
//             {props.users && props.users.length > 0 ?
//             props.users[0].items.map( user =>
//                 (
//                     <Wrapper key={user.id}>
//                     <hr/>
//                     <a href={user.html_url} target="_blank">{user.login}</a>
//                     </Wrapper>
//                 )
//                 ) : console.log('sorry, but something going wrong, try again pls')
//             }
//         </div>
//     )
// }

// export default Artistlist;