import React from "react";
import "./AboutUs.css";
function AboutUs() {
    return (
        <div className="aboutus">
            <h1 className="aboutus__title">Nhận xét của người dùng</h1>
            <div className="row list__aboutus">
                <div className="col-lg-4 col-sm-6 col-md-4 item__aboutus">
                    <img
                        src="/images/tuananh.jpg"
                        alt="img"
                    ></img>
                    <p className="item__name__aboutus">Nguyễn Tuấn Anh</p>
                    <p className="item__content__aboutus">
                        Hệ thống tư vấn chuyên ngành quá chuẩn.
                    </p>
                </div>
                <div className="col-lg-4 col-sm-6 col-md-4 item__aboutus">
                    <img
                        src="/images/phuc.jpg"
                        alt="img"
                    ></img>
                    <p className="item__name__aboutus">Trần Hoàng Phúc</p>
                    <p className="item__content__aboutus">
                        Hệ thống tư vấn chuyên ngành quá chuẩn.
                    </p>
                </div>
                <div className="col-lg-4 col-sm-6 col-md-4 item__aboutus">
                    <img
                        src="/images/hau.jpg"
                        alt="img"
                    ></img>
                    <p className="item__name__aboutus">Tô Văn Hậu</p>
                    <p className="item__content__aboutus">
                        Hệ thống tư vấn chuyên ngành quá chuẩn.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
