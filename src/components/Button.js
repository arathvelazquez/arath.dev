import { Component } from 'react';

class Button extends Component {
  
  render() {
    return (
      <div className="flex mt-3">
        <a href="shared/FS_ArathVelazquez_CV.pdf" target="tab" className="m-auto border-2 border-primary hover:text-primary hover:border-white text-white font-extrabold uppercase p-2 text-sm outline-none">Download CV</a>
      </div>
    )
  }
};

class CommonButton extends Component {
  
  render() {
    return (
      <div className="flex mt-3">
        <a href={this.props.link} target="tab" className="m-auto mb-20 border-2 text-white hover:text-white hover:border-black hover:border-primary bg-black font-extrabold uppercase p-2 text-sm outline-none">{this.props.title}</a>
      </div>
    )
  }
}

export {
  Button,
  CommonButton
};