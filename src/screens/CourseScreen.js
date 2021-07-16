import React, { useEffect, useState } from "react";
import Course from "../components/course/Course";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../components/Spinner";
import { checklogin, signout, loadCourses } from "../actions/userActions";

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
      {loadingCourses || loading || loadingCheckLogin ? (
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
  padding: 0 20px;
  display: grid;
  gap: 40px;
  grid-template-columns: repeat(3, 1fr);
  @media screen and (max-width: 930px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
