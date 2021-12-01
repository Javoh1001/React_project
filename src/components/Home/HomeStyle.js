import styled from 'styled-components';

export const HomeWrapper = styled.div`

`
export const HomeTop = styled.div`
    background-color:#E5E5E5;
`
export const HomePage =styled.div`
    padding:10.5rem calc((100vw - 1300px) / 2);
    
`
export const TopHome = styled.div`
    display:flex;
    flex-wrap:wrap;
    align-items:center;
`
export const HomeTitle =styled.div`
    width:50%;
    h2{
        font-size:4.8rem;
        color:#38485A;
        font-weight:normal;
        margin-bottom:2.5rem;
    }
    p{
        color:#000;
        font-size:1.8rem;
        font-weight:300;
        margin-bottom:3rem;
        padding-right:2rem;
    }
`
export const Button = styled.button`
    margin-left:auto;
    display:inline-block;
    border:none;
    width:21.5rem;
    height:4rem;
    background-color:#EF7857;
    border-radius:3.5rem;
    cursor:pointer;
`
export const HomeImg = styled.div`
    width:50%;
    background-color:#C4C4C4;
    padding:0 20px;
    padding-top:3rem;
    padding-bottom:1.4rem;
    
    .locate{
        margin:0 auto;
        img{
            width:100%;
            border-radius:2.8rem;
        }
        p{
            font-size:2.4rem;
            color:#000;
            font-weight:700;
            margin-bottom:6rem;
            margin-top:1.5rem;
        }
        .carousel{
            display:flex;
            justify-content:center;
            span{
                width:1.3rem;
                height:1.3rem;
                border-radius:50%;
                display:flex;
                background-color:#38485A;
                cursor:pointer;
                margin:0 .5rem;
            }
            span.active{
                background-color:#EF7857;
            }
        }
       
    }
   
`
export const HomeLogo = styled.div`
    width:78%;      
    margin:0 auto;
    padding-top:11.5rem;
`
export const Images1 = styled.div`
    display:flex;
    justify-content:space-around;
    align-items:center;
    img{
        width:100%;
        padding:0 2rem;
    }
  
`

export const HomeAgancy = styled.div`
    width:78%;
    margin:0 auto;
    margin-top:10rem;
    h3{
        font-size:4.2rem;
        text-align:center;
        color:#38485A;
        margin-bottom:5rem;
    }
    .images{
        display:flex;
        align-items:center;
        // justify-content:center;
        .carousel{
            display:flex;
        }
        div{
            width:10rem
            height:10rem;
            margin:2rem 5rem;
            
            p{
                text-align:center;
                font-size:2.4rem;
                color:#38485A;
                font-weight:700;
                margin-top:1rem;
            }
            p.active{
                color:#EF7857;
            }
            
            span{
                width:1.3rem;
                height:1.3rem;
                border-radius:50%;
                display:flex;
                background-color:#38485A;
                cursor:pointer;
                margin:0 .5rem;
            }
            span.active{
                background-color:#EF7857;
            }
            
        }
    }
`
export const HomeLadipage = styled.div`
    padding:8rem calc((100vw - 1300px) / 2);
    background-color:#F5F5F5;
    position:relative;
    .circle_1{
        display:flex;
        width:19.5rem;
        height:19.5rem;
        border-radius:50%;
        background:linear-gradient(#F5F5F5 ,rgba(0,0,0,0.05));
        position:absolute;
        z-index:100;
        left:4rem;
        top:25rem;
    }
    .circle_2{
        display:flex;
        width:8rem;
        height:8rem;
        border-radius:50%;
        background:linear-gradient(#F5F5F5 ,rgba(0,0,0,0.05));
        position:absolute;
        z-index:100;
        left:4rem;
        top:13rem;
    }
    .circle_3{
        display:flex;
        width:19.5rem;
        height:19.5rem;
        border-radius:50%;
        background:linear-gradient(#F5F5F5 ,rgba(0,0,0,0.05));
        position:absolute;
        z-index:100;
        right:8rem;
        top:3rem;
    }
    .carousel{
        display:flex;
        justify-content:center;
       span{
        width:1.3rem;
        height:1.3rem;
        background-color:#000;
        border-radius:50%;
        margin:0 .6rem;
        cursor:pointer;
       }
       .active{
        background-color:#EF7857;
        }
    }
`
export const LadipageMenu = styled.div`
    display:flex;
    justify-content:center;
   
`
export const LadipageImage = styled.div`
    z-index:101;
`
export const LadiPageContent = styled.div`
    padding-left:2.2rem;
    margin-bottom:8rem;
    h2{
        font-size:36px;
        font-weight:700;
        margin:2rem 0;
        color:#000;
    }
    p{
        font-size:1.8rem;
        color:#000;
    }
    span{
        color:#343434;
        font-size:1.8rem;
        img{
            margin-left:.8rem;
        }
    }
`
export const HomeBottom = styled.div`
    background-color:#E5E5E5;
    padding:8rem calc((100vw - 1300px) / 2);
`
export const HomeSides = styled.div`
    display:flex;
    align-items:center;
    width:85%;
    margin:0 auto;
`
export const HomeLeftSide = styled.div`
    width:50%;
`
export const HomeRightSide = styled.div`
    width:50%;
    padding-left:12rem;
    h2{
        font-size:4.8rem;
        margin-bottom:2.5rem;
        color:#38485A;
    }
    p{
        font-size:1.8rem;
        margin-bottom:3.5rem;
        color:#000;
    }
`
