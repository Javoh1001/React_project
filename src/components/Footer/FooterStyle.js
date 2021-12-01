import styled from 'styled-components';

export const FooterMenu = styled.div`
    background-color:#38485A;
`
export const FooterContainer = styled.div`
    padding:10rem calc((100vw - 1300px) / 2);
    padding-bottom:7rem;
    width:85%;
    margin:0 auto;
    .footer_logo{
        margin-top:3rem;
        margin-left:2rem;
    }
`
export const List = styled.div`
    display:flex;
    width:100%;
    justify-content:center;
    ul{
        list-style:none;
        width:22%;
        li{
            line-height:2.4rem;
            p{
                font-size:3rem;
                color:#fff;
                margin-bottom:3.6rem;
                font-weight:700;
            }
            a{
                color:#fff;
                font-size:1.8rem;
                text-decoration:none;
                font-weight:normal
            }
        }
        .uppercase{
            text-transform:uppercase;
        }
        .social-media{
            display:flex;
            img {
                margin:3rem 1rem;
            }
        }
    }
    .first_list{
        width:28%;
        li{
            a{
                font-size:1.6rem;
            }
        }
    }
   
`
export const FooterBottomLogo = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    .language{
        display:flex;
        margin-top:2rem;
        color:#fff;
        p{
            padding-right:2rem;
        }
        span{
            border-left:0.1rem solid #FFFFFF;
            padding-left:2rem;
            cursor:pointer;
        }
        img{
            margin-left:.6rem;
        }
    }
`