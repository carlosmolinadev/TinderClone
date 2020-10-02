import React, { useEffect, useState } from "react";
import TinderCard from "react-tinder-card";
import db from "./firebase";
import "./TinderCards.css";

function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: "Carlos Molina",
      url:
        "https://machinecurve.com/wp-content/uploads/2019/07/thispersondoesnotexist-1-1022x1024.jpg",
    },
  ]);

  //Piece of code that runs in a condition
  useEffect(() => {
    //this is where the code runs

    //It returns the document with all the properties
    const unsubcribe = db
      .collection("people")
      .onSnapshot((snapshot) =>
        setPeople(snapshot.docs.map((doc) => doc.data()))
      );

    return () => {
      //This is the cleanup
      unsubcribe();
    };
  }, []);

  return (
    <>
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </>
  );
}

export default TinderCards;
