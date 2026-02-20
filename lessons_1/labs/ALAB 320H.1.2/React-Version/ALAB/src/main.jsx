import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import Header from "./components/header"
import Footer from "./components/footer"
import Article from "./components/Article"
import image1 from "./assets/blog-image-1.jpg"
import image2 from "./assets/blog-image-2.jpg"



createRoot(document.getElementById('root')).render(
  <html>
    <Header/>
    <Article title="On the Street in Brooklyn" imageLink={image1} imageAlt="A woman in an orange dress leaning against a wall on a sidewalk." text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro repellendus saepe, unde quis voluptatum obcaecati reprehenderit architecto officiis laborum illum, earum, consectetur debitis quibusdam illo sed enim nam. Repudiandae, quos."/>
    <Article title="Vintage in Vogue" imageLink={image2} imageAlt="Three people staring at the camera." text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro repellendus saepe, unde quis voluptatum obcaecati reprehenderit architecto officiis laborum illum, earum, consectetur debitis quibusdam illo sed enim nam. Repudiandae, quos."/>
    <Footer/>
  </html>


)
