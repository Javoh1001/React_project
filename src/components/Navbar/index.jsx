import React from 'react';
import { Container,HeaderNavMenu,HeaderTop,Select,HeaderLogoMenu } from './NavbarStyle';
import Language from './Images/languageNav.svg';
import User from './Images/userNav.svg';
import Search from './Images/searchMenu.svg'
import Logo from './Images/logo.svg';
import {Link} from 'react-router-dom';

export const Navbar = () =>{
    return(
        <>
            <Container>
                <HeaderNavMenu>
                    <HeaderTop>
                        <div className="language">
                            <img src={Language} alt="language" className="languageIcon" />
                            <Select>
                                <option value="iếng Việt" selected>iếng Việt</option>
                                <option value="Englisht">English</option>
                                <option value="Russian">Russian</option>
                            </Select>
                            <p><img src={User} alt="user" className="user" />Liên hệ Sale</p>
                        </div>
                        <div className="searchMenu">
                            <img src={Search} alt="search" className="search" />
                            <p className="text1">Đăng nhập</p>
                            <p>Hỗ trợ </p>
                        </div>
                    </HeaderTop>
                    <HeaderLogoMenu>
                        <div className="logo">
                            <img src={Logo} alt="" />
                        </div>
                        <ul>
                            <li><Link to="/">Tính năng</Link></li>
                            <li><Link to="/">Bảng giá</Link></li>
                            <li><Link to="/">Công ty</Link></li>
                            <li><Link to="/">Tài nguyên</Link></li>
                        </ul>
                        <button type="submit">Send</button>
                    </HeaderLogoMenu>
                </HeaderNavMenu>
            </Container>
        </>
    )
}