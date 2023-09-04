function paginate(array, page_size = 10, page_number = 1) {
  // human-readable page numbers usually start with 1, so we reduce 1 in the first argument
  let newData = array.slice(
    (page_number - 1) * page_size,
    page_number * page_size
  );

  return newData;
}


// 50

// 1
// 5

array = new Array(50)

// 0-5 =45hide
// 5-10 =40 hide
// 10-15 =35 hide

// 1-1=0*5 =0
// 1*5=     5

// 2-1=1*5 = 5
// 2*5=      10

function getMeal(searchButton) {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchButton}`
  fetch(url)
    .then((res) => res.json())
    .then((data) => maruf(data.meals));
}

const displayMealdb = (meals) => {
//   console.log(meals);
  const mealContainer = document.getElementById("container-div");
  mealContainer.innerText =' '
//   console.log(mealContainer);
  meals.forEach((meal) => {
    // console.log(meal);
    const mealDiv = document.createElement("div");
    mealDiv.classList.add("col");
    mealDiv.innerHTML = `
    <div class="card mb-3" style="max-width: 540px;">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="${
          meal.strMealThumb
        }" class="img-fluid rounded-start" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${meal.strMeal}</h5>
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p class="card-text"><small class="text-body-secondary">${
            meal.strTags ? meal.strTags : "unknown"
          }</small></p>
        </div>
      </div>
    </div>
  </div>
    `;
    mealContainer.appendChild(mealDiv);
  });
};

function maruf(mealsData) {
  let pageSize = 6;
  let pageNumber = 1;
  let formetedData = paginate(mealsData, pageSize, pageNumber);

  let pagination = document.querySelector(".paginations");

  pagination.addEventListener("click", () => {
    pageNumber++;
    formetedData = paginate(mealsData, pageSize, pageNumber);
    displayMealdb(formetedData);
  });

  displayMealdb(formetedData);
}




const searchButton = () => {
    const inputField = document.getElementById("input-fied").value;
    getMeal(inputField)
}

getMeal('a');