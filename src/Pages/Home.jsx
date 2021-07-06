
import React from 'react'
import Slider from '../HeroSlider/Components/Slider'
import ServiceContent from '../ServicePageContent/ServiceContent'
import AboutSection from '../AboutPageContent/AboutSection'
import Button from '../Components/Button'
import ColorBtn from '../Components/ColorBtn'
import BlogData from '../BlogPageContent/BlogData'
import PagesMainSectionContent from '../Components/PagesMainSectionContent'
import "../Css/style.css"
import WorkWithUsSection from '../AboutPageContent/WorkWithUsSection'
import Review from '../Review/Review'
function Home() {
  
 
  return (
    <>
      <Slider />
      <section className="hero-text-section">
        <h1 className="home-page-h1" >
          Partner with Business Leaders
        </h1>
        <p className="home-page-p" >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt eius magni provident, doloribus omnis minus temporibus perferendis nesciunt quam repellendus nulla nemo ipsum odit corrupti
        </p>
         <Button btnName="Read More" btnLink="/about"/>
       
      </section>
      <section className="about"> 
        <AboutSection/>
        </section>
      <section className="services">
        <ServiceContent />
      </section>   


      
     <section className="team">
     <div className="team-section-container">
                <div className="row-team">
                    
                    <div className="team-column team-col">
                      <section className="home-page-team-content">
                        <h1 className="team-title" style={{color:"white",fontSize:"45px"}}>Our Team</h1>
                        <p className="team-para">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit quam eum nemo soluta earum fuga, optio accusantium dolore dignissimos commodi ex error dolor voluptatem molestias.
                        </p>
                        <p className="team-para">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas fuga minus mollitia deserunt recusandae sapiente veritatis quod possimus sit cum obcaecati repellendus, quisquam aut nulla itaque hic. Velit, explicabo numquam?
                        </p>
                        </section>
                        {/* <Link exact path="/contact" >Contact Us</Link> */}

                    </div>
                    <div className="team-column">
                        <img src="https://blog.flock.com/hs-fs/hubfs/026.jpg?width=700&name=026.jpg" alt="" className="team-img" />
                    </div>
                </div>

            </div>
     </section>
     <section className="homepage-review-section">
       <Review/>
     </section>
     <section className="homepage-work-with-us-section">
       <WorkWithUsSection/>
     </section>
     <section className="home-page-blog">
     <PagesMainSectionContent 
        MainSectionTitle="Our Blog"
        MainSectionParagraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt eius magni provident, doloribus omnis minus ovident, doloribus omnis minus temporibus perferendis nesciunt"
        />
     </section>
     <section className="blog-page-container">
        <div className="blogs-section">
          <div className="blog-content">

          {
  BlogData.filter((item, idx) => idx < 3).map((data, index) => {
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
  );
}

export default Home;
