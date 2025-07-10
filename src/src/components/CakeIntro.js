import React, { useState } from "react";

function CakeIntro() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="container my-5">
      <h2 className="text-center"><i>All Cakes Recipes</i></h2>
      <p className="fs-6">
        Imagine the smell of freshly baked cakes wafting through the corridors of your home, spellbinding everyone. The decadent frosting and the soft, moist layers of the sponge cake can easily transport your family to their very own happy place.


        {!showMore && <span>...</span>}
        {showMore && (
          <span>
            <br /><br />
            Feeling intimidated? There’s no need to because now you’ll be able to create mouth-watering cakes for every occasion, big or small, in a jiffy.  Baking a cake from scratch might seem like a risky endeavour at first. But our quick recipes show you how to make cakes by following some simple steps and tips.


            <br /><br />
            For all those who’ve been wanting to bake best flavour cakes right at home, we’re here to tell you that the wait is finally over. With our quick cake recipes, you can create a whole range of cakes from simple cakes to eggless cakes and exquisite gourmet cakes in the comfort of your own kitchen!


          </span>
        )}
      </p>
      <div className="d-flex justify-content-center">
        <button
          className="btn btn-cake"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "Show Less" : "Show More >"}
        </button>
      </div>
      <style>{`
        .btn-cake {
          background-color: #ff69b4;
          color: white;
          border: none;
        }
        .btn-cake:hover {
          background-color: #ff1493;
        }
      `}</style>
    </div>
  );
}

export default CakeIntro;