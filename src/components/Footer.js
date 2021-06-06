import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="list__socail">
        <a className="item__socail" href="https://www.facebook.com/page.ailab">
          <img
            src="https://image.flaticon.com/icons/png/128/2111/2111398.png"
            alt="fb_icon_socail"
          />
        </a>
        <a className="item__socail" href="#">
          <img
            src="https://image.flaticon.com/icons/png/128/281/281764.png"
            alt="gg_icon_socail"
          />
        </a>
        <a className="item__socail" href="https://github.com/AILabh93">
          <img
            src="https://image.flaticon.com/icons/png/128/2111/2111432.png"
            alt="git_icon_socail"
          />
        </a>
      </div>
      <p className="title__footer">Sản phẩm thuộc về AILABH903</p>
    </div>
  );
}

export default Footer;
