import React from "react";
import "./course.css";
function Course({ course }) {
  return (
    <div class="job-title">
      <div class="top">
        <img src={course.url} alt="img" />
        <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
      </div>
      <div class="rolename">
        <span>{course.title}</span>
      </div>
      <div class="description">{course.description}</div>
      <div class="buttons">
        <a
          href={`https://www.youtube.com/watch?v=${course.id_video}`}
          rel="noreferrer"
          target="_blank"
          class="button apply-now"
        >
          Xem chi tiết
        </a>
      </div>
    </div>
  );
}
export default Course;
