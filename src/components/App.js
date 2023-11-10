import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import Aside from "./About";
import  ArticleList from "./ArticleList";

function App() {
  return (
    <div className="App">
      <Header name={blogData.name}/>
      <Aside image ={blogData.image} about ={blogData.about}/>
      <ArticleList/>
    </div>
  );
}

export default App;
