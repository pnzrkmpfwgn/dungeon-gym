import {createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle`

    html,body{
        margin:0;
        padding:0;
      
    }
    *,*::after,*::before{
        box-sizing:border-box;
    }
    body{
        
        background:#666666;
        color:#EFFFFA;
        height:100vh; 
    }
   
    .flag{
        position:absolute;
        top:0;
        right:0;
        margin:10px;
        z-index:10;
        cursor:pointer;
    }
   
    
`;
