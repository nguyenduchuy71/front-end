import React from "react";
import "./course.css";
function Course({ course }) {
  return (
    <div className="card">
      <img src={course.image} alt="couse-image" className="card-image" />
      <div className="card-content">
        <div className="card-top">
          <h4 className="card-title">{course.description}</h4>
          <div className="card-user">
            <div className="card-user-info">
              <ion-icon name="person-circle-outline"></ion-icon>
              <h2 className="card-user-name">{course.authen}</h2>
            </div>
            <div className="card-user-numvideo">
              <h2 className="card-user-name">{course.total_videos}</h2>
              <ion-icon name="desktop-outline"></ion-icon>
            </div>
          </div>
        </div>
        <div className="card-bottom">
          <div className="card-live">
            <a
              href={`https://www.youtube.com/playlist?list=${course.id_video}`}
              rel="noreferrer"
              target="_blank"
              className="button apply-now"
            >
              Xem ngay
            </a>
          </div>
          <div className="card-watching">
            <span className="card-watching-view">{course.view}</span>
            <ion-icon name="eye-outline"></ion-icon>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Course;
