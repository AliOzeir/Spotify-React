import React from "react";
import { useState, useEffect } from "react";
import useAuth from "../useAuth";
import request from "request";
import Form from "./Form";
import Artists from "./Artists";
import Albums from "./Albums";

export default function Dashboard({ code }) {
  const [search, setSearch] = useState("");
  const [artists, setArtists] = useState([]);
  const [selectedArtist, setSelectedArtist] = useState({});
  const [albums, setAlbums] = useState([]);
  const accessToken = useAuth(code);

  //If the token is valid and the search bar is not empty, get the results immediatly
  useEffect(() => {
    if (!search) return setArtists([]);
    if (!accessToken) return;

    var options = {
      url: `https://api.spotify.com/v1/search?q=${search}&type=artist&limit=30`,
      headers: {
        Authorization: "Bearer " + accessToken,
      },
      json: true,
    };
    request.get(options, function (error, response, body) {
      setArtists(body.artists.items);
      console.log(body.artists.items);
    });
  }, [search, accessToken]);

  // Fetching albums for the selected Artist
  useEffect(() => {
    if (Object.keys(selectedArtist).length === 0) return;
    if (!accessToken) return;
    var options = {
      url: `https://api.spotify.com/v1/artists/${selectedArtist.id}/albums?limit=30`,
      headers: {
        Authorization: "Bearer " + accessToken,
      },
      json: true,
    };
    request.get(options, function (error, response, body) {
      setAlbums(body.items);
      console.log(body.items);
    });
      window.history.pushState({}, null, `/${selectedArtist.name}/albums`);
      // setAlbums(neededDataAlbums);
  }, [selectedArtist]);

  useEffect(() => {
    if (Object.keys(selectedArtist).length === 0) return;
    window.addEventListener("popstate", () => {
      window.history.pushState({}, null, "/search");
      setSelectedArtist({});
    });
    return () => {
      window.removeEventListener("popstate", () => {
        window.history.pushState({}, null, "/search");
        setSelectedArtist({});
      });
    };
  });

  return (
    <section
      className={`d-flex align-items-center flex-column py-2 ${
        search || "main"
      }`}
      style={{ height: "80vh", width: "90%", margin: "auto" }}
    >
      {Object.keys(selectedArtist).length === 0 && (
        <Form search={search} setSearch={setSearch} />
      )}
      {Object.keys(selectedArtist).length === 0 && search && (
        <Artists artists={artists} setSelectedArtist={setSelectedArtist} />
      )}
      {Object.keys(selectedArtist).length !== 0 && (
        <Albums albums={albums} artistName={selectedArtist.name} />
      )}
    </section>
  );
}
