import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchQuote } from "../store/action";


export default function KanyeQuoteView() {
  
  const quote = useSelector((state) => state.quote.quote);
  
  const [favorites, setFavorites] = useState([])
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchQuote());
    
  }, []);

  const getQuote = () => {
    dispatch(fetchQuote());
  }

  const addQuote = () => {
    if(!favorites.includes(quote)){

      setFavorites([...favorites, quote])
    }
  }

  return (
    <section style={{ textAlign: "center" }}>
      <img
        src="https://images.businessoffashion.com/profiles/asset/1797/43897e2e4a6d155d72dd9df352017b546ef9e229.jpeg"
        alt="W3Schools.com"
        style={{ width: "300px" }}
      />
      <h1 style={{ fontSize: "40px", marginTop: "10px" }}>Kanye-West Quote</h1><br/>

      <h3>{quote}</h3><br/>
      <button onClick={getQuote} >Get Quote</button>
      <button onClick={addQuote}>Add Favorite</button> <br/>
      {favorites.map((favorite, index)=>{
        return (
          <>
          <h6 key={index}>{favorite}</h6><br/></>
        )
      })}
    </section>
  );
}
