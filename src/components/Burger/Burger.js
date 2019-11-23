import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from '../BurgerIngredient/BurgerIngredient';

const Burger = ( props ) => {
// ingredients is an obj in main state, map the ig obj into ig array below
// control how many and which ingredient we need to put
    let transformedIngredients = Object.keys( props.ingredients )
        .map( igKey => {
        // console.log('igKey:',igKey,'p.ig[igKey]:',props.ingredients[igKey]);
        // console.log([...Array(props.ingredients[igKey])]); <- empty with spaces
        // create nested empty arr for each ig w/ dynamic lengh of given ig [ , ]
        // must have nested arr for ig or it'd be 1 no matter how much added
            return [...Array( props.ingredients[igKey] )]
                .map((elem, i) => { // note: key can be string + no.
                return <BurgerIngredient key={igKey + i} type={igKey} />;
                });
        })
// without reduce, can't check if ig length is 0 or not
// so the empty message won't show
        .reduce((arr, el) => { // flatten the array
            return arr.concat(el)
        }, []);

        console.log(transformedIngredients);

    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients!</p>;
    }


// alternatively use forEach to check each nested arr do the same and more straght forward
        // transformedIngredients.forEach(elem => {
        //     if (elem.length === 0) {
        //         transformedIngredients = <p> Please start adding ingredients! </p>;
        //     }
        // })

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default Burger;