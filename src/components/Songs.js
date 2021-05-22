import React, { useEffect, useState } from "react";
import SongsLoading from "./SongsLoading";
import BareList from "./BareList";

function Songs() {
  const BareListWithLoading = SongsLoading(BareList);
  const [appState, setAppState] = useState({
    loading: false,
    songs: null,
  });

  useEffect(() => {
    setAppState({ loading: true, songs: null });
    const apiUrl = "http://localhost:8080/songs/";
    fetch(apiUrl)
      .then((response) => response.json())
      .then((songs) => {
        setAppState({ loading: false, songs: songs });
      });
  }, [setAppState]);
  return (
    <div className="songs-container">
      <BareListWithLoading
        isLoading={appState.loading}
        songs={appState.songs}
      />
    </div>
  );
}

export default Songs;
