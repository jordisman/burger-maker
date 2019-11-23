import React from 'react';
import Button from '../UI/Button/Button';

// This could be a functional component, doesn't have to be a class
// For debug and reference purpose
class OrderSummary extends React.Component {

  componentDidUpdate() {
    console.log('[OrderSummary] Did Update')
  }

  render() {
    let ingredientSummary = Object.keys(this.props.ingredients)
      .map(igKey => {
        return (<li key={igKey}>
          <span style={{textTransform: 'capitalize'}}>{igKey} : </span>
          {this.props.ingredients[igKey]}
        </li>
      )});

    return (
      <div>
        <h3>Your Order :</h3>
        <p>A burger with the following ingredients :</p>
        <ul> {ingredientSummary} </ul>
        <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
        <h4>Continue to Checkout ?</h4>
        <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
        <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
      </div>
    )
  }
}


export default OrderSummary;