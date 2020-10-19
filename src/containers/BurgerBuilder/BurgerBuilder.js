import React, {Component} from 'react';
import Auxiliary from '../../hoc/Auxiliary'
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

const INGREDIENTS_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
}

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 4,
  }

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const UpdatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = UpdatedCount;
    const priceAddition = INGREDIENTS_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
  }

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if(oldCount <= 0) {
      return;
    }
    const UpdatedCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = UpdatedCount;
    const priceReduction = INGREDIENTS_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceReduction;
    this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
  }

  render() {
      const disabledInfo = {
        ...this.state.ingredients
      };
      for(let key in disabledInfo) {
        disabledInfo[key] = disabledInfo[key] <= 0
      }
      return (
        <Auxiliary>
          <Burger ingredients={this.state.ingredients} />
          <BuildControls
            ingredientAdded={this.addIngredientHandler}
            ingredientRemoved={this.removeIngredientHandler}
            disabled={disabledInfo}
            price={this.state.totalPrice}></BuildControls>
        </Auxiliary>
      );
  }
}

export default BurgerBuilder; 
