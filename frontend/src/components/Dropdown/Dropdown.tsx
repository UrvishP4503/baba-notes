import { useState } from "react";
import "./Dropdown.css";
import { useMutation, useQuery, QueryClient } from "react-query";
import { getUserCategories } from "./fetchCategories";
import { Link } from "react-router-dom";
import axios from "axios";

interface Category {
  id: number;
  name: string;
  userId: string;
}

const makeNewCategory = async (category: string) => {
  return await axios.post(
    "http://127.0.0.1:3000/category",
    { category },
    { withCredentials: true },
  );
};

const queryClient = new QueryClient();

const Dropdown = () => {
  const [state, setState] = useState({ isOpen: false, addNewCategory: false });

  const { data, isError, isLoading } = useQuery({
    queryKey: ["category"],
    queryFn: getUserCategories,
    enabled: !state.addNewCategory,
    cacheTime: 120000,
    staleTime: 120000,
  });

  const { mutate } = useMutation(makeNewCategory);

  const handleClickOpen = () => {
    setState(prevState => ({ ...prevState, isOpen: !prevState.isOpen }));
  };

  const handleNewCategory = () => {
    setState(prevState => ({
      ...prevState,
      addNewCategory: !prevState.addNewCategory,
    }));
  };

  const addNewCategory = () => {
    const newCategory = document.querySelector(
      ".dropdown-add-input",
    ) as HTMLInputElement;

    if (newCategory.value !== "") {
      console.log(newCategory.value);
      mutate(newCategory.value);
      queryClient.invalidateQueries("category");

      handleNewCategory();
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
              <button className="dropdown-add-button" onClick={addNewCategory}>
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
              {data?.data.category.map((category: Category) => {
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
