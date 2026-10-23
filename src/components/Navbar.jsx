import { Component } from 'react';
import { Divide as Hamburger } from 'hamburger-react'

class Menu extends Component {
  render() {
    return (
      <nav className="w-full flex flex-wrap items-center p-3 bg-black">
        <div className="flex md:hidden md:w-11/12">
          <Hamburger color="#FFFFFF" onToggle={toggled => {
            if (toggled) {
              // open a menu
              return <button className="text-white">{toggled ? "Close" : "Open"}</button>
              // <div className="md:flex md:w-auto m-auto w-5/12 text-white text-sm uppercase justify-between p-3">        
              //   <a href="#" className="md:inline-block px-3 hover:shadow-link">Home</a>
              //   <a href="#" className="md:inline-block px-3 hover:shadow-link">About</a>
              //   <a href="#" className="md:inline-block px-3 hover:shadow-link">Experience</a>
              //   <a href="#" className="md:inline-block px-3 hover:shadow-link">Blog</a>
              //   <a href="#" className="md:inline-block px-3 hover:shadow-link">Contact</a>
              // </div>
            } else {
              // close a menu
              console.log('Close');
            }
          }} />
        </div>

        <div className="hidden md:flex md:w-auto m-auto w-5/12 text-white text-sm uppercase justify-between p-3">
          <a href="/" className="md:inline-block px-3 hover:shadow-link">Home</a>
          <a href="#about" className="md:inline-block px-3 hover:shadow-link">About</a>
          <a href="#experience" className="md:inline-block px-3 hover:shadow-link">Experience</a>
          {/* <a href="#blog" className="md:inline-block px-3 hover:shadow-link">Blog</a> */}
          {/* <a href="#contact" className="md:inline-block px-3 hover:shadow-link">Contact</a> */}
        </div>
      </nav> 
    )
  }
}

export default Menu;