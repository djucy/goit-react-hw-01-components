import styled from '@emotion/styled';

export const ProfileStyle = styled.ul`

display: grid;
grid-column-gap: 15px;
grid-row-gap: 15px;

margin-left:auto;
margin-right:auto;

padding-left:15px;
padding-right:15px;

@media(min-width:768px){
grid-template-columns: repeat(2, 1fr);
}
@media(min-width:1200px){
grid-template-columns: repeat(3, 1fr);

}



`
export const ProfileData = styled.div`
display:flex;
justify-content:center;
flex-direction: column;
`
export const ProfileName = styled.p`
margin-left:auto;
margin-right:auto;
margin-bottom:10px;

font-size: 24px;
  font-weight: bold;

`
export const ProfileContact = styled.p`
margin-left:auto;
margin-right:auto;
margin-bottom: 10px;

  font-size: 20px;
  font-weight: normal;
`
export const ProfileStats = styled.li`
display:flex;
justify-content:center;
align-items:center;

margin-bottom:10px;
`
export const ProfileStatsLabel = styled.span`
margin-right: 20px;
font-size: 16px;
`
export const ProfileStatsQuantity = styled.span`
font-size: 16px;

`

export const ProfileImage = styled.img`
display:flex;
margin-left:auto;
margin-right:auto;

`
// export const ProfileImageBox = styled.div`
// width:150px;
// border-radius: 15%;
// `
export const ProfileCardColor = styled.div`
padding:15px;
width:360px;
background-color:white;
border-radius: 15%;
&:hover{
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06), 1px 4px 6px rgba(0, 0, 0, 0.16);
}
`