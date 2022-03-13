import React from 'react';
import './QuoteCard.css';

function QuoteCard(props) {

  return (
    <figure className="QuoteCard">
      <img src={props.simpson.image} alt={props.simpson.character} />
      <figcaption>
        <blockquote>{props.simpson.quote}</blockquote>
        <cite>{props.simpson.character}</cite>
      </figcaption>
    </figure>
  );
}

export default QuoteCard;
