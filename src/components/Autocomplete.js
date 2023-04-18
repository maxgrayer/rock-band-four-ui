import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import SongItem from "./SongItem";

const Autocomplete = (props) => {
  const items = props.songs;

  const [state, setState] = useState({
    activeItem: 0,
    filteredItems: [],
    displayItems: false,
    inputValue: "",
  });

  const handleChange = (e) => {
    const inputValue = e.currentTarget.value;
    const filteredItems = items.filter(
      (option) =>
        option.artist.toLowerCase().indexOf(inputValue.toLowerCase()) > -1 ||
        option.title.toLowerCase().indexOf(inputValue.toLowerCase()) > -1
    );

    setState({
      activeItem: 0,
      filteredItems,
      displayItems: true,
      inputValue: e.currentTarget.value,
    });
  };

  const handleKeyDown = (e) => {
    const { activeItem, filteredItems } = state;

    if (e.keyCode === 13) {
      // keyCode 13 is the "enter" key
      setState({
        activeItem: 0,
        filteredItems: [],
        displayItems: false,
        inputValue: filteredItems[activeItem],
      });
    } else if (e.keyCode === 38) {
      // keyCode 38 is the up arrow key
      e.preventDefault();
      if (activeItem === 0) {
        return;
      }
      setState({
        activeItem: activeItem - 1,
        filteredItems,
        displayItems: true,
        inputValue: e.currentTarget.value,
      });
    } else if (e.keyCode === 40) {
      // keyCode 40 is the down arrow
      e.preventDefault();
      if (
        (filteredItems && activeItem === filteredItems.length - 1) ||
        activeItem >= 9
      ) {
        return;
      }
      setState({
        activeItem: activeItem + 1,
        filteredItems,
        displayItems: true,
        inputValue: e.currentTarget.value,
      });
    }
  };

  return (
    <div className="search-field">
      <input
        name="songs"
        placeholder="Enter an artist or title"
        value={state.inputValue}
        autoComplete="off"
        autoCapitalize="off"
        autoCorrect="off"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      {state.displayItems &&
      state.inputValue.length &&
      state.filteredItems.length ? (
        <div>
          <div>Results Count: {state.filteredItems.length}</div>
          <Row xs="auto" className="g-4 song-results">
            {state.filteredItems
              .map((optionSong) => {
                return (
                  <Col>
                    <SongItem key={optionSong.id} {...optionSong} />
                  </Col>
                );
              })
              .slice(0, 14)}
          </Row>
        </div>
      ) : null}
    </div>
  );
};

export default Autocomplete;
