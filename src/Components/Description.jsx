import React from "react";
import CartIcon from "./Icons/CartIcon";
import QuantityButton from "./QuantityButton";

const Description = ({ onQuant, onAdd, onRemove, onSetOrderedQuant }) => {
  return (
    <section className="description">
      <p className="pre">Radio Elmos Apresenta</p>
      <h1>Pilula estrondosa</h1>
      <p className="desc">
        Use uma pilula a cada sexta, disponivel nas principais plataformas digitais, ao vivo toda sexta as meia noite.
      </p>
      <div className="price">
        <div className="main-tag">
          <p>R$69.96</p>
          <p>50%</p>
        </div>
        <s>R$666.66</s>
      </div>
      <div className="buttons">
        <QuantityButton onQuant={onQuant} onRemove={onRemove} onAdd={onAdd} />
        <button
          className="add-to-cart"
          onClick={() => {
            onSetOrderedQuant(onQuant);
          }}
        >
          <CartIcon />
          Ouvir
        </button>
      </div>
    </section>
  );
};

export default Description;
