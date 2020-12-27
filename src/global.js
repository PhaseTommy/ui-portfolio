import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    *,
    *::after,
    *::before {
        box-sizing: border-box;
    }

    html{
        background: ${({ theme }) => theme.body};    

    }

    .nav-item{
        color: ${({ theme }) => theme.primaryText};    

    }
.toggle{
        background: ${({ theme }) => theme.secondary};    

}

.mobile-nav{
    background: ${({ theme }) => theme.tertiary};    

}

.divider{
    background: ${({ theme }) => theme.secondary}; 
}

.line{
    background: ${({ theme }) => theme.secondary}; 
}

.hero-title{
    color: ${({ theme }) => theme.primaryText};    
}

.small-title{
    background: ${({ theme }) => theme.secondary}; 

}

.diabetes{
   

}

.title{
    color: ${({ theme }) => theme.primaryText};    

}
.info-title{
    color: ${({ theme }) => theme.primaryText};    

}

.diabetes-info{
    background: ${({ theme }) => theme.secondary}; 

}

.icon{
    background: ${({ theme }) => theme.body}; 


}

.info-text{
    color: ${({ theme }) => theme.secondaryText};    

}

.info-wrap{
    background: ${({ theme }) => theme.secondary}; 
}

.button-text{
    color: ${({ theme }) => theme.body} !important;    

}

.case-title{
    color: ${({ theme }) => theme.primaryText} !important;    

}

.case-subtitle{
    color: ${({ theme }) => theme.secondaryText} !important;    

}

.quote{
    background: ${({ theme }) => theme.secondary} !important;  
}

.paragraph{
    color: ${({ theme }) => theme.primaryText} !important;    

}

.tags{
    background: ${({ theme }) => theme.secondary} !important;  

}
.hero-bg{
    background: ${({ theme }) => theme.accent} !important;  

}

`;
