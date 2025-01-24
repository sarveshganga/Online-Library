import "./style.css"

function Book(props) {
  return (
    <div className="book-card">
    <img src={props.Bookdetails.coverImage} alt=""
     width="200px" height="200px" 
    
    className="book-cover"
    
    />
    <div className="book-details">
        <h2 className="book-title">{props.Bookdetails. title}</h2>
        <p className="book-auther">{props.Bookdetails.author}</p>
        <p className="book-discription">{props.Bookdetails.description}</p>
        <p className="book-rating">{props.Bookdetails.rating}</p>
        <a href={`/bookDetails/${props.Bookdetails.id}`} className="details-link">View Details</a>
    </div>
    </div>
  )
}

export default Book;
