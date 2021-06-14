import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import CourseScreen from "./screens/CourseScreen";
import SignInScreen from "./screens/SignInScreen";
import SignUpScreen from "./screens/SignUpScreen";
import Footer from "./components/Footer";
import Error404Page from "./screens/Error404Page";
import ForumScreen from "./screens/ForumScreen";
import ForumDetailScreen from "./screens/ForumDetailScreen";
import ProfileScreen from "./screens/ProfileScreen";
import AdminUserScreen from "./screens/AdminUserScreen";
import AdminCourseScreen from "./screens/AdminCourseScreen";
import AdminForumScreen from "./screens/AdminForumScreen";
import AddCourseScreen from "./screens/AddCourseScreen";
import UpdateCourseScreen from "./screens/UpdateCourseScreen";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <Switch>
          <Route
            path="/course/updatecourse/:id"
            component={UpdateCourseScreen}
          ></Route>
          <Route path="/course/addcourse" component={AddCourseScreen}></Route>
          <Route path="/admin/forums" component={AdminForumScreen}></Route>
          <Route path="/admin/courses" component={AdminCourseScreen}></Route>
          <Route path="/admin/users" component={AdminUserScreen}></Route>
          <Route path="/profile" component={ProfileScreen}></Route>
          <Route path="/forum/:id" component={ForumDetailScreen}></Route>
          <Route path="/forum" component={ForumScreen}></Route>
          <Route path="/signup" component={SignUpScreen}></Route>
          <Route path="/signin" component={SignInScreen}></Route>
          <Route path="/course" component={CourseScreen}></Route>
          <Route path="/" component={HomeScreen} exact></Route>
          <Route path="*" component={Error404Page}></Route>
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
