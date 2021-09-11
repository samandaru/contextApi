import React, {useState} from 'react'
import  Navbar  from './Navbar'
import  Body  from './Body'
import {Container} from './Style';

const  App = () => {
  return (
    <Container>
      <Navbar/>
      <Body/>
    </Container>
  )
}

export default App

