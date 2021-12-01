import React from 'react';
import TinImage from './images/TinImage.svg';
import TinBlogs from './images/Tinblogs.svg';
import TinTank from './images/TinTank.svg';
import ZIcon from './images/zIcon.svg';
import {TinTopContent,TinTopContainer,TinImagesSection,TinImagesContainer,Button} from './TinStyle';
import {Link} from 'react-router-dom';

const Tin = () => {
    return (
        <>
            <TinTopContent>
               <TinTopContainer>
                    <div className="tin_images">
                        <img src={TinImage} alt="TinImage" />
                        <div className="tin_image_text">
                            <h3>Giải quyết được "Nỗi đau" vận hành của nhà kinh doanh <br /> online, startup Nobita.pro khiến Shark Phú và Shark Bình <br /> cạnh tranh gay gắt</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim <br /> ultricies egestas felis vel, aenean volutpat suscipit. Facilisis ut <br /> morbi fringilla est, in ac. Vulputate et sem ultrices quam ut <br /> blandit...</p>
                        </div>
                    </div>
                    <div className="tin_blogs">
                        <h3>Tin nổi bật</h3>
                        <div className="tin_blogs_text">
                            <img src={TinBlogs} alt="tinblogs" />
                            <p>[DỰ ĐOÁN] 6 Xu hướng Facebook <br /> Marketing 2020</p>
                        </div>
                        <div className="tin_blogs_text">
                            <img src={TinBlogs} alt="tinblogs" />
                            <p>[DỰ ĐOÁN] 6 Xu hướng Facebook <br /> Marketing 2020</p>
                        </div>
                        <div className="tin_blogs_text">
                            <img src={TinBlogs} alt="tinblogs" />
                            <p>[DỰ ĐOÁN] 6 Xu hướng Facebook <br /> Marketing 2020</p>
                        </div>
                        <div className="tin_blogs_text">
                            <img src={TinBlogs} alt="tinblogs" />
                            <p>[DỰ ĐOÁN] 6 Xu hướng Facebook <br /> Marketing 2020</p>
                        </div>
                        <div className="tin_blogs_text">
                            <img src={TinBlogs} alt="tinblogs" />
                            <p>[DỰ ĐOÁN] 6 Xu hướng Facebook <br /> Marketing 2020</p>
                        </div>
                        <div className="tin_blogs_text">
                            <img src={TinBlogs} alt="tinblogs" />
                            <p>[DỰ ĐOÁN] 6 Xu hướng Facebook <br /> Marketing 2020</p>
                        </div>
                    </div>
                    <div className="TinNavbar">
                        <ul>
                            <li><Link to="/" className="active">Tin tức Nobita</Link></li>
                            <li><Link to="/">Báo chí nói về Nobita</Link></li>
                        </ul>
                    </div>
               </TinTopContainer>
            </TinTopContent>
            <TinImagesSection>
                <TinImagesContainer>
                    <div className="tin_images_blog">
                        <div className="images_content">
                            <img src={TinTank} alt="TinTank" className="tin_tak" />
                            <h4>Giải quyết được "Nỗi đau" vận hành <br /> của nhà kinh doanh online, startup <br /> Nobita.pro khiến Shark <br /> Phú và Shark Bình cạnh tranh gay gắt</h4>
                            <span><img src={ZIcon} alt="" /> Zing News</span>
                        </div>
                        <div className="images_content">
                            <img src={TinTank} alt="TinTank" className="tin_tak" />
                            <h4>Giải quyết được "Nỗi đau" vận hành <br /> của nhà kinh doanh online, startup <br /> Nobita.pro khiến Shark <br /> Phú và Shark Bình cạnh tranh gay gắt</h4>
                            <span><img src={ZIcon} alt="" /> Zing News</span>
                        </div>
                        <div className="images_content">
                            <img src={TinTank} alt="TinTank" className="tin_tak" />
                            <h4>Giải quyết được "Nỗi đau" vận hành <br /> của nhà kinh doanh online, startup <br /> Nobita.pro khiến Shark <br /> Phú và Shark Bình cạnh tranh gay gắt</h4>
                            <span><img src={ZIcon} alt="" /> Zing News</span>
                        </div>
                        <div className="images_content">
                            <img src={TinTank} alt="TinTank" className="tin_tak" />
                            <h4>Giải quyết được "Nỗi đau" vận hành <br /> của nhà kinh doanh online, startup <br /> Nobita.pro khiến Shark <br /> Phú và Shark Bình cạnh tranh gay gắt</h4>
                            <span><img src={ZIcon} alt="" /> Zing News</span>
                        </div>
                        <div className="images_content">
                            <img src={TinTank} alt="TinTank" className="tin_tak" />
                            <h4>Giải quyết được "Nỗi đau" vận hành <br /> của nhà kinh doanh online, startup <br /> Nobita.pro khiến Shark <br /> Phú và Shark Bình cạnh tranh gay gắt</h4>
                            <span><img src={ZIcon} alt="" /> Zing News</span>
                        </div>
                        <div className="images_content">
                            <img src={TinTank} alt="TinTank" className="tin_tak" />
                            <h4>Giải quyết được "Nỗi đau" vận hành <br /> của nhà kinh doanh online, startup <br /> Nobita.pro khiến Shark <br /> Phú và Shark Bình cạnh tranh gay gắt</h4>
                            <span><img src={ZIcon} alt="" /> Zing News</span>
                        </div>
                        <div className="images_content">
                            <img src={TinTank} alt="TinTank" className="tin_tak" />
                            <h4>Giải quyết được "Nỗi đau" vận hành <br /> của nhà kinh doanh online, startup <br /> Nobita.pro khiến Shark <br /> Phú và Shark Bình cạnh tranh gay gắt</h4>
                            <span><img src={ZIcon} alt="" /> Zing News</span>
                        </div>
                        <div className="images_content">
                            <img src={TinTank} alt="TinTank" className="tin_tak" />
                            <h4>Giải quyết được "Nỗi đau" vận hành <br /> của nhà kinh doanh online, startup <br /> Nobita.pro khiến Shark <br /> Phú và Shark Bình cạnh tranh gay gắt</h4>
                            <span><img src={ZIcon} alt="" /> Zing News</span>
                        </div>
                        <div className="images_content">
                            <img src={TinTank} alt="TinTank" className="tin_tak" />
                            <h4>Giải quyết được "Nỗi đau" vận hành <br /> của nhà kinh doanh online, startup <br /> Nobita.pro khiến Shark <br /> Phú và Shark Bình cạnh tranh gay gắt</h4>
                            <span><img src={ZIcon} alt="" /> Zing News</span>
                        </div>
                    </div>

                    <Button>Xem thêm </Button>
                </TinImagesContainer>
            </TinImagesSection>
        </>
    )
}

export default Tin
