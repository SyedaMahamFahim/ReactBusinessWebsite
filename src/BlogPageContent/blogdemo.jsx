import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Button from '../Components/Button';
import ColorBtn from '../Components/ColorBtn'
import './blog.css'
import BlogData from './BlogData'
const BlogPage = () => {
    const [blogData, setBlogData] = useState(BlogData);

    return (
        <>
        {
          BlogData.map((data, index) => {
            return (
              <>
                <figure >
                       <img src={data.heroImg} alt={data.title} className="blog-img"/>
                       <figcaption className="blog-title">{data.title}</figcaption>
                       <figcaption className="blog-date">{data.date}</figcaption>
                       <figcaption className="blog-desc">{data.desc}</figcaption>
                       <ColorBtn btnName="Read More" btnLink={data.link}/>
                </figure>
              </>
            )
          })
        }


           <section className="blog-page-container">
               <div className="blogs-section">
                   <div className="blog-content">
                   <figure >
                       <img src="http://aiclub.rcai.pk/wp-content/uploads/2021/06/blog-1-featured-image-300x205.png" alt="" className="blog-img"/>
                       <figcaption className="blog-title">Lorem ipsum dolor sit amet.</figcaption>
                       <figcaption className="blog-date">9/sep/2020</figcaption>
                       <figcaption className="blog-desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam, nisi.</figcaption>
                       <ColorBtn btnName="Read More" btnLink="/about"/>
                   </figure>
                   <figure >
                       <img src="http://aiclub.rcai.pk/wp-content/uploads/2021/06/blog-1-featured-image-300x205.png" alt="" />
                       <figcaption className="blog-title">Lorem ipsum dolor sit amet.</figcaption>
                       <figcaption className="blog-date">9/sep/2020</figcaption>
                       <figcaption className="blog-desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam, nisi.</figcaption>
                       <ColorBtn btnName="Read More" btnLink="/about"/>
                   </figure>
                   <figure >
                       <img src="http://aiclub.rcai.pk/wp-content/uploads/2021/06/blog-1-featured-image-300x205.png" alt="" />
                       <figcaption className="blog-title">Lorem ipsum dolor sit amet.</figcaption>
                       <figcaption className="blog-date">9/sep/2020</figcaption>
                       <figcaption className="blog-desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam, nisi.</figcaption>
                       <ColorBtn btnName="Read More" btnLink="/about"/>
                   </figure>
                   
                   </div>
                   
                   
               </div>
              
                   
                   
            
               
           </section>
        </>
    )
}

export default BlogPage





// Blogdata.filter((item, idx) => idx < 5).map(item => {
//   return <FilmItem key={item.id} film={item} />
// });


