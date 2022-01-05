import styled from '@emotion/styled';


export const StatisticsItem = styled.li`
display:flex;

${'' /* grid-template-columns:2fr; */}

`;

export const StatisticsTitle = styled.h2`
margin-left:auto;
margin-right:auto;
${'' /* margin-bottom:10px; */}

font-size: 24px;
  font-weight: bold;

`;
export const LabelStatistics = styled.span`
display:flex;
justify-content:center;
width:100px;
padding:15px;
font-size: 20px;
  font-weight: bold;
  background-color: lightgreen;
`;

export const StatisticsPercentage = styled.span`
display:flex;
justify-content:center;
width:100px;
${'' /* grid-template-columns:1; */}
padding:15px;
font-size: 20px;
  font-weight: bold;
  background-color:lightpink;
`;
