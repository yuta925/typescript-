import { useEffect, useState } from "react";
import { Credentials } from "./Credentials";
import axios from "axios";

const Artisttest = () => {
  const spotify = Credentials();
  //Credentials.jsにClientIdとClientSecretを格納してます

  const [token, setToken] = useState("");
  const [artists, setArtists] = useState({ artistsName: "", artistsId: "" });
  const [album, setAlbum] = useState({ albumName: "", albumImage: "" });

  useEffect(() => {
    // tokenを発行し、権限を付与
    // 付与されたTokenをuseStateのtokenに代入し、値を保持
    axios("https://accounts.spotify.com/api/token", {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization:
          "Basic " + btoa(spotify.ClientId + ":" + spotify.ClientSecret),
      },
      data: "grant_type=client_credentials",
      method: "POST",
    }).then((tokenResponse) => {
      console.log(tokenResponse.data.access_token);
      setToken(tokenResponse.data.access_token);

      // / 上記で付与されたtokenを使い、Spotify APIにアクセス
      axios(`https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg`, {
        method: "GET",
        headers: { Authorization: "Bearer " + tokenResponse.data.access_token },
      }).then((artistsReaponse) => {
        setArtists({
          artistsName: artistsReaponse.data.name,
          artistsId: artistsReaponse.data.id,
        });
      });

      axios("https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy", {
        method: "GET",
        headers: { Authorization: "Bearer " + tokenResponse.data.access_token },
      }).then((albumResponse) => {
        setAlbum({
          albumName: albumResponse.data.name,
          albumImage: albumResponse.data.images[0].url,
        });
      });
    });
  }, []);
  console.log(artists);
  console.log(album);
  return (
    <div>
      <h2>{artists.artistsName}</h2>
      <h2>{artists.artistsId}</h2>
      <img
        src={album.albumImage}
        alt={album.albumName}
        className="w-[200px] h-[200px]"
      />
    </div>
  );
};

export default Artisttest;
