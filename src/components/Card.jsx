import styles from './Card.module.css'
function Card( {imageUrl, title, genres, showId }){

    return(
        <>
         <div className={styles.card}>
            <img src={imageUrl}/>
            <div className="detail">
                <h4>{title}</h4>
                <p>{genres.toString()}</p>
                <a href={"/detail/"+ showId}>Details</a>
            </div>
        </div> 
        </>
    )
}
export default Card