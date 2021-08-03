import React, { useEffect } from "react";
import Course from "../components/course/Course";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../components/Spinner";
import { checklogin, signout, loadCourses } from "../actions/userActions";
import { useHistory } from "react-router-dom";

function CourseScreen() {
  const userSignin = useSelector((state) => state.userSignin);
  const { loading, userInfo, error } = userSignin;
  const userCheckLogin = useSelector((state) => state.userCheckLogin);
  const { loadingCheckLogin, userCheck, errorCheckLogin } = userCheckLogin;
  const userLoadCourses = useSelector((state) => state.userLoadCourses);
  const { loadingCourses, courses, errorLoadCourses } = userLoadCourses;
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(courses);
    if (userInfo) {
      dispatch(checklogin());
      if (errorCheckLogin) {
        dispatch(signout());
        history.push("/signin");
        window.location.reload();
      }
    }
    dispatch(loadCourses());
  }, [dispatch]);
  return (
    <>
      {loadingCourses || loading || loadingCheckLogin ? (
        <Spinner />
      ) : (
        <>
          {courses?.length ? (
            <CourseContainer>
              {courses?.map((course) => (
                <Course key={course._id} course={course} />
              ))}
            </CourseContainer>
          ) : (
            <Content>
              <img
                src="https://i.pinimg.com/originals/ae/8a/c2/ae8ac2fa217d23aadcc913989fcc34a2.png"
                alt="img"
                style={{ width: "100%" }}
              />
            </Content>
          )}
        </>
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
  grid-template-columns: repeat(4, 1fr);
  @media screen and (max-width: 930px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
const Content = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: center;
`;
