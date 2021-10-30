import React from 'react'
import RatingStars from './RatingStars';

function Artist({artist , setSelectedArtist}) {
    const {name , popularity , images , followers} = artist;
    return (
      <article className="default-card" onClick={()=>setSelectedArtist(artist)}>
        <div className="card-image">
          {/* If there is an image display it , if no display the unknown Image */}
          {images[0] ? <img src={images[0].url} alt={name} /> : <img src="https://st3.depositphotos.com/4111759/13425/v/600/depositphotos_134255634-stock-illustration-avatar-icon-male-profile-gray.jpg" alt="unknown" />}
        </div>
        <div className="card-info">
          <div className="first-p-info">
            <h2>{name}</h2>
            <h4>{followers.total} followers</h4>
          </div>
          <RatingStars nbStars={parseInt((popularity / 20) | 0)} />
        </div>
      </article>
    );
}

export default Artist
