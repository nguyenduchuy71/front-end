import React from "react";
import "./course.css";
function Course({ course }) {
  return (
    <div className="job-title">
      <div className="top">
        <img src={course.url} alt="img" />
        <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
      </div>
      <div className="rolename">
        <span>{course.title}</span>
      </div>
      <div className="description">{course.description}</div>
      <div className="buttons">
        <a
          href={`https://www.youtube.com/watch?v=${course.id_video}`}
          rel="noreferrer"
          target="_blank"
          className="button apply-now"
        >
          Xem chi tiết
        </a>
      </div>
    </div>
  );
}
export default Course;
