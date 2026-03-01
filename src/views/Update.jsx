import { useState, useEffect } from "react";

export default function Update({ quotes, setQuotes }) {

  const [author, setAuthor] = useState("");
  const [text, setText] = useState("");

  useEffect(() => {
    localStorage.setItem("quotes", JSON.stringify(quotes));
  }, [quotes]);

  function createHandler(e) {
    e.preventDefault();

    const highestId =
      quotes.length > 0
        ? Math.max(...quotes.map(q => q.id))
        : -1;

    const newQuote = {
      id: highestId + 1,
      author,
      text   
    };

    setQuotes([...quotes, newQuote]);

    setAuthor("");
    setText("");
  }

  return (
    <form style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "400px", margin: "0 auto" }} onSubmit={createHandler}>

      <h2 style={{ marginBottom: "15px", fontFamily: "Arial, sans-serif", fontSize: "24px", fontWeight: "bold", display: "flex", justifyContent: "center" }}>Add a Quote</h2>

      <label style={{ fontFamily: "Arial, sans-serif", fontSize: "14px", fontWeight: "bold" }}>Author: </label>
      <input
        type="text"
        value={author}
        required
        onChange={e => setAuthor(e.target.value)}
      />

      <label style={{ fontFamily: "Arial, sans-serif", fontSize: "14px", fontWeight: "bold" }}>Text: </label>
      <textarea
        value={text}
        required
        onChange={e => setText(e.target.value)}
      />

      <button type="submit">Add</button>
    </form>
  );
}