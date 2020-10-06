import Index from "./application/Index"
import About from "./application/About"
import Services from "./application/Services"
import Portfolio from "./application/Portfolio"
import Contact from "./application/Contact"

export const routes = [
  { path : '' , component : Index},
  { path : '/about' , component : About},
  { path : '/services' , component : Services},
  { path : '/portfolio' , component : Portfolio},
  { path : '/contact' , component : Contact}
]
