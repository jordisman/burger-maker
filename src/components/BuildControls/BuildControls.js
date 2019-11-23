import React from 'react';
import classes from './BuildControls.module.css';
import Control from './Control';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
];

const BuildControls = (props) => (
  <div className={classes.BuildControls}>
    <p>Current Price:
      <strong>{props.price.toFixed(2)}</strong>
    </p>
    {controls.map(ctrl => (
      // each type of incredient has less and more buttons
      <Control
        key={ctrl.label}
        label={ctrl.label}
        added={() => props.ingredientAdded(ctrl.type)}
        removed={() => props.ingredientRemoved(ctrl.type)}
        disabled={props.disabled[ctrl.type]}
      />
    ))}

    <button
      className={classes.OrderButton}
      disabled={!props.purchasable}
      onClick={() => props.showModal()}
    >
      ORDER NOW
    </button>
  </div>
);

export default BuildControls;
//
// <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>