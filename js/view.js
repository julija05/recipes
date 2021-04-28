class View {
  _data;
  _recipeData;
  _dataSearch;
  _searchResults = document.querySelector(".results");
  _recipe = document.querySelector(".recipe");

  render(data) {
    this._data = data;
    // const id = window.location.hash.slice(1);

    const html = `<li class="preview grid-container">
            <a class="preview__link preview__link--active" href="#${this._data.id}">
              <figure class="preview__fig">
                <img src="${this._data.image}" alt="${this._data.title}" />
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">${this._data.title}</h4>
                
                </div>
              </div>
            </a>
          </li>`;

    this._searchResults.insertAdjacentHTML("afterbegin", html);
    // console.log(id);
  }

  renderRecipe(data) {
    this._recipeData = data;

    const ing = this._recipeData.ingredients
      .map((ing) => ` <li class="ingredients__list--item">${ing}</li>`)
      .join("");

    const html = `
     <div class="recipe__view">
                <div class="title">
                  <h3>${this._recipeData.title}</h3>
                </div>
                <figure class="image">
                  <img src="${this._recipeData.image}" alt="Test" />
                </figure>
                <div class="informations">
                  <div class="cooking--time">
                    ${this._recipeData.cookTime} min

                    <i class="fas fa-clock" title="Edit"> </i>
                  </div>
                  <div class="portions">
                   ${this._recipeData.servings}
                    <i class="fas fa-user-friends"></i>
                  </div>
                </div>

                <div class="ingredients">
                  <p>Ingredients:</p>
                  <ul class="ingredients__list">
                   ${ing}
                    
                  </ul>
                </div>
                <div class="instructions">
                  <p>
                   ${this._recipeData.instructions}
                  </p>
                </div>
              </div>
      
      `;
    this.clearRecipes();
    this._recipe.insertAdjacentHTML("afterbegin", html);
  }

  clearRecipes() {
    this._recipe.innerHTML = "";
  }
  clearSearchResults() {
    this._searchResults.innerHTML = "";
  }
}
export default new View();
