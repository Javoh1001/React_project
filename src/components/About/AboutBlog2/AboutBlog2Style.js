import styled from 'styled-components'
// import FormImage from './images/form.svg';

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
        .box0{
            padding:2rem;
            width:70%;
            height:55rem;
            background-color:#C4C4C4;
            margin:0 auto;
            border-radius:1rem;
            p{
                font-size:3.6rem;
                color:#000;
                font-weight:normal;
                margin-bottom:2rem;
            }
            ul{
                list-style:none;
                font-size:.5rem;
                padding-left:3rem;
                li{
                    font-size:3rem;
                    color:#000;
                    font-weight:300;
                    margin-bottom:1rem;
                    
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
    h2{
        text-align:center;
        font-size:4rem;
        color:#38485A;
        margin:3rem 0;
    }
    .about_bottom_images{
        margin-top:3rem;
        display:flex;
        .image_card{
            padding:0 2rem;
            .size{  
                background-color:#EF7857;
                border-radius: 20px 20px 0px 0px;
            }
            width:25%;
            
            img{
                width:100%;
            }
            p{
                padding:3rem;
                font-size:2.4rem;
                color:#fff;
                position:relative;
                bottom:4rem;
            }
        }
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