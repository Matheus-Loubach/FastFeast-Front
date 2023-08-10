import './App.css'
import Atalhos from './Components/Atalhos/Atalhos'
import Carousel from './Components/Carousel/Carousel'
import CarouselBanners from './Components/CarouselBanners/CarouselBanners'
import CarouselOfertas from './Components/CarouselOfertas/CarouselOfertas'
import Footer from './Components/Footer/Footer'
import Funciona from './Components/Funcionamento/Funciona'
import Menu from './Components/Menu/Menu'
import Teste from './Components/Teste/Teste'



function App() {


  return (

    <div>
      <Menu/>
      <Carousel/>
      <CarouselOfertas />
      <CarouselBanners />
      <Atalhos/>
      <Teste />
      <Funciona/>
      <Footer />
    </div>

  )
}

export default App
