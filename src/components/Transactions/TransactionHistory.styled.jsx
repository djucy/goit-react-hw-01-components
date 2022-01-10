import styled from '@emotion/styled';


export const TransactionTableTitle = styled.th`
padding:15px;

font-size:16px;
font-weight:bold;

background-color:${({ eventType }) => {
        switch (eventType) {
            case 'type':
                return 'lightgreen';
            case 'amount':
                return 'lightcoral';
            case 'currency':
                return 'palegoldenrod';
        }
    }
    }
`;
export const TransactionTableValue = styled.td`
padding:15px;

font-size:16px;
background-color:${({ eventType }) => {
   switch (eventType) {
            case 'type':
                return 'lightgreen';
            case 'amount':
                return 'lightcoral';
            case 'currency':
                return 'palegoldenrod';
        } 


}

}



`