import React, { useEffect, useState } from "react";
import SongsLoading from "./SongsLoading";
import BareList from "./BareList";
import axios from "axios";

function Songs() {
  const BareListWithLoading = SongsLoading(BareList);
  const [appState, setAppState] = useState({
    loading: false,
    errorMessage: null,
    songs: null,
  });

  useEffect(() => {
    setAppState({ loading: true, errorMessage: null, songs: null });
    const apiUrl = "http://localhost:8080/songs/";
    axios
      .get(apiUrl, {
        timeout: 5000,
      })
      .then((response) => response.data)
      .then((songs) => {
        setAppState({ loading: false, errorMessage: null, songs: songs });
      })
      .catch(function (error) {
        console.log("FULL ERROR: " + error);
        setAppState({
          loading: false,
          errorMessage: error.message,
          songs: null,
        });
      });
  }, [setAppState]);
  return (
    <div className="songs-container">
      <BareListWithLoading
        isLoading={appState.loading}
        errorMessage={appState.errorMessage}
        songs={appState.songs}
      />
    </div>
  );
}

export default Songs;
