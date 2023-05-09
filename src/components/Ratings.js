export default function ratingStar(rating){
	const stars = []           
	for (let i = 0; i < 5; i++) {
		const className = i < rating ? "fullStar" : "emptyStar"
	   stars.push(<span className={className} key={i}>&#9733;</span>)
	}
	return stars
  }

