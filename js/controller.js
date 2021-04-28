import * as model from "./model.js";
import searchView from "./searchView.js";
import View from "./view.js";
import RecipeView from "./recipeView.js";
import Button from "./buttonSearchView.js";

// const test = function () {
//   model.loadSearchResults("pizza");
// };
// test();

const controlSearchResults = async function (checkedItems) {
  try {
    const query = searchView.getQuery();
    const checkI = checkedItems;
    View.clearSearchResults();

    await model.loadSearchResults(query, checkI);

    console.log(model.state.search.results);

    model.state.search.results.map((res) => View.render(res));
  } catch (err) {
    console.log(err.message);
  }
};

const controlRecipes = async function () {
  const id = window.location.hash.slice(1);
  if (!id) return;
  await model.loadRecipe(id);

  View.renderRecipe(model.state.recipe);
};

const init = function () {
  searchView.addHandlerSearch(controlSearchResults);
  RecipeView.addHandlerRender(controlRecipes);
};
init();
