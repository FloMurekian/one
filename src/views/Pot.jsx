import QuoteList from "../components/QuoteList";
import { useState } from "react";

export default function Pot() {

  const [quotes, setQuotes] = useState(() => {
    const savedQuotes = localStorage.getItem("quotes");
    return savedQuotes ? JSON.parse(savedQuotes) : [];
  });

  return (
    <>
      <QuoteList quotes={quotes} setQuotes={setQuotes} />
    </>
  )
}