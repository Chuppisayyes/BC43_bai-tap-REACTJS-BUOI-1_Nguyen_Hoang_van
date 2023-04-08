import React, { Component } from 'react'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className='hder bg-dark'>
            <Header/>
        </div>
        <div className='bd'>
            <Body/>
        </div>
        <div className="fter py-5 bg-dark">
            <Footer/>
        </div>
      </div>
    )
  }
}
