import React from "react";
import "./Features.css";

function Features() {
  return (
    <div className="feature">
      <h2 className="title__feature">TÍNH NĂNG NỔI BẬT</h2>
      <div className="row list_feature">
        <div className="col-lg-6 col-sm-12 col-md-6 item__feature">
          <img
            src="https://cdn4.iconfinder.com/data/icons/artificial-intelligence-64/512/chatbot-ai-conversation-artificial-128.png"
            alt="img"
          />
          <h3 className="title__item__feature">Tư vấn chuyên ngành</h3>
          <p className="content__item__feature">
            Trả lời các câu hỏi về việc chọn chuyên ngành
          </p>
        </div>
        <div className="col-lg-6 col-sm-12 col-md-6 item__feature">
          <img
            src="/images/online-course.png"
            alt="img"
          />
          <h3 className="title__item__feature">Các khóa học bổ ích</h3>
          <p className="content__item__feature">
            Trang bị các kiến thức nền tảng quan trọng
          </p>
        </div>
      </div>
    </div>
  );
}

export default Features;
