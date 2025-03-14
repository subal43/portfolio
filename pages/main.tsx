
import {Navbar} from "../components/navbar"
import { HeroItem } from "../components/heroItem";
import {Skills} from "../components/skill"
import {Projects} from "../components/project"
import { Footer } from '../components/footer';
import {About} from "../components/about"
import React from 'react';


export const Portfolio:React.FC =() => {


  return (
    <div>
      <Navbar/>
      <HeroItem/>
      <Skills/>
      <Projects/>
      <About/>
      <Footer/>
    </div>
  );
};