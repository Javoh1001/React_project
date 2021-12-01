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
} from './CongStyle'

import AboutImage from './images/aboutImage.svg'
// import ArrowAbout from './images/arrowAbout.svg'
import AboutBottomImages from './images/about_images.svg';

import {Link} from 'react-router-dom';

const Cong = () => {
    return (
        <>
            <AboutSection>
                <AboutBlog>
                    <h2>NOBITA BLOG</h2>
                    <p>Chia sẻ kinh nghiệm bán hàng đa kênh và tăng trưởng doanh thu thiết thực nhất</p>
                </AboutBlog>
                <AboutSecondNav>
                        <ul>
                            <li><Link to="/about" className="active">Blog {'-->'}   Bán hàng đa kênh {'-->'}  Sàn thương mại điện tử</Link></li>
                            {/* <li><Link to="/aboutblog1">Bắt đầu kinh doanh</Link></li>
                            <li><Link to="/Các kênh bán hàng đa kênh">Các kênh bán hàng đa kênh</Link></li>
                            <li><Link to="/Quản lý bán hàng">Quản lý bán hàng</Link></li> */}
                        </ul>
                    </AboutSecondNav>
                <AboutContainer>
                  
                    <AboutContent>
                        <AboutFirstContent>
                        <div className="image_left_content">
                                <h3>Mâu thuẫn giữa phát <br /> triển sàn TMĐT và các <br /> kênh bán khác</h3>
                                {/* <p>[DỰ ĐOÁN] 6 Xu hướng Facebook Marketing 2020</p>
                                <p>Mâu thuẫn giữa phát triển sàn và Facebook | <br /> Sàn và Offline | Sàn và bán buồn ?</p> */}
                                <p>9 Tháng Bảy, 2021 46 Lượt xem</p>
                            </div>
                            <div className="about_image">
                                <img src={AboutImage} alt="AboutImage" className="Image_info" />
                            </div>
                           
                        </AboutFirstContent>
                        <AboutSecondContent>
                            <div className="AboutBlogsLeft">
                                <p>Hôm trước có 1 hệ thống thời trang hơn 100 cửa hàng có liên hệ với mình nhờ tư vấn nhờ bên mình phát triển kênh TMĐT trên SÀN . Mình bảo chịu không làm đc vì biết chắc sẽ Fail vì hiện CEO cũng chưa hiểu rõ sẽ phát triển như thế nào . Và nửa năm trước mình đã thấy rất nhiều Hệ thống phải đóng cửa tạm dừng kênh TMĐT trên Sàn để quay về với hệ thống bán lẻ cũng như online riêng của họ ! ( Case Kid Plaza)Rất nhiều công ty hiện chỉ nghĩ rằng đơn giản mình đang bán hàng tốt qua facebook , qua các cửa hàng offline, qua các kênh phân phối khác. Vẫn hàng đó thì chỉ bán thêm kênh sàn là cho hàng lên và bán thôi. Tuy nhiên đời không như là mơ. Giữ nguyên giá cũ đang bán ở cửa hàng hoặc bán niêm yết thì ế lòi mắt , rõ ràng gian hàng mall to đẹp hẳn hoi ngày đc 3,4 đơn nhân viên đóng hàng nó </p><br />
                                <p>cũng oải vì chơi nhiều quá. Mà có lần khô máu bán rẻ quảng cáo khắp nơi thì đại lý kêu ủm tỏi báo phá giá. Rồi cuối tháng cộng số lại doanh số giảm lợi nhuận cũng giảm đành đóng gian hàng trên sàn cho nó nhẹ nợ. Đấy chỉ là một trong những ví dụ mà mình đã từng chứng kiến ở công ty bạn mình. Vậy làm sao để xử lý được những mâu thuẫn về giá cũng như làm sao để tối thiểu hóa 2 mô hình kinh doanh khác nhau hòa hợp lẫn nhau.Mô hình kinh doanh trên Sàn TMĐT khác hoàn toàn với mô hình kinh doanh kiểu cũ. Trước đây 4 năm mình cũng đã từng phát triển một doanh nghiệp đa kênh bán lẻ , bán buôn, bán sàn, bán trên facebook, tuy nhiên công ty nhỏ nên sau này chuyển dịch rất nhanh về hoàn toàn tối ưu cho Sàn TMĐT . Shopee/ Tiki / Lazada/ Sendo giúp khách hàng có thể mua hàng ở bất kì thời gian nào và bất kì địa điểm nào. Khách hàng có thể tìm hiểu thông tin , so sánh, lựa chọn cực kì dễ dàng. Do đó việc chính sách giá cần cực kì linh hoạt và luôn cạnh tranh. Nếu trước đây bộ máy cồng kềnh nhiều phòng ban và nhiều chi phí do đó giá sản phẩm nếu áp vào mô hình TMĐT thì sẽ rất dễ gẫy.</p>
                                <h3>SẢN PHẨM LÀ CỐT LÕI</h3>
                                <p>Tmall phát triển ra hệ thống chạy từ việc RD nghiên cứu sản phẩm mới, testing thị trường đến lúc launching tưng bừng trên sàn chỉ mất 6 tháng thậm chí còn ngắn hơn ở một số sản phẩm đơn giản hơn nhiều. Theo thống kê của Alibaba thì doanh số sản phẩm mới chiếm 31% tổng doanh số trên sàn năm 2018 . Một sản phẩm mới có thể chiếm 30% doanh số toàn Shop của bạn. Một số con số thống kê khác chỉ 60% còn tồn tại sau vài tháng sau khi sản phẩm được tung ra) Chỉ 5000 sản phẩm biến thành sản phẩm siêu hot. Giám đốc phát triển sản phẩm Tmall cũng đã tuyên bố sản phẩm mới chính là CHIẾN LƯỢC quan trọng nhất để phát triển trên Sàn TMĐT </p>
                                <p>Vậy tại sao bạn không tạo ra sản phẩm mới dành riêng cho hệ thống sàn, bán trên sàn sẽ không bán ra ngoài hệ thống bán </p>
                                <p>lẻ , bán buôn khác của công ty bạn. Vậy tạo sao bạn không tạo ra một thương hiệu mới dành riêng cho hệ thống trên sàn. Việc làm thương hiệu không còn quá khó và độ nhạy về thương hiệu quyết định đến hành vi mua hàng không còn quá mạnh. Không còn nhiều người sẵn sàng trả một mức chênh lệch lớn cho 2 sản phẩm gần giống nhau khác thương hiệu. Họ sẵn sàng quyết định mua dựa vào đánh giá và trải nghiệm mua của người khác</p>
                                <h3> MẠNG XÃ HỘI LÀ BỆ PHÓNG</h3>
                                <p>Xu hướng phát triển thương hiệu và launching sản phẩm mới qua Mạng xã hội với vũ khí là content marketing. Chi phí thấp và độ phủ cao khiến cho việc bán hàng qua sàn TMĐT rất hiệu quả. Durex là một trong những Case study siêu kinh điển ở Việt Nam nghe đâu sau 2 năm doanh số cũng đạt 400 tỷ trong đó hơn 40% đến từ Shopee tiki lazada </p>
                                <p>( còn đây là ví dụ ở TQ http://tradecircle.vn/communication-case-study-durex-da-ch…/ ) </p>
                                <p>Khi Bắc Kinh ngập chìm trong mưa bão vào năm 2011, trên weibo có chia sẻ “bí quyết” chống ướt cho giày thể thao bằng BCS Durex cực kỳ hiệu quả. </p>
                                <p>Bức ảnh trên nhanh chóng gây sốt với 45.000 lượt chia sẻ và 7.000 lượt bình luận, đưa thương hiệu Durex đến hơn 50 triệu người dùng chỉ trong một thời gian ngắn. Những bức hình hài hước nhanh chóng biến Durex thành một hiện tượng mới ở Trung Quốc, vào cuối năm 2013, thương hiệu này đã tiếp cận được hơn 500 triệu khách hàng với chi phí quảng cáo gần như là 0 đồng. </p>
                                <p>Tuy nhiên nó cực kì hiệu quả ở chỗ là từ việc khách hàng biết đến Durex đến việc họ nhìn thấy trên sàn và cực kì dễ dàng 1 click là mua được luôn.</p>
                                <p> Đấy là những câu chuyện của những công ty lớn vậy còn các công ty nhỏ hơn thì sao  Cùng concept nhưng quy mô nhỏ hơn thôi , mình sang TQ thấy rất nhiều các công ty chuyên TMĐT ở TQ họ liên hệ với các công ty ở Mỹ, Châu Âu để làm riêng một vài dòng sản phẩm chỉ trên TMĐT.</p>
                                <p> Có 15 Nhân viên mà cân 20 tỷ doanh thu/ tháng cho một nhãn hạt điều ở Mỹ bán trên Tmall . Đây cũng là một cơ hội lớn cho các team ở VN học hỏi và làm theo.</p>
                            </div>
                            <div className="AboutBlogsRight">
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
                                    <p>Share: Facebook / Twitter / Pinterest <span>Đánh giá:</span></p>
                               </div>
                               <h5>Bình luận</h5>
                               <div className="box0"></div>
                            </div>
                            <h2>Bài viết mới</h2>
                            <div className="about_bottom_images">
                               <div className="image_card ">
                                <div className="size">
                                        <div>
                                            <img src={AboutBottomImages} alt="" />
                                        </div>
                                        <p> Mâu thuẫn giữa phát triển sàn TMĐT và các kênh bán khác</p>
                                    </div>
                               </div>
                               <div className="image_card ">
                                <div className="size">
                                        <div>
                                            <img src={AboutBottomImages} alt="" />
                                        </div>
                                        <p> Mâu thuẫn giữa phát triển sàn TMĐT và các kênh bán khác</p>
                                    </div>
                               </div>
                               <div className="image_card ">
                                <div className="size">
                                        <div>
                                            <img src={AboutBottomImages} alt="" />
                                        </div>
                                        <p> Mâu thuẫn giữa phát triển sàn TMĐT và các kênh bán khác</p>
                                    </div>
                               </div>
                               <div className="image_card ">
                                <div className="size">
                                        <div>
                                            <img src={AboutBottomImages} alt="" />
                                        </div>
                                        <p> Mâu thuẫn giữa phát triển sàn TMĐT và các kênh bán khác</p>
                                    </div>
                               </div>
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

export default Cong;
