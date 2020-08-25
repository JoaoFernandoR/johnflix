import React from 'react'
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
// Pages
import Home from './pages/Home'
import Cadastro from './pages/Cadastro'
// Components
import Menu from './components/Menu'
import Footer from './components/Footer'

const App: React.FC = () => {

  return (
    <BrowserRouter>
      <Menu />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/newvideo" component={Cadastro} exact />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

export default App