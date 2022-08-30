export default function Card(props){
    return(
        <div>
            <div className="card">
            <img className="logo" src={`images/${props.imgUrl}`} alt="nice" />
                <div className="details">
                    <div className="maps">
                        <h2 className="location"><i class="fa-solid fa-location-dot"></i> {props.location}</h2>
                        <a className="Google" target="_blank" href={props.googleMap}>View On google maps</a>
                    </div>
                    <h1 className="place-name">{props.title}</h1>
                    <p className="start-end">{props.startDate} - {props.endDate}</p>
                    <p className="details-text">{props.description}</p>
                </div>
            </div>
        </div>
    )
}