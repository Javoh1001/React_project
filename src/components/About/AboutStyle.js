import styled from 'styled-components'
import FormImage from './images/form.svg';

export const AboutSection = styled.div`

`
export const AboutBlog = styled.div`
    padding:0 3rem;
    background:#C4C4C4;
    height:27rem;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    h2{
        font-size:5.4rem;
        color:#000;
        font-weight:700;
    }
    p{
        font-size:3rem;
        color:#000;
        font-wegiht:700;
    }
`
export const AboutContainer = styled.div`
    padding:0 calc((100vw - 1300px) / 2);
`
export const AboutSecondNav = styled.div`
    box-shadow:0 .3rem .5rem .1rem rgba(0,0,0,.1);
    ul{
        display:flex;
        height:9rem;
        align-items:center;
        list-style:none;
        justify-content:center;
        li{
            padding:0 4rem;
            a{
                font-size:2.2rem;
                color:#000;
                font-weight:700;
                text-decoration:none;
            }
            a.active{
                color:#F07857;
            }
        }
    }
`
export const AboutContent = styled.div`
    padding:5rem 0;
`
export const AboutFirstContent = styled.div`
    display:flex;
    // align-items:center;
    .about_image{
        width:50%;
        .Image_info{
            width:100%;
        }
        p{
            font-size:1.8rem;
            color:#000;
            font-weight:400;
            margin:2.2rem 0;
        }
        h3{
            font-size:3.6rem;
            color:#343434;
            font-weight:700;
        }
        span{
            font-size:1.8rem;
            color:#000;
            font-weight:400;
            margin-top:2rem;
            display:flex;
            margin-left:1rem;
        }
    }
    .image_left_content{
        margin-top:8rem;
        padding-left:3.5rem;
        width:50%;
        h3{
            color:#38485A;
            font-size:3.6rem;
            font-weight:700;
            margin-bottom:2rem;
        }
        p{
            color:#000;
            background-color:#F5F5F5;
            height:5rem;
            border-radius:2rem;
            margin-bottom:2rem;
            display:flex;
            align-items:center;
            font-size:2rem;
            font-weight:300;
            padding:0 2rem;
        }
    }
`

export const AboutSecondContent = styled.div`
    display:flex;
    .AboutBlogsLeft{
        margin-top:2rem;
        width:50%;
        display:flex;
        .Image_info{
            width:100%;
        }
        .BlogsLeft{
            width:50%;
            padding-right:2rem;
            margin-bottom:5rem;
            span{
                font-size:1.4rem;
                color:#000;
                font-weight:300;
                margin:1rem 0;
                display:flex;
            }
            p{
                font-size:1.8rem;
                color:#000;
                font-weight:300;
                margin:1rem 0;
            }
            h3{
                font-size:1.8rem;
                color:#343434;
                font-weight:700;
                margin-bottom:3rem;
            }

        }
    }
    .AboutBlogsRight{
       
        width:50%;
        form{
            background-image:url(${FormImage});
            background-repeat:no-repeat;
            background-position:center;
            background-size:cover;
            position:relative;
            width:100%;
            height:50rem;
            border-radius:1.5rem;
            display:block;
            padding:4rem;
            z-index:200;
            color:#fff;
            ::before{
                content:'';
                position:absolute;
                width:100%;
                height:100%;
                background:rgba(0,0,0,.8);
                left:0;
                top:0;
                z-index:-1;
                border-radius:1.5rem;
            }
            h4{
                font-size:3.6rem;
                font-weight:300;
                color:#fff;
                text-align:center;
                
            }
            hr{
                margin:1.2rem auto 4rem auto;
                border:.1rem solid #fff;
            }
            .checkbox{
                margin-bottom:2rem;
                display:flex;
                align-items:center;
                justify-content:space-between;
                label{
                    font-size:2.4rem;
                    display:flex;
                    cursor:pointer;
                }
                input{
                    width:2.5rem;
                    height:2.5rem;
                    cursor:pointer;
                }
            }
            .form_email{
                display:flex;
                flex-direction:column;
                margin-top:5rem;
                input{
                    height:5rem;
                    border:.1rem solid #fff;
                    outline:none;
                    border-radius:1.5rem;
                    color:#fff;
                    font-size:1.8rem;
                    background:transparent;
                    padding:0 2rem;
                }
                button{
                    border:none;
                    height:5rem;
                    border-radius:1.5rem;
                    margin-top:2rem;
                    font-size:.1.6rem;
                    cursor:pointer;
                }
            }
           
        }

        .box{
            width:55%;
            height:45rem;
            border:.3rem solid #000;
            margin:3rem auto;
            display:flex;
            align-items:center;
            justify-content:center;
            border-radius:1rem;
            h3{
                font-size:4rem;
                color:#000;
                font-weight:400;
            }
        }
        .box2{
            padding:2rem;
            width:70%;
            height:55rem;
            border:.3rem solid #000;
            margin:0 auto;
            border-radius:1rem;
            h3{
                font-size:4rem;
                color:#000;
                font-weight:400;
                margin-bottom:5rem;
            }
            ul{
                font-size:.5rem;
                padding-left:3rem;
                display:flex;
                flex-direction:column;
                align-items:center;
                li{
                    font-size:2rem;
                    color:#000;
                    font-weight:300;
                    margin-bottom:2rem;
                    
                }
            }
        }
    }

`
  
export const AboutBottomText = styled.div`
    .bottom_content{
        display:flex;
    }
    .bottom_left{
        width:50%;
        display:flex;
        flex-direction:column;
        align-items:center;
        p{
            width:46rem;
            height:6rem;
            background-color:#C4C4C4;
            display:flex;
            align-items:center;
            justify-content:center;
            font-size:2.4rem;
        }
        span{
            font-size:2.4rem;
            color:#000;
            margin-top:7rem;
            display:flex;
        }
    }
    .bottom_right{
        width:50%;
        display:flex;
        flex-direction:column;
        align-items:center;
        font-size:2.4rem;
    }
`
export const AboutLastText = styled.div`
    padding:10rem;
    h3{
        font-size:3.8rem;
        color:#38485A;
        font-weight:700;
        text-align:center;
    }
`
export const Button = styled.button`
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:2.2rem;
    color:#fff;
    border:none;
    width:30rem;
    height:5rem;
    border-radius:2rem;
    margin:0 auto;
    margin-top:5rem;
    background-color:#EF7857;
    cursor:pointer;
`