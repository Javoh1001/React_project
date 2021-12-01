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
    margin-bottom:3rem;
    display:flex;
    align-items:center;
    .about_image{
        width:50%;
        .Image_info{
            width:100%;
        }
    }
    .image_left_content{
        margin-top:8rem;
        padding-left:3.5rem;
        width:50%;
        h3{
            color:#38485A;
            font-size:3rem;
            font-weight:400;
            margin-bottom:2rem;
        }
        p{
            color:#000;
            margin-bottom:2rem;
            display:flex;
            align-items:center;
            font-size:2rem;
            font-weight:300;
        }
    }
`

export const AboutSecondContent = styled.div`
    display:flex;
    .AboutBlogsLeft{
        margin-top:2rem;
        width:50%;
        p{
            font-size:1.8rem;
            // line-height:2.8rem;
            margin-bottom:2rem;
        }
        h3{
            font-size:3rem;
            margin:2rem 0;
        }
    }
    .AboutBlogsRight{
       
        width:50%;
        
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
        h5{
            font-size:2.4rem;
            font-weight:400;
            margin-top:2rem;
        }
        .box0{
            width:50%;
            height:13rem;
            background-color:#C4C4C4;
        }
        .bottom_left{
            width:50%;
            display:flex;
            flex-direction:column;
            // align-items:center;
            p{
                width:100%;
                height:4rem;
                background-color:#C4C4C4;
                display:flex;
                align-items:center;
                font-size:2.4rem;
            }
            span{
                font-size:2.4rem;
                color:#000;
                display:flex;
                padding-left:5rem;
            }
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