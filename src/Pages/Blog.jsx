import React from 'react'
import Banner from '../Components/Banner'
import BlogPage from '../BlogPageContent/BlogPage';
function Blog() {
  return (
    <>
   <Banner pageName="Blog" pageLink="/blog"/>
   <BlogPage/>
    </>
  );
}

export default Blog;
