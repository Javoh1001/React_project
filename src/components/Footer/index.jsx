import React from 'react';
import {Link} from 'react-router-dom';
import {FooterMenu,FooterContainer,List,FooterBottomLogo} from './FooterStyle';
import Youtube from './Images/youtube 1.svg';
import Facebook from './Images/facebook 1.svg';
import Instagram from './Images/instagram 1.svg';
import FooterLogo from './Images/LogoFooter.svg';
import FooterVector from './Images/footerVektor.svg';
import BottomLogo  from './Images/bottomLogo.svg';

const Footer = () => {
    return (
        <>
            <FooterMenu>
               <FooterContainer>
                    <List>
                       <ul className="first_list">
                            <li><p>Liên hệ</p></li>
                            <li><Link to="/" className="uppercase">Công ty Cổ Phần công nghệ ECRM.VN</Link></li>
                            <li><Link to="/">Văn phòng: 33 Nguyễn Trãi, P. Khương Trung Q. Thanh Xuân, Tp Hà Nội</Link></li>
                            <li><Link to="/">Hotline: 0932.343.678</Link></li>
                            <li><Link to="/">Email: Cskh@nobita.pro</Link></li>
                            <li><Link to="/">MST: 0109081825 </Link></li>
                            <li><Link to="/">Ngày cấp: 10/02/2020</Link></li>
                            <li><Link to="/">Nơi cấp: Sở kế hoạch và đầu tư TP Hà Nội </Link></li> 
                        </ul> 
                        <ul>
                            <li><p>Công ty</p></li>
                            <li><Link to="/"> Giới thiệu </Link></li>
                            <li><Link to="/">Khách hàng </Link></li>
                            <li><Link to="/">Điều khoản</Link></li>
                            <li><Link to="/">Privacy Policy</Link></li>
                            <li><Link to="/">Tuyển dụng</Link></li>
                            <li><Link to="/">Hướng dẫn sử dụng</Link></li>
                        </ul> 
                        <ul>
                            <li><p>Sản phẩm</p></li>
                            <li><Link to="/"> Nobi Marketing </Link></li>
                            <li><Link to="/">Nobi Sales </Link></li>
                            <li><Link to="/">Nobi Pos</Link></li>
                            <li><Link to="/">Nobi Chat</Link></li>
                            <li><Link to="/">Nobi San</Link></li>
                            <li><Link to="/">Nobi Automation</Link></li>
                            <li><Link to="/">Hướng dẫn sử dụng</Link></li>
                        </ul> 
                        <ul>
                            <li><p>Liên kết</p></li>
                            <li><Link to="/"> Tin tức & Sự kiện </Link></li>
                            <li><Link to="/">Blog </Link></li>
                            <li><Link to="/">Fanpage</Link></li>
                            <li><Link to="/">Group</Link></li>
                            <li><Link to="/">Youtube</Link></li>
                            <li className="social-media">
                                <Link to="/"><img src={Youtube} alt="" /></Link>
                                <Link to="/"><img src={Facebook} alt="" /></Link>
                                <Link to="/"><img src={Instagram} alt="" /></Link>
                            </li>
                        </ul> 
                    </List>
                    <div className="footer_logo">
                        <img src={FooterLogo} alt="FooterLogo" />
                    </div>
                    <FooterBottomLogo>
                        <div className="bottom_logo">
                            <img src={BottomLogo } alt="bottomLogo" />
                           <div className="language">
                                <p>Copyright ©2021 Nobita</p>
                                <span>Tiếng Việt <img src={FooterVector} alt="footervector" /></span>
                           </div>
                        </div>
                    </FooterBottomLogo>
               </FooterContainer>
            </FooterMenu>
        </>
    )
}

export default Footer;
