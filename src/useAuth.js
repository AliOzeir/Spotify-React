import { useState, useEffect } from "react";
import request from "request";
export default function useAuth(code) {
  const [accessToken, setAccessToken] = useState();
  var client_id = "acd05d13f54a492bb113f5bcd2784874";
  var client_secret = "58821cb244ac453cb792e60a09453a68";
  
  var authOptions = {
    url: "https://accounts.spotify.com/api/token",
    headers: {
      Authorization:
        "Basic " +
        new Buffer(client_id + ":" + client_secret).toString("base64"),
    },
    form: {
      grant_type: "client_credentials",
    },
    json: true,
  };

  useEffect(() => {
    request.post(authOptions, function (error, response, body) {
      if (!error && response.statusCode === 200) {
        // use the access token to access the Spotify Web API
        var token = body.access_token;
        setAccessToken(token);
        console.log(token);
      }
    });
  }, [code])
  
  return accessToken;
}
