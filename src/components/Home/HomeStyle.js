import styled from 'styled-components';

export const HomePage =styled.div`
    padding:10.5rem 0;
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
