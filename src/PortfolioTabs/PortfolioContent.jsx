import React  from 'react'
import {Link} from 'react-router-dom'

import "./style.css"
const PortfolioContent=({ items})=>{
    return(
        <>
        <div className='section-center'>
      {items.map((portfolioItem) => {
        const { id, title, img,url } = portfolioItem;
        return (
          <article key={id} className='portfolio-item'>
             <Link exact path={url} to={url}> <img src={img} alt={title} className='photo' /></Link>
         
          
           <div className='item-info'>
              <header>
                <h4>{title}</h4>
               
              </header>
          
            </div>
          
          </article>
          

        );
      })}
    </div>
      
        </>
    )
}
export default PortfolioContent

//  <div className="port">

// </div> 


// { 
//   (isShown === true) ? <div className='item-info'>
//   <header>
//   <h4>{title}</h4>
//   </header>
//   <p className='item-text'>{desc}</p>
//   </div> 
//   : null
//   }

{/* <Link exact path={url} to={url}> <img src={img} alt={title} className='photo' 
onMouseEnter={() => setIsShown(true)}
onMouseLeave={() => setIsShown(false)} /></Link> */}
