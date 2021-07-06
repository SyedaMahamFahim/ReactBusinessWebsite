import React from "react";

function Arrows({ prevPerson, nextPerson }) {
  return (
      <>

    <div className="next-prev-reviews">
            <span className="arrows">
                <i class="fa fa-chevron-circle-left" aria-hidden="true" onClick={prevPerson}></i>
                </span>
                <span className="arrows">
                <i class="fa fa-chevron-circle-right" aria-hidden="true" onClick={nextPerson}></i>
                </span>
                
     </div>
</>


  );
}

export default Arrows;