import React from "react";
import { useEffect, useState } from "react";


export default function PersonalQuoteView() {
  const [myQuotes, setMyQuotes] = useState([])
  const [myQuote, setMyQuote] = useState("")
  const addMyQuote = (e) => {
    e.preventDefault()
    if(!myQuotes.includes(myQuote)){

      setMyQuotes([...myQuotes, myQuote])
    }
  }

  return (
    <section style={{ textAlign: "center", marginTop: "60px" }}>
      <hr style={{ maxWidth: "30%" }} />
      <h2>My Quotes</h2>
      <form onSubmit={addMyQuote}>
        <input
        value={myQuote}
        onChange={(e)=>{setMyQuote(e.target.value)}}
        />
        <button
          type={`submit`}
        >
          Submit
        </button>
      </form>
      {myQuotes.map((myQuote, index)=>{
        return (
          <>
          <h6 key={index}>{myQuote}</h6><br/></>
        )
      })}
    </section>
  );
}
