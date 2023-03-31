// https://forkify-api.herokuapp.com/v2
import * as model from './model.js';
import recipeView from './views/recipeView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

const recipeContainer = document.querySelector('.recipe');

// use fetch function that returns a promise and use async await to handle the promise
const controlRecipes = async () => {
    try {
        const id = window.location.hash.slice(1);

        if (!id) return;
        recipeView.renderSpinner();

        // 1. Loading recipe
        await model.loadRecipe(id);
        const { recipe } = model.state;

        // 2. Rendering recipe
        recipeView.render(model.state.recipe);
    } catch (err) {
        recipeView.renderError();
    }
};

const init = () => {
    recipeView.addHandlerRender(controlRecipes);
};
init();
