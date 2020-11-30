import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Categories from '../Categories/categories'
import Products from '../Product/product'
import Nav from '../../components/Nav/NavBar'
const Home: React.FC = () => {
  return (
    <>
      <Nav />
      <Switch>
        <Route exact path="/home/categories" component={Categories}></Route>
        <Route exact path="/home/products" component={Products}></Route>
      </Switch>
    </>
  )
}

export default Home
