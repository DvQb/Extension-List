// CardList.jsx
import { useEffect, useState } from "react";
import Card from './Card'
import FilterButtons from "./FilterButton";

const CardList = () => {
  const [filter, setFilter] = useState("all");


  const [cards , setCards] = useState([]);

  useEffect(() => {
    fetch("/data/cards.json")
    .then((res) => res.json())
    .then((data) => setCards(data))
    .catch((err) => console.log("error" , err))
  }, []);

  const toggleCardState = (id) => {
    setCards(prevCards =>
      prevCards.map(card =>
        card.id === id ? { ...card, active: !card.active } : card
      )
    );
  };
  

  const filteredCards = cards.filter((card) => {
    if (filter === "all") return true;
    return filter === "active" ? card.active : !card.active;
  });

  return (
    <div className="mb-12">
      <FilterButtons currentFilter={filter} setFilter={setFilter} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredCards.map((card) => (
          <Card 
          key={card.id} {...card} toggleCardState={toggleCardState} />
        ))}
      </div>
    </div>
  );
};

export default CardList;


