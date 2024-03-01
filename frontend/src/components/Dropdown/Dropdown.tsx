import { useState } from "react";
import "./Dropdown.css";

const Dropdown = () => {
  const [state, setState] = useState({ isOpen: false, addNewCategory: false });

  const handleClickOpen = () => {
    setState(prevState => ({ ...prevState, isOpen: !prevState.isOpen }));
  };

  const handleNewCategory = () => {
    setState(prevState => ({
      ...prevState,
      addNewCategory: !prevState.addNewCategory,
    }));
  };

  return (
    <div className="dropdown">
      <button className="dropdown-button" onClick={handleClickOpen}>
        Categories
      </button>

      {state.isOpen && (
        <div className="dropdown-add-main">
          <button className="dropdown-button" onClick={handleNewCategory}>
            {state.addNewCategory ? "Close" : "Add New Category"}
          </button>
          {state.addNewCategory && (
            <div className="dropdown-add-new-category">
              <input
                type="text"
                placeholder="New Categories :"
                className="dropdown-add-input"
              />
              <button
                className="dropdown-add-button"
                onClick={handleNewCategory}
              >
                ADD
              </button>
            </div>
          )}

          {!state.addNewCategory && (
            <div className="dropdown-category-list">
              <div className="dropdown-category-container">
                <div className="dropdown-category-hashtag">#</div>
                <div className="dropdown-category-name">WWWWWWWWWWWW</div>
              </div>
              <div className="dropdown-category-container">
                <div className="dropdown-category-hashtag">#</div>
                <div className="dropdown-category-name">WWWWWWWWWWWW</div>
              </div>
              <div className="dropdown-category-container">
                <div className="dropdown-category-hashtag">#</div>
                <div className="dropdown-category-name">WWWWWWWWWWWW</div>
              </div>
              <div className="dropdown-category-container">
                <div className="dropdown-category-hashtag"> #</div>
                <div className="dropdown-category-name">WWWWWWWWWWWWWWW</div>
              </div>
              <div className="dropdown-category-container">
                <div className="dropdown-category-hashtag"> #</div>
                <div className="dropdown-category-name">WWWWWWWWWWWWWWW</div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
