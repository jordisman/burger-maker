import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.8,
  bacon: 1.2
};

class BurgerBuilder extends Component {
  // constructor(props) {
  //    super(props);
  //    this.state = {...}
  // }
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4,
    purchasable: false,
    showModal: false
  }

  updatePurchaseState (ingredients) { // input should be updated ingredients
    // sum of all ingredients count, just need to check if purchasable
    // console.log('obj.val:',Object.values(ingredients));
    const sum = Object.values( ingredients )
      .reduce( ( sum, el ) => {
          return sum + el;
      }, 0);

      // console.log('sum:', sum);
    this.setState( { purchasable: sum > 0 } );
  }

  addIngredientHandler = ( type ) => {
    const oldCount = this.state.ingredients[type];
    // make a copy of the state obj first, don't mutate
    const updatedIngredients = {...this.state.ingredients};
    // increase count: {salad: 1, bacon: 1, cheese: 1 ...}
    updatedIngredients[type] = oldCount + 1;
    // add up total price and ingredient prices
    const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
    // update new total price and new ingredients
    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngredients
    });
    // must call with updateed ingredients as argument
    this.updatePurchaseState(updatedIngredients);
  }

  removeIngredientHandler = ( type ) => {
    const oldCount = this.state.ingredients[type];
    if ( oldCount <= 0 ) return;
    const updatedIngredients = {...this.state.ingredients};
    updatedIngredients[type] = oldCount - 1;
    const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
    // update new total price and new ingredients
    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngredients
    });

    this.updatePurchaseState(updatedIngredients);
  }

  showModalHandler = () => {
    this.setState({showModal: true})
  }

  purchaseCancelHandler = () => {
    this.setState({showModal: false});
  }

  purchaseContinueHandler = () => {
    alert('You continue!');
  }

  render () {
    // make sure "Less" button is disable when there is 0 count
    const disabledInfo = {...this.state.ingredients};
    for ( let key in disabledInfo ) {
      disabledInfo[key] = (disabledInfo[key] <= 0) // bool
    }
    // {salad: true, meat: false, ...}
    return (
      <div>
        <Modal
          show={this.state.showModal}
          modalClosed={this.purchaseCancelHandler}
        >
          <OrderSummary
            ingredients={this.state.ingredients}
            price={this.state.totalPrice}
            purchaseCancelled={this.purchaseCancelHandler}
            purchaseContinued={this.purchaseContinueHandler}
          />
        </Modal>

        <Burger ingredients={this.state.ingredients} />
        <BuildControls
            ingredientAdded={this.addIngredientHandler}
            ingredientRemoved={this.removeIngredientHandler}
            disabled={disabledInfo}
            purchasable={this.state.purchasable}
            price={this.state.totalPrice}
            showModal={this.showModalHandler}
        />
      </div>
    );
  }
}

export default BurgerBuilder;