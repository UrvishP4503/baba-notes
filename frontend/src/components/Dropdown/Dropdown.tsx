import { useState } from "react";
import "./Dropdown.css";
import { useMutation, useQuery, QueryClient } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import axios from "axios";

interface Category {
  id: number;
  name: string;
  userId: string;
}

const makeNewCategory = async (category: { category: string }) => {
  return await axios.post("http://127.0.0.1:3000/category", category, {
    withCredentials: true,
  });
};

const getUserCategories = async () => {
  return await axios.get("http://127.0.0.1:3000/category", {
    withCredentials: true,
  });
};
const queryClient = new QueryClient();

const Dropdown = () => {
  const [state, setState] = useState({
    isOpen: false,
    addNewCategory: false,
    categories: [],
  });

  const { data, isError, isLoading } = useQuery({
    queryKey: ["category"],
    queryFn: getUserCategories,
  });

  if (!isError && !isLoading) {
    setState(prevState => ({ ...prevState, categories: data?.data }));
  }

  const { mutate } = useMutation({
    mutationFn: makeNewCategory,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["category"] });
    },
  });

  const handleClickOpen = () => {
    setState(prevState => ({ ...prevState, isOpen: !prevState.isOpen }));
  };

  const handleNewCategory = () => {
    setState(prevState => ({
      ...prevState,
      addNewCategory: !prevState.addNewCategory,
    }));
  };

  const handleAddNewCategory = () => {
    const newCategory = (
      document.querySelector(".dropdown-add-input") as HTMLInputElement
    ).value;
    if (newCategory) {
      mutate(newCategory, {
        onSuccess: () => {
          setState(prevState => ({ ...prevState, addNewCategory: false }));
        },
      });
    }
  };

  return (
    <div className="dropdown">
      <button className="dropdown-button" onClick={handleClickOpen}>
        Categories
      </button>

      {state.isOpen && (
        <div className="dropdown-add-main">
          {!state.addNewCategory && (
            <button className="dropdown-button">Delete</button>
          )}
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
                onClick={handleAddNewCategory}
              >
                ADD
              </button>
            </div>
          )}

          {isLoading ? (
            <div>Loading...</div>
          ) : isError ? (
            <div>Error</div>
          ) : (
            <div>
              {state.categories.map((category: Category) => {
                return (
                  <Link
                    to={`/category/${category.id}`} // TODO: Impliment this
                    key={category.id}
                    className="dropdown-category-container"
                  >
                    <div className="dropdown-category-hashtag">#</div>
                    <div className="dropdown-category-name">
                      {category.name}
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
