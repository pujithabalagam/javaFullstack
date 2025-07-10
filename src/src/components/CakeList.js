import React from "react";

const cakeData = [
  {
    title: "Black Forest",
    img: "https://www.milkmaid.in/sites/default/files/2024-04/BlackForest-Cake-385x619_21_11zon%20%281%29.webp",
    link: "https://www.milkmaid.in/recipes/black-forest-cake",
  },
  {
    title: "Moist Chocolate Cake",
    img: "https://www.milkmaid.in/sites/default/files/2023-07/Chocolate-Cake-385x619-Revised_6_11zon.webp",
    link: "https://www.milkmaid.in/recipes/chocolate-cake",
  },
  {
    title: "Best Banana Cake",
    img: "https://www.milkmaid.in/sites/default/files/2023-07/Banana-Cake-385x619_1_11zon.webp",
    link: "https://www.milkmaid.in/recipes/banana-cake",
  },
  {
    title: "Date Cake Recipe (3 Steps)",
    img: "https://www.milkmaid.in/sites/default/files/2025-01/Date-Cake-385x619-1-web.webp",
    link: "https://www.milkmaid.in/recipes/date-bake",
  },
  {
    title: "Eggless Chocolate Truffle Cake",
    img: "https://www.milkmaid.in/sites/default/files/2023-10/choclate-truffle.webp",
    link: "https://www.milkmaid.in/recipes/eggless-chocolate-truffle-cake",
  },
  {
    title: "Milk Cake Recipe (Tres Leches)",
    img: "https://www.milkmaid.in/sites/default/files/2023-07/Rich-Milk-Cake-385x619_23_11zon.webp",
    link: "https://www.milkmaid.in/recipes/rich-milk-cake",
  },
];

function CakeList() {
  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        {cakeData.map((cake, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card" style={{ width: "100%" }}>
              <img src={cake.img} className="card-img-top" alt={cake.title} />
              <div className="card-body">
                <h5 className="card-title">{cake.title}</h5>
                <a href={cake.link} className="btn btn-primary">Try it</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CakeList;