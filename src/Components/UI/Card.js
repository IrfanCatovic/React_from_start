import React from "react";
import "./Card.css";

const Card = (props) => {
  const classes = "card " + props.className; //ovo radimo da ne bismo zaboravili ostali deo css za div, nego da racuna i nasu kompnentu cards.css i njegov css
  //Da bismo koristil Card u ostale componente moramo da napisemo
  //import Card from './Card'
  //da zamenimo imena div sa imeno Card da bi dobilo nas izgled
  //da napisemo ovde props.children i onda ce da se prikazuje sve sto se nalazi u html u drugim komponentama, da ne bi bio prazan box
  //card je creiran samo da se ne bi code ponavljao na vise mesta, sve se nalazi u cards.css

  return <div className={classes}>{props.children}</div>;
};

export default Card;
