import React, { useEffect, useState } from "react";
import Course from "../components/course/Course";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { loadCourses } from "../actions/userActions";
import Spinner from "../components/Spinner";
import { checklogin, signout } from "../actions/userActions";

function CourseScreen() {
  const userSignin = useSelector((state) => state.userSignin);
  const { loading, userInfo, error } = userSignin;
  const userCheckLogin = useSelector((state) => state.userCheckLogin);
  const { loadingCheckLogin, userCheck, errorCheckLogin } = userCheckLogin;
  const userLoadCourses = useSelector((state) => state.userLoadCourses);
  const { loadingCourses, courses, errorLoadCourses } = userLoadCourses;
  const dispatch = useDispatch();
  useEffect(() => {
    if (userInfo) {
      dispatch(checklogin());
      if (errorCheckLogin) {
        dispatch(signout());
      }
    }
    dispatch(loadCourses());
  }, [userSignin]);
  return (
    <>
      {loadingCourses ? (
        <Spinner />
      ) : (
        <CourseContainer>
          {courses?.map((course) => {
            return <Course key={course._id} course={course} />;
          })}
        </CourseContainer>
      )}
    </>
  );
}

export default CourseScreen;
const CourseContainer = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 0 10px;

  @media (max-width: 489px) {
    flex-direction: column;
  }
`;
