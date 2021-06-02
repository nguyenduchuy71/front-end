import React from "react";
import "./Course.css";
import Button from "@material-ui/core/Button";

function Course({ course }) {
  return (
    <div className="col-lg-4 col-sm-12 col-md-6 course__item">
      <div className="top">
        <img className="img__course" src={course.img} alt="img_course" />
      </div>
      <div className="center">
        <p gutterBottom variant="h5" component="h2" className="course__name">
          {course.title}
        </p>
        <p
          variant="body2"
          color="textSecondary"
          component="p"
          className="course__desc"
        >
          {course.description}
        </p>
      </div>
      <div className="bottom">
        <Button color="primary" size="medium">
          <a
            href={`https://www.youtube.com/watch?v=${course.id_video}`}
            rel="noreferrer"
            target="_blank"
          >
            Xem chi tiết
          </a>
        </Button>
      </div>
    </div>
  );
}

export default Course;
