import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { async } from 'regenerator-runtime';

if (module.hot) {
    module.hot.accept();
}

const controlRecipes = async () => {
    try {
        const id = window.location.hash.slice(1);

        if (!id) return;
        recipeView.renderSpinner();

        // 1. Loading recipe
        await model.loadRecipe(id);

        // 2. Rendering recipe
        resultsView.render(model.getSearchResultsPage(5));
    } catch (err) {
        recipeView.renderError();
    }
};

const controlSearchResults = async () => {
    try {
        resultsView.renderSpinner();

        // 1. Get search query
        const query = searchView.getQuery();
        if (!query) return;

        // 2. Load search results
        await model.loadSerachResults(query);

        // 3. Render results
        console.log(model.state.search.results);
        resultsView.render(model.state.search.results);
    } catch (err) {
        console.log(err);
    }
};

const init = () => {
    recipeView.addHandlerRender(controlRecipes);
    searchView.addHandlerSearch(controlSearchResults);
};
init();
