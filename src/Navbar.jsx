import React from 'react'
import { Item, Container} from './NavbarStyle'


export const Navbar = ({list}) => {
    return (
        <Container>
           <Item>logo</Item>
           <Item>logo</Item>
           <Item>logo</Item>
           <Item>Allmovies <span>{list?.length || 0}</span></Item>
        </Container>
    )
}



export default Navbar
