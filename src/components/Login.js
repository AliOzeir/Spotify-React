import React, { useEffect } from 'react'
import { FaSpotify } from "react-icons/fa";

const AUTHORIZE = 'https://accounts.spotify.com/authorize?client_id=acd05d13f54a492bb113f5bcd2784874&response_type=code&redirect_uri=http://localhost:3000'

export default function Login() {
  useEffect(() => {
    window.history.pushState({}, null, "/Login");
  }, [])
    return (
      <>
      <div className="landing-pg">
        <a className="btnn" href={AUTHORIZE}>
          Login <FaSpotify className="spotify-icon" />
        </a>
      </div>
      </>
    );
}
