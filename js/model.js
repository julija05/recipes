import { getJSON } from "./helper.js";
import { API_KEY, NUM_OF_RES, API_URL } from "./config.js";

export const state = {
  recipe: {},
  checkedItems: {},
  randomRecipe: {},
  search: {
    query: "",
    results: [],
  },
};

const createRecipeObject = function (data) {
  console.log(data);
  const recipe = data;

  return {
    id: recipe.id,
    title: recipe.title,
    image: recipe.image,
    instructions: recipe.instructions,
    cookTime: recipe.readyInMinutes,
    servings: recipe.servings,
    ingredients: recipe.extendedIngredients.map((ing) => ing.original),
    cuisine: recipe.cuisines,
  };
};

export const loadRecipe = async function (id) {
  const data = await getJSON(
    `${API_URL}recipes/${id}/information?includeNutrition=false&apiKey=${API_KEY}`
  );
  state.recipe = createRecipeObject(data);
  console.log(state.recipe);
};

export const loadSearchResults = async function (query, checkedItems) {
  try {
    state.checkedItems = checkedItems;
    let cuisine = "";
    let intolerances = "";
    let type = "";
    let filterson = false;

    if (!state.checkedItems.couisine) return;
    Object.entries(state.checkedItems.couisine).filter((el) => {
      if (el[1]) {
        cuisine = el[0] + ",";
      }
    });

    if (cuisine != "") {
      cuisine = cuisine.slice(0, -1);
      cuisine = `&cuisine=${cuisine}`;
    }

    if (!state.checkedItems.intolerances) return;
    Object.entries(state.checkedItems.intolerances).filter((el) => {
      if (el[1]) {
        intolerances = el[0] + ",";
      }
    });

    if (intolerances != "") {
      intolerances = intolerances.slice(0, -1);
      intolerances = `&intolerances=${intolerances}`;
    }

    if (!state.checkedItems.type) return;
    Object.entries(state.checkedItems.type).filter((el) => {
      if (el[1]) {
        type = el[0] + ",";
      }
    });

    if (type != "") {
      type = type.slice(0, -1);
      type = `&type=${type}`;
    }

    state.search.query = query;
    // console.log(
    //   `${API_URL}recipes/complexSearch?query=${query}&number=${NUM_OF_RES}&intolerances=${intolerances}&addRecipeInformation=true&cuisine=${couisine}&apiKey=${API_KEY}`
    // );

    const data = await getJSON(
      `${API_URL}recipes/complexSearch?query=${query}&number=${NUM_OF_RES}&addRecipeInformation=true${intolerances}${type}${cuisine}&apiKey=${API_KEY}`
    );
    state.search.results = data.results.map((res) => {
      console.log("res", res.title);
      return {
        id: res.id,
        title: res.title,
        image: res.image,
      };
    });
  } catch (err) {
    console.log(err.message);
  }
};
