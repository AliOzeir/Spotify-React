import React from 'react'

function Album({album , artistName}) {
    const { name, images, total_tracks, release_date, external_urls } = album;
    return (
      <div className="album-card">
      <article className="default-card">
        <div className="card-image">
          {/* If there is an image display it , if no display the unknown Image */}
          {images[0] ? (
            <img src={images[0].url} alt={name} />
          ) : (
            <img
              src="https://st3.depositphotos.com/4111759/13425/v/600/depositphotos_134255634-stock-illustration-avatar-icon-male-profile-gray.jpg"
              alt="unknown"
            />
          )}
        </div>
        <div className="card-info">
          <div className="first-p-info">
            <h2>{name}</h2>
            <h4>{artistName}</h4>
          </div>
          <div className="second-p-info">
            <h4>{release_date}</h4>
            <h4>{total_tracks} tracks</h4>
          </div>
        </div>
      </article>
      <div className="preview">
        <a href={external_urls.spotify}>Preview on Spotify</a>
      </div>
      </div>
    );
}

export default Album
