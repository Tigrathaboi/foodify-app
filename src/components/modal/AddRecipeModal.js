import React, { useState } from "react";
import createStorageData from "../utilits/createStorageData";
import updateStorageData from "../utilits/updateStorageData";
import TextInput from "../utilits/TextInput";
import "./addRecipeModal.scss";

const DESTROY_DELAY = 150;

const AddRecipeModal = ({ handleDestroyModal }) => {
  const [name, setName] = useState("");
  const [instruction, setInstruction] = useState("");
  const [area, setArea] = useState("");
  const [category, setCategory] = useState("");
  const [createButtonText, setCreateButtonText] = useState("Create");


  const updateName = (e) => {
    setName(e.currentTarget.value);
  };

  const updateInstruction = (e) => {
    setInstruction(e.currentTarget.value);
  };

  const updateArea = (e) => {
    setArea(e.currentTarget.value);
  };

  const updateCategory = (e) => {
    setCategory(e.currentTarget.value);
  };

  const handleAddDish = () => {
    setCreateButtonText("Adding...");
    setTimeout(() => {
      setCreateButtonText("Create");
    }, DESTROY_DELAY);
  };

  const handleCreateDish = () => {
    const customDish = {
      strArea: area || "Any",
      strCategory: category || "Any",
      strInstructions: instruction || "Default",
      strMeal: name || "Default",
      strMealThumb: "",
    };

    

    if (localStorage.getItem("recipes")) {
      updateStorageData(customDish);
    } else {
      createStorageData(customDish);
    }
    handleAddDish();
    // handleSetRecipes(customDish);

    setTimeout(() => {
      handleDestroyModal();
    }, DESTROY_DELAY);
  };

  return (
    <div className="modal">
      <div className="modal_wrapper">
        <form className="modal_form">
          <TextInput
            labelName="Dish name"
            name="name"
            value={name}
            handler={updateName}
            classList="modal_text-input"
          />
          <TextInput
            labelName="Area of cuisine"
            name="area"
            value={area}
            handler={updateArea}
            classList="modal_text-input"
          />
          <TextInput
            labelName="Category"
            name="category"
            value={category}
            handler={updateCategory}
            classList="modal_text-input"
          />
          <label className="modal_textarea-label" htmlFor="instruction">
            Instructions
            <textarea
              className="modal_textarea"
              name="instruction"
              value={instruction}
              onChange={updateInstruction}
            />
          </label>
        </form>
        <div className="modal_buttons-wrapper">
          <button className="modal_cancel-button" onClick={handleDestroyModal}>
            Cancel
          </button>
          <button className="modal_create-button" onClick={handleCreateDish}>
            {createButtonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddRecipeModal;
