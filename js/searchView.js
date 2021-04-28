class SearchView {
  _searchResults = document.querySelector(".search__field");
  _myCollapse = document.getElementById("collapseExsample");
  _checkedItems = document.querySelectorAll(".dropdown-item");

  //couisines
  _african = document.getElementById("african");
  _american = document.getElementById("american");
  _british = document.getElementById("british");
  _chinese = document.getElementById("chinese");
  _european = document.getElementById("european");
  _italian = document.getElementById("italian");
  _mediterranean = document.getElementById("mediterranean");
  _mexican = document.getElementById("mexican");

  //   intolerances
  _egg = document.getElementById("egg");
  _gluten = document.getElementById("gluten");
  _peanut = document.getElementById("peanut");
  _soy = document.getElementById("soy");

  // type

  _breakfast = document.getElementById("breakfast");
  _salad = document.getElementById("salad");
  _dessert = document.getElementById("dessert");
  _soup = document.getElementById("soup");
  _snack = document.getElementById("snack");
  _marinade = document.getElementById("marinade");

  checkedBoxes = {
    couisine: {
      african: false,
      american: false,
      british: false,
      chinese: false,
      european: false,
      italian: false,
      mediterranean: false,
      mexican: false,
    },
    intolerances: {
      egg: false,
      gluten: false,
      peanut: false,
      soy: false,
    },
    type: {
      breakfast: false,
      salad: false,
      dessert: false,
      soup: false,
      snack: false,
      marinade: false,
    },
  };

  getQuery() {
    const query = this._searchResults.querySelector(".search__field--text")
      .value;
    this.cleanInput();
    return query;
  }

  cleanInput() {
    this._searchResults.querySelector(".search__field--text").value = "";
  }

  addHandlerSearch(handler) {
    this._searchResults.addEventListener("submit", (e) => {
      e.preventDefault();
      this.hideCollapse();
      // couisine
      this.checkedBoxes.couisine.african = this._african.checked;
      this.checkedBoxes.couisine.american = this._american.checked;
      this.checkedBoxes.couisine.british = this._british.checked;
      this.checkedBoxes.couisine.chinese = this._chinese.checked;
      this.checkedBoxes.couisine.european = this._european.checked;
      this.checkedBoxes.couisine.italian = this._italian.checked;
      this.checkedBoxes.couisine.mediterranean = this._mediterranean.checked;
      this.checkedBoxes.couisine.mexican = this._mexican.checked;

      // intolerances
      this.checkedBoxes.intolerances.egg = this._egg.checked;
      this.checkedBoxes.intolerances.gluten = this._gluten.checked;
      this.checkedBoxes.intolerances.peanut = this._peanut.checked;
      this.checkedBoxes.intolerances.soy = this._soy.checked;

      // type
      this.checkedBoxes.type.breakfast = this._breakfast.checked;
      this.checkedBoxes.type.salad = this._salad.checked;
      this.checkedBoxes.type.dessert = this._dessert.checked;
      this.checkedBoxes.type.soup = this._soup.checked;
      this.checkedBoxes.type.snack = this._snack.checked;
      this.checkedBoxes.type.marinade = this._marinade.checked;

      handler(this.checkedBoxes);
    });
  }
  hideCollapse() {
    document.getElementById("collapseExample").className = "collapse";
  }
  //   checkCheckboxes() {
  //     if (this._african.checked == false) console.log("checked");
  //   }
}

export default new SearchView();
