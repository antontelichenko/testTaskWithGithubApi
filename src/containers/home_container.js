import React, { PureComponent } from 'react';

import styled from 'styled-components';
import {connect} from 'react-redux';
import {loadUsers} from '../actions';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMapMarkerAlt, faEnvelope, faStar} from '@fortawesome/free-solid-svg-icons'
class HomeContainer extends PureComponent {

    componentWillMount() {
        this.props.loadUsers();
    }
    render(){
            const {UsersStats, error}=this.props;
            let mass=[];
            let stars=0;
            const Wrapper = styled.section`
                border-top:1px solid grey;
                padding: 2em;
            `;
            const Image= styled.section`
                max-height:25px;
                max-width:25px;
                display:inline-block;
            `;
            const TextBlock = styled.section`
                margin-left:100px;
                display:inline-block;
            `;
            const Title=styled.span`
            font-size: 1.3em;
            margin: 0px 10px;
            `;
            const Link=styled.a`
            font-size: 1.3em;
            `;
            const Bio=styled.p`
            font-size: 1.3em;
            `;
            try {
                if(UsersStats[9]){
                    for(let i=0; i<10; i++){
                        if(UsersStats[i]){
                                mass.push(UsersStats[i].info)
                                stars=UsersStats[i].stars.reduce((a,b)=>a+b)
                                mass[i].start=stars;
                            }
                        }
                    }
                } catch (error) {
                }
        return (
            <div>
                {
                mass.length===10?
                mass.map((user)=>(
                    <Wrapper key={user.id}>
                    <Image><img style={{marginBottom:'10px', maxHeight:'75px', borderRadius:'4px'}} src={user.avatar_url} alt=""/></Image>
                        <TextBlock>
                                <Link target="_blank" href={user.html_url}>{user.login}</Link>
                                <Title>{user.name}</Title>
                                <Bio>{user.bio}</Bio>
                                <FontAwesomeIcon icon={faMapMarkerAlt} />
                                <Title>{user.location}</Title>
                                <FontAwesomeIcon icon={faEnvelope} />
                                <Title>{user.email}</Title>
                                <FontAwesomeIcon icon={faStar} />
                                <Title>{`${user.start} stars`}</Title>
                        </TextBlock>
                    </Wrapper>
                ))
            :<p>loading...</p>
            }
                {error&& <div>{JSON.stringify(error)}</div>}
            </div>
        )
    }

}

const mapStateToProps=({isLoading, users, error, stats})=>({
    isLoading, users, error, UsersStats:stats
})

const mapDispatchToProps=dispatch=>({
    loadUsers:()=>dispatch(loadUsers()),
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);