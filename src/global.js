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
    background: ${({ theme }) => theme.body};    
    @media(min-width: 1025px){
        border-left: 1px solid ${({ theme }) => theme.secondary};
    }

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
    &:hover{
        transition: background 0.2s ease-in-out;
        background: ${({ theme }) => theme.accent}
    }

}
.hero-bg{
    background: ${({ theme }) => theme.accent} !important;  

}

.toggle-icon-fill {
    fill: ${({ theme }) => theme.primaryText} !important;  
}

.headroom--pinned{


    background: ${({ theme }) => theme.body} !important; 
    border-bottom: 1px solid ${({ theme }) => theme.secondary};
    
}

.about-bg{
    background: ${({ theme }) => theme.accent} !important;  

}

.contact-btn{
   background: ${({ theme }) => theme.primaryText} !important;     
    color: ${({ theme }) => theme.body} !important; 
    
}

.hero-para{
    color: ${({ theme }) => theme.primaryText} !important; 
    font-weight: 500;
}

.colored-text{
    color: ${({ theme }) => theme.primary} !important; 

}


.hero-button{

    color: ${({ theme }) => theme.body} !important; 
    background: ${({ theme }) => theme.primaryText} !important; 
    &:hover{
        transition: all 0.2s ease-in-out;
        background: ${({ theme }) => theme.primary} !important; 
        color: ${({ theme }) => theme.body} !important; 

    }
} 

.mobile-nav-button{

    color: ${({ theme }) => theme.primaryText} !important; 
    background: ${({ theme }) => theme.secondary} !important; 
}

.desktop-menu{
    background: ${({ theme }) => theme.body} !important; 
    border: 1px solid ${({ theme }) => theme.secondary};
    box-shadow: 0px 13px 52px 1px rgba(0, 0, 0, 0.05);
}


    
}
.menu-title{
    color: ${({ theme }) => theme.primaryText} !important; 

}

.menu-subtitle{
    color: ${({ theme }) => theme.secondaryText} !important;    

}

.desktop-menu-item:hover > .menu-title{
        color: ${({ theme }) => theme.primary} !important; 

}

.desktop-menu-item:hover > .menu-subitle{
        color: ${({ theme }) => theme.primary} !important; 

}

.divider{
    background: ${({ theme }) => theme.body}; 
}

.background-skew{

    background: ${({ theme }) => theme.primaryText}; 

}

.skills-card{
    /* border: 1px solid ${({ theme }) => theme.body}; */
}

.svg-switch{
    fill: ${({ theme }) => theme.primary};
}

.svg-switch-two{
    fill: ${({ theme }) => theme.body};
}

.nav-buttons:hover > svg{

       fill:  ${({ theme }) => theme.primary}
}
a:hover{
        color: ${({ theme }) => theme.primary} !important; 
    
}

.nav-item:hover{
    color: ${({ theme }) => theme.primary} !important; 
}



.arrow:hover{
    fill: ${({ theme }) => theme.primary} !important; 
}

.case-link:hover{
        color: ${({ theme }) => theme.primary} !important; 
    
}

.hero-button{
    animation: 1s in ease-in-out;
}

.hero-button:hover{
    animation: 1s out ease-in-out;
}

.external-link-text{
    color: ${({ theme }) => theme.secondaryText}; 
    

}
.slash-button{
    background-color: ${({ theme }) => theme.fourth};
    color: ${({ theme }) => theme.primaryText};
}

.slash{
    background: ${({ theme }) => theme.slash} !important;
    color: ${({ theme }) => theme.primary}
}


a {
    text-decoration: none;
}

.external-icon{
  fill: ${({ theme }) => theme.primaryText};
}

.external-link:focus{
    border: 1px solid ${({ theme }) => theme.toggleBorder};
    outline: none;
}

.external-link{
    background: ${({ theme }) => theme.secondary}; 

  }
  
  .contact-mobile{
      background: ${({ theme }) => theme.fourth};
      box-shadow: 0px -15px 55px ${({ theme }) => theme.fourth};
      border: 1px solid ${({ theme }) => theme.toggleBorder}
  }

  .contact-mobile-animated {
      animation: mobile-contact 0.5s forwards;
      background: ${({ theme }) => theme.fourth};
      box-shadow: 0px -15px 55px ${({ theme }) => theme.fourth};
      border: 1px solid ${({ theme }) => theme.toggleBorder}
  }

  .mobile-pull{
      background: ${({ theme }) => theme.puller};

  }

  @keyframes mobile-contact {
  0%   { bottom: -400px; }
  100% { bottom: 0px; }
}

  
@keyframes in {
    from {
         color: ${({ theme }) => theme.body} !important; 
    background: ${({ theme }) => theme.primaryText} !important; 
    }

    to{
        background: ${({ theme }) => theme.primary} !important; 
        color: ${({ theme }) => theme.body} !important; 
     }
} ;

@keyframes out {
    from {
         background: ${({ theme }) => theme.primary} !important; 
        color: ${({ theme }) => theme.body} !important; 
         
    }

    to{
       color: ${({ theme }) => theme.body} !important; 
    background: ${({ theme }) => theme.primaryText} !important; 
     }
} ;

.submit-btn{
    color: ${({ theme }) => theme.flipped} !important;
    background: ${({ theme }) => theme.primaryText}
}

.contact-input{
    background: ${({ theme }) => theme.secondary};
    color: ${({ theme }) => theme.primaryText};
    outline: none !important;
    border: 1px solid ${({ theme }) => theme.toggleBorder}
}

.contact-close{
    fill: ${({ theme }) => theme.primaryText}
}

.case-nav{
    background: ${({ theme }) => theme.secondary};
    color: ${({ theme }) => theme.primaryText};
}

.case-arrow{
    fill: ${({ theme }) => theme.primaryText}
}

.case-toggle{
    background: ${({ theme }) => theme.body}
}

input,textarea{
    color: ${({ theme }) => theme.primaryText};
    font-weight: 600;
}


`;
