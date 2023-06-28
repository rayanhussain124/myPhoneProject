import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from '../screens/home';
import Prices from '../screens/prices';
import PriceDetails from "../screens/priceDetails";
import Events from '../screens/events';
import Wholesale from '../screens/wholesale';
import WholesaleDetails from "../screens/wholesaleDetails";
import Calories from '../screens/calories';
import CaloryDetails from "../screens/caloryDetails";
import Recipe from "../screens/recipe";
import RecipeDetails from "../screens/recipeDetails";

//stores screen routes
const screens = {
    Home: {
        screen: Home
    },
    Prices: {
        screen: Prices
    },
    PriceDetails: {
        screen: PriceDetails,
        navigationOptions: {
            title: 'Price Details'
        }
    },
    Calories: {
        screen: Calories
    },
    CaloryDetails: {
        screen: CaloryDetails,
        navigationOptions: {
            title: 'Calory Details'
        }
    },
    Events: {
        screen: Events
    },
    Wholesale: {
        screen: Wholesale
    },
    WholesaleDetails: {
        screen: WholesaleDetails,
        navigationOptions: {
            title: 'Wholesale Details'
        }
    },
    Recipe: {
        screen: Recipe
    },
    RecipeDetails: {
        screen: RecipeDetails,
        navigationOptions: {
            title: 'Recipe Details'
        }
    }
}

//creates navigator to navigate through the sceens
const HomeStack = createStackNavigator(screens)

export default createAppContainer(HomeStack);