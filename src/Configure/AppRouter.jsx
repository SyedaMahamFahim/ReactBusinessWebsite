import React from 'react'
import {Route,Switch } from 'react-router-dom';
import Home from '../Pages/Home'
import Contact from '../Pages/Contact'
import About from '../Pages/About'
import Services from '../Pages/Services'
import Blog from '../Pages/Blog'
import Faqs from '../Pages/Faqs'
import Portfolio from '../Pages/Portfolio'


function AppRouter(){
  return(
    <>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/contact" component={Contact}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/services" component={Services}/>
      <Route exact path="/blog" component={Blog}/>
      <Route exact path="/faqs" component={Faqs}/>
      <Route exact path="/portfolio" component={Portfolio}/>

      

    </Switch>
    </>
  )
}
export default AppRouter;
