import "./card.css";
import { useState, useEffect } from "react";
import axios from "axios";

function Card({ setScore, setTopScore, topScore }) {
  const [datas, setDatas] = useState([]);
  const [count, setCount] = useState(0);
  const [idArray, setIdArray] = useState([]);

  const shuffle = (array) => {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  };

  const handleClick = (id) => {
    shuffle(datas);
    setDatas([...datas]);

    const newCount = count + 1;
    setCount(newCount);
    setScore(newCount);

    if (idArray.includes(id)) {
      if (count > topScore) {
        setTopScore(count);
      }
      setCount(0);
      setScore(0);
      idArray.length = 0;
      return;
    }
    setIdArray([...idArray, id]);
  };

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((response) => {
        setDatas(response.data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      {datas.map((data) => (
        <div
          className="cardContainer"
          key={data.id}
          onClick={() => handleClick(data.id)}
        >
          <img className="cardImage" src={data.image} alt="Cartoon Image" />
          <h2>{data.name}</h2>
        </div>
      ))}
    </>
  );
}

export default Card;
