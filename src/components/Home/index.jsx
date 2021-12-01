import React from 'react';
import {
    HomeWrapper,
    HomeTop,
    HomePage,
    TopHome,
    HomeTitle,
    Button,
    HomeImg,
    HomeLogo,
    Images1,
    HomeAgancy,
    HomeLadipage,
    LadipageMenu,
    LadipageImage,
    LadiPageContent,
    HomeBottom,
    HomeSides,
    HomeLeftSide,
    HomeRightSide,

} from './HomeStyle';

import HomeImages from './Images/HomeImg.svg';
import Sunhouse from './Images/sunhouse.svg';
import Ladipage from './Images/ladipage.svg';
import Adidas from './Images/adidas.svg';
import Saffron from './Images/saffron.svg';
import MrSimple from './Images/mrsimple.svg';
import LogoMible from './Images/logo_mobile.svg';
import Kangaro from './Images/kangaroo.svg';
import Crazyteen from './Images/crazyteen.svg';

// home Agancy images
import Image1 from './Images/image 2.1.svg';
import Image2 from './Images/image 2.2.svg';
import Image3 from './Images/image 2.3.svg';
import Image4 from './Images/image 2.4.svg';
import Image5 from './Images/image 2.5.svg';
import Image6 from './Images/image 2.6.svg';
import Image7 from './Images/image 2.7.svg';
import Image8 from './Images/image 2.8.svg';
import Image9 from './Images/image 2.9.svg';

import Ladipage2 from './Images/ladipage2.svg';
import ArrowRight from './Images/arrowRight.svg';
 
// home bottom images
import Frame from './Images/Frame.svg';

