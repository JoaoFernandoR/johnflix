import React, {useState} from 'react'
import dados from './data/dados_iniciais.json'
// Components
import Menu from './components/Menu'
import Footer from './components/Footer'
import BannerMain from './components/BannerMain'
import Carousel from './components/Carousel'

const App: React.FC = () => {

  const [dadosIniciais, setData] = useState(dados)
  return (
    <section id="App" style={{ 'background' : "#141414"}}>
      <Menu />
      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription="O que"
      />
      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />
      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[1]}
      />
      <Carousel
        ignoreFirstVideo

        category={dadosIniciais.categorias[2]}
      />
      <Carousel
        ignoreFirstVideo

        category={dadosIniciais.categorias[3]}
      />
      <Carousel
        ignoreFirstVideo

        category={dadosIniciais.categorias[4]}
      />
      <Footer />
    </section>
  )
}

export default App