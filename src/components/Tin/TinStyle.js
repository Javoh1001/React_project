import styled from 'styled-components';

export const TinTopContent = styled.div`
    background-color:#E5E5E5;
`
export const TinTopContainer = styled.div`
    display:flex;
    padding:5rem calc((100vw - 1300px) / 2);

    .tin_images{
        width:50%;
        img{
            width:100%;
            border-top-left-radius:2rem;
        }
        .tin_image_text{
            padding-left:2rem;
            h3{
                font-size:2rem;
                color:#343434;
                font-weight:700;
                margin:1rem 0;
            }
            p{
                font-size:1.8rem;
                font-weight:300;
            }
        }
       
    }
    .tin_blogs{
        padding-left:4rem;
        width:50%;
        h3{
            font-size:3rem;
            font-wegiht:700;
            color:#38485A;
            padding-left:5rem;
            margin-bottom:3rem;
        }
        .tin_blogs_text{
            margin-bottom:2rem;
            display:flex;
            width:100%;
            img{
               width:10%;
            }
            p{
                font-size:1.8rem;
                margin-left:calc(90% - 85%);
                background-color:#F5F5F5;
                border-radius:2rem;
                width:85%;
            }
        }
       
    }
    .TinNavbar{
        height:9rem;
        width:100%;
        margin-top:3.4rem;
        ul{
            list-style:none;
            display:flex;
            li{
                padding-right:5rem;
                a{
                    font-size:2rem;
                    color:#000;
                    text-decoration:none;
                }
                a.active{
                    color:#EF7857;
                }
            }
        }
    }
`
export const TinImagesSection = styled.div`

`
export const TinImagesContainer = styled.div`
    padding:4rem calc((100vw - 1300px) / 2);
    .tin_images_blog{
        display:flex;

        .images_content{
            padding:0 2rem;
            margin-bottom:7rem;
            width:33.3%;
            .tin_tak{
                width:100%;
            }
            h4{
                font-size:2.2rem;
                color:#343434;
                font-weight:700;
                margin:3.2rem 0;
            }
            span{
                display:flex;
                align-items:center;
                font-size:1.6rem;
                img{
                    padding-right:1rem;
                }
            }
        }
    }
   
`

export const Button = styled.button`
    display:flex;
    align-items:center;
    justify-content:center;
    border:none;
    width:25rem;
    height:6rem;
    border-radius:5rem;
    background-color:#EF7857;
    cursor:pointer;
    margin:0 auto;
    color:#fff;
    font-size:2rem;
    font-weight:700;
`