import styled from '@emotion/styled';

export const FriendItem = styled.li`

display:flex;
align-items:center;
width:400px;
margin-bottom:15px;
padding:15px;
background-color:white;
border-radius:15px;
&:hover{
     box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06), 1px 4px 6px rgba(0, 0, 0, 0.16);
}
`;


export const FriendListStatOnline = styled.span`
display:block;
width:20px;
height:20px;
margin-right:15px;
border-radius:50%;
background-color: ${props => {
     if(props.isOnline) {
      
            return 'green';
        }
            return 'red';  
}};`

export const FriendAvatar = styled.img`
display:block;
margin-right:15px;

`;
export const FriendName = styled.p`
font-size: 24px;
  font-weight: bold;


`;