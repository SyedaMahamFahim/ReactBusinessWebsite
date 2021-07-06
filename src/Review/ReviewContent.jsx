const ReviewContent = ({ reviewData,activeIndex  }) => {
    return (
        <>
            <section className="reviews">
                {reviewData.map((review, index) => (
                     <div className="review-container"
                     key={index}
                     className={index === activeIndex ? "reviews review-active" : "review-inactive"}>
                     <div className="review-image">
                         <span className="quote"><i class="fa fa-quote-right" aria-hidden="true"></i></span>
                         
                         <img src={review.image} alt="" className="reviwer-img"/>
                         <span className="bg-color"></span>
                     </div>
                     <div className="review-content">
                         <h3 className="review-title-name">
                             {review.name}
                         </h3>
                         <h5 className="review-position">
                             {review.job}
                         </h5>
                         <p className="review">
                             {review.text}.
                         </p>
                     </div>
                 </div>

                ))}
            </section>

           




         
        </>
    )
}
export default ReviewContent