import React from 'react'
import Album from "./Album"

function Albums({albums , artistName}) {
    return (
      <>
        <div className="albums-title">
          <h2>{artistName}</h2>
          <h3>Albums</h3>
        </div>
        <section className="display-cards">
          {albums.map((album) => {
            return (
              <Album key={album.id} album={album} artistName={artistName} />
            );
          })}
        </section>
      </>
    );
}

export default Albums
