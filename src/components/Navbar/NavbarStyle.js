import styled from 'styled-components';

export const Container = styled.div`
    padding:0 calc((100vw - 1300px) / 2);
    background-color:#E5E5E5;
`
export const HeaderNavMenu = styled.div`
    padding:1rem;
`
export const HeaderTop = styled.div`
    display:flex;
    justify-content:space-between;
    flex-flow:row wrap;
    font-size:1.6rem;
    .language{
        display:flex;
        .languageIcon{
            margin-right:.6rem;
        }
        p{
            margin-left:4rem;
        }
        .user{
            margin-right:1rem;
        }
    }
    .searchMenu{
        display:flex;
        .search{
            padding-right:7rem;
        }
        .text1{
            padding-right:5rem;
        }
    }
`
export const Select = styled.select`
    border:none;
    background-color:transparent;
    outline:none;
    cursor:pointer;
`

export const HeaderLogoMenu = styled.div`
    display:flex;
    align-items:center;
    flex-flow:row wrap;
    padding-top:5rem;
    .logo{
        img{
            margin-right:13rem;
        }
    }
    ul{
        display:flex;
        list-style:none;
        li{
            margin-left:8rem;
            a{
                text-decoration:none;
                font-size:2.2rem;
            }
        }
    }
    button{
        margin-left:auto;
        display:inline-block;
        border:none;
        width:21.5rem;
        height:4rem;
        background-color:#EF7857;
        border-radius:3.5rem;
        cursor:pointer;
    }
`