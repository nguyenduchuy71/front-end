import React, { useEffect, useState } from "react";
import Course from "../components/course/Course";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../components/Spinner";
import { checklogin, signout, loadCourses } from "../actions/userActions";
import { useHistory } from "react-router-dom";
import Pagination from "../components/Pagination";

function CourseScreen() {
  const userSignin = useSelector((state) => state.userSignin);
  const { loading, userInfo, error } = userSignin;
  const userCheckLogin = useSelector((state) => state.userCheckLogin);
  const { loadingCheckLogin, userCheck, errorCheckLogin } = userCheckLogin;
  const userLoadCourses = useSelector((state) => state.userLoadCourses);
  const { loadingCourses, courses, errorLoadCourses } = userLoadCourses;
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(40);
  const [textSearch, setTextSearch] = useState("");
  const [filterdCourse, setFilterdCourse] = useState([]);
  const [coursesLocal, setCoursesLocal] = useState(courses);
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("courses")) {
      const data = JSON.parse(localStorage.getItem("courses"));
      setCoursesLocal(data.courses);
    } else {
      dispatch(loadCourses());
    }
    if (userInfo) {
      dispatch(checklogin());
      if (errorCheckLogin) {
        dispatch(signout());
        history.push("/signin");
        window.location.reload();
      }
    }
  }, [dispatch, loadingCourses]);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentCourses =
    filterdCourse.length > 0
      ? filterdCourse.slice(indexOfFirstPost, indexOfLastPost)
      : coursesLocal?.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const goNext = () => {
    if (currentPage < Math.ceil(coursesLocal?.length / postsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };
  const goPrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleChange = async (e) => {
    setTextSearch(e.target.value);
    if (currentPage > 1) {
      setCurrentPage(1);
    }
    if (textSearch.length > 1) {
      const filterd = await coursesLocal?.filter((course) => {
        if (
          course.description.toLowerCase().includes(textSearch.toLowerCase()) ||
          course.title.toLowerCase().includes(textSearch.toLowerCase()) ||
          course.authen.toLowerCase().includes(textSearch.toLowerCase())
        ) {
          return true;
        } else {
          return false;
        }
      });
      setFilterdCourse(filterd);
    } else {
      setFilterdCourse(coursesLocal);
    }
  };
  return (
    <>
      {loadingCourses || loading || loadingCheckLogin ? (
        <Spinner />
      ) : (
        <>
          {currentCourses?.length ? (
            <Container>
              <Search>
                <ion-icon name="search-outline"></ion-icon>
                <input
                  type="text"
                  placeholder="Tìm khóa học"
                  value={textSearch}
                  onChange={handleChange}
                />
              </Search>
              <CourseContainer>
                {currentCourses?.map((course) => (
                  <Course key={course._id} course={course} />
                ))}
              </CourseContainer>
              <Pagination
                postsPerPage={postsPerPage}
                totalPosts={
                  filterdCourse.length > 0
                    ? filterdCourse.length
                    : coursesLocal.length
                }
                paginate={paginate}
                goPrev={goPrev}
                goNext={goNext}
              />
            </Container>
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
const Container = styled.div`
  margin-top: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 10px 20px;
`;
const Content = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: center;
`;
const CourseContainer = styled.div`
  --spacing: 25px;
  --columns: 4;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  margin-left: calc(-1 * var(--spacing));

  @media screen and (max-width: 1023px) {
    --columns: 2;
  }
  @media screen and (max-width: 767px) {
    --spacing: 15px;
    --columns: 1;
  }
`;
const Search = styled.div`
  margin-bottom: 40px;
  padding: 10px;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #ccc;
  border-radius: 4px;
  &:hover {
    border: 1px solid #008cef;
  }
  input {
    width: 100%;
    outline: none;
    border: none;
    font-size: 16px;
    margin-left: 4px;
  }
  @media screen and (max-width: 767px) {
    width: 80%;
  }
`;
