import { HashRouter, Routes as Switch , Route } from 'react-router-dom'
import Home from './conponents/core/Home'
import Shop from './conponents/core/Shop'

const Routes = () => {
  return (
    <HashRouter>
        <Switch>
            <Route path="/" element={ <Home/> }></Route>
            <Route path="/shop" element={ <Shop></Shop> }></Route>
        </Switch>
    </HashRouter>
  )
}

export default Routes