export const Home = () =>{
    return(
        <>
            <HomeWrapper>
            <HomeTop>
            <HomePage>
               <TopHome>
                <HomeTitle>
                        <h2> Trải nghiệm khách hàng <br/>5 sao cùng với Nobita </h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est, ac purus sed morbi vel ipsum, nunc in eu. Ac felis nisl volutpat nunc in sit. Amet suspendisse in amet, et, sagittis, nulla consequat elementum maecenas. Purus lorem morbi pharetra, nibh. Ornare dui venenatis, convallis imperdiet. Commodo ut lectus mattis mi fringilla magnis ac vulputate. Sit urna volutpat quis vestibulum arcu sit. Morbi a, id massa dignissim et interdum. Massa tellus etiam cursus diam orci odio mi</p>
                        <Button type="submit">
                            Khám phá câu chuyện của họ
                        </Button>
                    </HomeTitle>
                    <HomeImg>
                        <div className="locate">
                            <img src={HomeImages} alt="Home" />
                            <p>CEO ... - Founder cty </p>
                            <div className="carousel">
                                <span className="active"></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </HomeImg>
               </TopHome>
                <HomeLogo>
                    <Images1>
                        <div>
                            <img src={Sunhouse} alt="" />
                        </div>
                        <div>
                            <img src={Ladipage} alt="Ladipage" />
                        </div>
                        <div>
                            <img src={Adidas} alt="Adidas" />
                        </div>
                        <div>
                            <img src={Saffron} alt="Saffron" />
                        </div>
                        
                       <div>
                        <img src={MrSimple} alt="MrSimple" />
                       </div>
                        
                       <div>
                            <img src={LogoMible} alt="LogoMible" />
                       </div>
                        <div>
                            <img src={Kangaro} alt="Kangaro" />
                        </div>
                        <div>
                           <img src={Crazyteen} alt="Crazyteen" />
                        </div>
                    </Images1>
                    {/* <Images2>
                       
                    </Images2> */}
                </HomeLogo>

                <HomeAgancy>
                    <h3>Tìm hiểu thêm về các công ty giống như bạn</h3>
                    <div className="images">
                        <div>
                            <img src={Image1} alt="" />
                            <p>Agency</p>
                        </div>
                        <div>
                            <img src={Image2} alt="" />
                            <p className="active">Agency</p>
                        </div>
                        <div>
                            <img src={Image3} alt="" />
                            <p>Agency</p>
                        </div>
                        <div>
                            <img src={Image4} alt="" />
                            <p>Agency</p>
                        </div>
                        <div>
                            <img src={Image5} alt="" />
                            <p>Agency</p>
                        </div>
                        <div>
                            <img src={Image6} alt="" />
                            <p>Agency</p>
                        </div>
                        <div>
                            <img src={Image7} alt="" />
                            <p>Agency</p>
                        </div>
                        <div>
                            <img src={Image8} alt="" />
                            <p>Agency</p>
                        </div>
                        <div>
                            <img src={Image9} alt="" />
                            <p>Agency</p>
                        </div>
                        <div className="carousel">
                            <span className="active"></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>

                    </div>
                </HomeAgancy>
            </HomePage>
            </HomeTop>
            <HomeLadipage>
                <span className="circle_1"></span>
                <span className="circle_2"></span>
                <span className="circle_3"></span>
                <LadipageMenu>
                    <LadipageImage>
                        <img src={Ladipage2} alt="ladipage" />
                        <LadiPageContent>
                            <h2>Ladipage</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit. Mauris suscipit eget...</p>
                            <span>Đọc tiếp <img src={ArrowRight} alt="arrowRight" /></span>
                        </LadiPageContent>
                    </LadipageImage>
                    <LadipageImage>
                        <img src={Ladipage2} alt="ladipage" />
                        <LadiPageContent>
                            <h2>Ladipage</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit. Mauris suscipit eget...</p>
                            <span>Đọc tiếp <img src={ArrowRight} alt="arrowRight" /></span>
                        </LadiPageContent>
                    </LadipageImage>
                    <LadipageImage>
                        <img src={Ladipage2} alt="ladipage" />
                        <LadiPageContent>
                            <h2>Ladipage</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit. Mauris suscipit eget...</p>
                            <span>Đọc tiếp <img src={ArrowRight} alt="arrowRight" /></span>
                        </LadiPageContent>
                    </LadipageImage>
                    <LadipageImage>
                        <img src={Ladipage2} alt="ladipage" />
                        <LadiPageContent>
                            <h2>Ladipage</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit. Mauris suscipit eget...</p>
                            <span>Đọc tiếp <img src={ArrowRight} alt="arrowRight" /></span>
                        </LadiPageContent>
                    </LadipageImage>
                    <LadipageImage>
                        <img src={Ladipage2} alt="ladipage" />
                        <LadiPageContent>
                            <h2>Ladipage</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit. Mauris suscipit eget...</p>
                            <span>Đọc tiếp <img src={ArrowRight} alt="arrowRight" /></span>
                        </LadiPageContent>
                    </LadipageImage>
                    <LadipageImage>
                        <img src={Ladipage2} alt="ladipage" />
                        <LadiPageContent>
                            <h2>Ladipage</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit. Mauris suscipit eget...</p>
                            <span>Đọc tiếp <img src={ArrowRight} alt="arrowRight" /></span>
                        </LadiPageContent>
                    </LadipageImage>
                    
                </LadipageMenu>
                <div className="carousel">
                    <span className=" active"></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </HomeLadipage>
            <HomeBottom>
                <HomeSides>
                    <HomeLeftSide>
                        <img src={Frame} alt="frame" />
                    </HomeLeftSide>
                    <HomeRightSide>
                        <h2>Đăng ký dùng thử ngay hôm nay</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus nulla risus pellentesque egestas. Netus elementum erat posuere arcu. Augue nam consectetur turpis lobortis porta eget ipsum in.</p>
                        <Button type="submit">
                            Dùng thử miễn phí
                        </Button>
                    </HomeRightSide>
                </HomeSides>
            </HomeBottom>
            </HomeWrapper>
        </>
    )
}