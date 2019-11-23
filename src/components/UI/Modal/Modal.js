import React from 'react';
import classes from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends React.Component {
// added below lifecycle to improve performance
// make sure we don't unnecessarilly update order summary and re-render that
// in BurgerBuilder, wrapping elem (Modal) controls the update of the wrapped elem (OrderSummary), so OrderSummary is not updated coz Modal has a "shouldComponentUpdate"

  shouldComponentUpdate ( nextProps, nextState ) {
    return nextProps.show !== this.props.show;
  }

  componentDidUpdate () {
    console.log('[Modal] Did Update');
  }

  render () {
    return (
      <div>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div
          className={classes.Modal}
          style={{
            transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: this.props.show ? '1' : '0'
          }}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Modal;