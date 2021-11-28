import React, { useState, useEffect } from "react";
import Card from "../utilits/card";
import "./recipeCard.scss";

const styles = {
  box: {
    position: "relative",
    padding: "10px",
    height: "100%",
    backgroundColor: "#FFFFFF",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    listStyleType: "none",
  },
  container: {
    marginBottom: "20px",
    width: "70%"
  },
};

function Events() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const storageData = JSON.parse(localStorage.getItem('recipes'));
    setPosts({...storageData});
  }, [setPosts]);  

  // console.log(posts);

  return (
    <ul style={styles.box}>
      {Object.entries(posts).map((post, index) => {
        console.log(post);
        return (
          <li style={styles.container} key={index}>
            <Card
              name={post[1].strMeal}
              area={post[1].strArea}
              instruction={post[1].strInstructions}
              categoty={post[1].strCategory}
              picture={post[1].strMealThumb}
            />
          </li>
        );
      })}
    </ul>
  );
}

export default Events;
