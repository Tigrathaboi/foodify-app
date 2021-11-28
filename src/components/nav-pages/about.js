import React, { useState, useEffect } from "react";
import createStorageData from "../utilits/createStorageData";
import updateStorageData from "../utilits/updateStorageData";
import axios from "axios";
import Card from "../utilits/card";
import "./recipeCard.scss";

const styles = {
  box: {
    position: "relative",
    padding: "10px",
    display: "flex",
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  dish_card: {
    width: "50%",
    height: "100%",
    left: "525px",
    top: "207px",
  },
  btn: {
    width: "192px",
    height: "45px",
    left: "723px",
    top: "712px",
    color: "gray",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "18px",
    lineHeight: "21px",
    backgroundColor: "white",
    marginLeft: "4px",
    border: "gray",
    borderRadius: "4px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
    boxSizing: "border-box",
  },
  btn_container: {
    marginTop: "10px",
    padding: "2px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
};

function About() {
  const [posts, setPosts] = useState([]);

  function skipClick() {
    console.log("По кнопке кликнули");
    axios
      .get("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((res) => {
        const allMeals = res.data.meals[0];
        setPosts(allMeals);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function likeClick() {
    console.log("По кнопке кликнули");
    if (localStorage.getItem("recipes")) {
      updateStorageData(posts);
    } else {
      createStorageData(posts);
    }
  }

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((res) => {
        const allMeals = res.data.meals[0];
        setPosts(allMeals);
        // console.log(allMeals);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setPosts]);

  return (
    <div style={styles.box} key={posts.idMeal}>
      <div style={styles.dish_card}>
        <Card
          name={posts.strMeal}
          area={posts.strArea}
          instruction={posts.strInstructions}
          categoty={posts.strCategory}
          picture={posts.strMealThumb}
        />
        <div style={styles.btn_container}>
          <button style={styles.btn} onClick={skipClick}>
            Skip
          </button>
          <button style={styles.btn} onClick={likeClick}>
            Like
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
