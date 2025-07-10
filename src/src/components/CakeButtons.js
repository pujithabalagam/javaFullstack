import React from "react";

function CakeButtons() {
  return (
    <div className="container text-center my-4">
      <a href="#allCakes" className="btn custom-btn mx-2">
        <img src="https://www.milkmaid.in/themes/custom/milkmaid/common/svg/cake.svg" alt="Cake" style={{ width: 50, height: 50, marginRight: 5 }} />
        All Cakes
      </a>
      <a href="#egglessCakes" className="btn custom-btn mx-2">
        <img src="https://uxwing.com/wp-content/themes/uxwing/download/food-and-drinks/egg-free-icon.svg" alt="Eggless" style={{ width: 50, height: 50, marginRight: 5 }} />
        Eggless Cakes
      </a>
      <a href="#allRecipes" className="btn custom-btn mx-2">
        <img src="https://www.milkmaid.in/themes/custom/milkmaid/common/svg/all-recipes.svg" alt="Recipes" style={{ width: 50, height: 50, marginRight: 5 }} />
        All Recipes
      </a>
      <style>{`
        .custom-btn {
          background-color: white;
          color: #333;
          border: 2px solid #ccc;
          border-radius: 25px;
          padding: 10px 20px;
          font-weight: 500;
          transition: all 0.3s ease;
          text-decoration: none;
        }
        .custom-btn:hover {
          background-color: #f8f9fa;
          border-color: #999;
          color: #000;
        }
      `}</style>
    </div>
  );
}

export default CakeButtons;