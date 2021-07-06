import React, { useState } from 'react'
import ColorBtn from '../Components/ColorBtn'
import './blog.css'
import BlogData from './BlogData'
const BlogPage = () => {
  return (
    <>
      <section className="blog-page-container">
        <div className="blogs-section">
          <div className="blog-content">

            {
              BlogData.map((data, index) => {
                return (
                  <>
                    <figure key={index} className="blog-figure-content">
                      
                      <img src={data.heroImg} alt={data.title} className="blog-img"/>
                      <figcaption className="blog-title">{data.title}</figcaption>
                      <figcaption className="blog-date">{data.date}</figcaption>
                      <figcaption className="blog-desc">{data.desc}</figcaption>
                      <ColorBtn btnName="Read More" colorBtnLink={data.link} />
                    </figure>
                  </>
                )
              })
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default BlogPage