import React from 'react'
import {
    AboutSection,
    AboutBlog,
    AboutContainer,
    AboutSecondNav,
    AboutContent,
    AboutFirstContent,
    AboutSecondContent,
    AboutBottomText,
    AboutLastText,
    Button
} from './AboutStyle';

import AboutImage from './images/aboutImage.svg'
import ArrowAbout from './images/arrowAbout.svg'

import {Link} from 'react-router-dom';

const About = () => {
    return (
        <>
            <AboutSection>
                <AboutBlog>
                    <h2>NOBITA BLOG</h2>
                    <p>Chia sẻ kinh nghiệm bán hàng đa kênh và tăng trưởng doanh thu thiết thực nhất</p>
                </AboutBlog>
                <AboutSecondNav>
                        <ul>
                            <li><Link to="/about" className="active">Blog</Link></li>
                            <li><Link to="/aboutblog1">Bắt đầu kinh doanh</Link></li>
                            <li><Link to="/aboutblog2">Các kênh bán hàng đa kênh</Link></li>
                            <li><Link to="/Quản lý bán hàng">Quản lý bán hàng</Link></li>
                        </ul>
                    </AboutSecondNav>
                <AboutContainer>
                  
                    <AboutContent>
                        <AboutFirstContent>
                            <div className="about_image">
                                <img src={AboutImage} alt="AboutImage" className="Image_info" />
                                <p>Bắt đầu kinh doanh / 3/11/2021 / Lượt xem: ...</p>
                                <h3>Mâu thuẫn giữa phát triển sàn TMĐT và các kênh bán khác</h3>
                                <span>Đọc tiếp <img src={ArrowAbout} alt="arrow" /></span>
                            </div>
                            <div className="image_left_content">
                                <h3>Đọc nhiều nhất</h3>
                                <p>[DỰ ĐOÁN] 6 Xu hướng Facebook Marketing 2020</p>
                                <p>Mâu thuẫn giữa phát triển sàn và Facebook | <br /> Sàn và Offline | Sàn và bán buồn ?</p>
                                <p>Làm Marketing ở Việt Nam có cần bằng Master không?</p>
                            </div>
                        </AboutFirstContent>
                        <AboutSecondContent>
                            <div className="AboutBlogsLeft">
                                <div className="BlogsLeft">
                                    <img src={AboutImage} alt="AboutBlogsImage" className="Image_info" />
                                    <span>Bắt đầu kinh doanh / 3/11/2021 / Lượt xem: ...</span>
                                    <h3>Mâu thuẫn giữa phát triển sàn TMĐT và các kênh bán khác </h3>
                                    <p>Kinh doanh trên các sàn thương mại điện tử ngày càng phát triển...</p>
                                   
                                </div>
                                <div className="BlogsLeft">
                                    <img src={AboutImage} alt="AboutImage" className="Image_info" />
                                    <span>Bắt đầu kinh doanh / 3/11/2021 / Lượt xem: ...</span>
                                    <h3>Mâu thuẫn giữa phát triển sàn TMĐT và các kênh bán khác</h3>
                                    <p>Bắt đầu kinh doanh / 3/11/2021 / Lượt xem: ...</p>
                                   
                                </div>
                                <div className="BlogsLeft">
                                    <img src={AboutImage} alt="AboutBlogsImage" className="Image_info" />
                                    <span>Bắt đầu kinh doanh / 3/11/2021 / Lượt xem: ...</span>
                                    <h3>Mâu thuẫn giữa phát triển sàn TMĐT và các kênh bán khác </h3>
                                    <p>Kinh doanh trên các sàn thương mại điện tử ngày càng phát triển...</p>
                                   
                                </div>
                                <div className="BlogsLeft">
                                    <img src={AboutImage} alt="AboutImage" className="Image_info" />
                                    <span>Bắt đầu kinh doanh / 3/11/2021 / Lượt xem: ...</span>
                                    <h3>Mâu thuẫn giữa phát triển sàn TMĐT và các kênh bán khác</h3>
                                    <p>Bắt đầu kinh doanh / 3/11/2021 / Lượt xem: ...</p>
                                   
                                </div>
                                <div className="BlogsLeft">
                                    <img src={AboutImage} alt="AboutBlogsImage" className="Image_info" />
                                    <span>Bắt đầu kinh doanh / 3/11/2021 / Lượt xem: ...</span>
                                    <h3>Mâu thuẫn giữa phát triển sàn TMĐT và các kênh bán khác </h3>
                                    <p>Kinh doanh trên các sàn thương mại điện tử ngày càng phát triển...</p>
                                   
                                </div>
                                <div className="BlogsLeft">
                                    <img src={AboutImage} alt="AboutImage" className="Image_info" />
                                    <span>Bắt đầu kinh doanh / 3/11/2021 / Lượt xem: ...</span>
                                    <h3>Mâu thuẫn giữa phát triển sàn TMĐT và các kênh bán khác</h3>
                                    <p>Bắt đầu kinh doanh / 3/11/2021 / Lượt xem: ...</p>
                                   
                                </div>
                                <div className="BlogsLeft">
                                    <img src={AboutImage} alt="AboutBlogsImage" className="Image_info" />
                                    <span>Bắt đầu kinh doanh / 3/11/2021 / Lượt xem: ...</span>
                                    <h3>Mâu thuẫn giữa phát triển sàn TMĐT và các kênh bán khác </h3>
                                    <p>Kinh doanh trên các sàn thương mại điện tử ngày càng phát triển...</p>
                                   
                                </div>
                                <div className="BlogsLeft">
                                    <img src={AboutImage} alt="AboutImage" className="Image_info" />
                                    <span>Bắt đầu kinh doanh / 3/11/2021 / Lượt xem: ...</span>
                                    <h3>Mâu thuẫn giữa phát triển sàn TMĐT và các kênh bán khác</h3>
                                    <p>Bắt đầu kinh doanh / 3/11/2021 / Lượt xem: ...</p>
                                   
                                </div>
                            </div>
                            <div className="AboutBlogsRight">
                                <form action="">
                                    <h4>Đăng ký nhận bản tin</h4>
                                    <hr />
                                    <div className="checkbox">
                                        <label htmlFor="marketing">
                                            <input type="checkbox" id="marketing" />&nbsp; Marketing
                                        </label>
                                        <label htmlFor="sale">
                                            <input type="checkbox" id="sale" />&nbsp; Sales
                                        </label>
                                    </div>
                                    <div className="checkbox">
                                        <label htmlFor="marketing2">
                                            <input type="checkbox" id="marketing2" />&nbsp; Marketing
                                        </label>
                                        <label htmlFor="sale2">
                                            <input type="checkbox" id="sale2" />&nbsp; Sales
                                        </label>
                                    </div>
                                    <div className="form_email">
                                        <input type="email" placeholder="Địa chỉ Email" />
                                        <button type="submit">Đăng ký</button>
                                    </div>
                                </form>

                                <div className="box">
                                    <h3>Banner quảng cáo</h3>
                                </div>
                                <div className="box2">
                                    <h3>Bài viết nổi bật</h3>
                                    <ul>
                                        <li>Làm Marketing ở Việt Nam có cần bằng Master không?</li>
                                        <li>Làm Marketing ở Việt Nam có cần bằng Master không?</li>
                                        <li>Làm Marketing ở Việt Nam có cần bằng Master không?</li>
                                        <li>Làm Marketing ở Việt Nam có cần bằng Master không?</li>
                                        <li>Làm Marketing ở Việt Nam có cần bằng Master không?</li>
                                    </ul>
                                </div>
                            </div>
                        </AboutSecondContent>
                       <AboutBottomText>
                            <div className="bottom_content">
                               <div className="bottom_left">
                                <p>(số thứ tự các trang: 1, 2, 3, .... 20)</p>
                                    <span>Note: Hiển thị bài viết theo trình tự thời gian đăng</span>
                               </div>
                                <p className="bottom_right">Note: Khi lướt thanh cuộn <br />    trang xuống mục đăng ký <br /> nhận bản tin và bài đăng cùng <br /> chuyên mục sẽ xuất hiện theo</p>
                            </div>
                       </AboutBottomText>
                       <AboutLastText>
                            <h3>Trải nghiệm nền tảng quản lý bán hàng đa kênh <br /> tốt nhất ngay hôm nay!</h3>
                            <Button>Dùng thử miễn phí</Button>
                       </AboutLastText>
                    </AboutContent>
                </AboutContainer>
            </AboutSection>
        </>
    )
}

export default About
