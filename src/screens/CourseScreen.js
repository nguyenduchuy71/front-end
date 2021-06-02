import React, { useEffect, useState } from "react";
import Course from "../components/course/Course";
import styled from "styled-components";
import data from "../data";
import axios from "axios";

function CourseScreen() {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    setCourses(data.courses);
  }, []);
  return (
    <CourseContainer>
      {courses?.map((course) => {
        return <Course key={course._id} course={course} />;
      })}
    </CourseContainer>
  );
}

export default CourseScreen;
const CourseContainer = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
