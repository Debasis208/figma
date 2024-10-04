

function Card(props){

    const data =  props.data;

    return (
        <div className="Card">
            <img alt={data.Name} src={data.Photo}/>
            <div  className="card_details">
                <h3 className="card_details_name">{data.Name}</h3>
                <h4 className="card_details_price">{data.Price}</h4>
            </div>
            <button className="buy_now">Buy Now</button>
        </div>
    )
}


export  default Card;

