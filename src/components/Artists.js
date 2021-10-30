import React from "react";
import Artist from "./Artist";

function Artists({ artists , setSelectedArtist }) {
  return (
    <>
      <section className="display-cards">
          {artists.map((artist) => {
             return  <Artist key={artist.id} artist={artist} setSelectedArtist={setSelectedArtist} />
          })}
      </section>
    </>
  );
}

export default Artists;
