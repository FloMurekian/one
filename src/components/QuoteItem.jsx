export default function QuoteItem({ quote, setQuotes }) {

  function deleteHandler(id) {
    const isConfirmed = window.confirm("Are you sure you want to delete this quote?");
    if (isConfirmed) {
      setQuotes(prev => prev.filter(q => q.id !== id));
    }
  }

  return (

    <div style={{ border: "1px solid #ccc", padding: "15px", borderRadius: "5px", display: "flex", alignItems: "center", justifyContent: "space-between", margin: "30px 200px" }}>


      <div>

        <p style={{ margin: 0, fontFamily: "Arial, sans-serif", fontSize: "26px", fontWeight: "bold", justifyItems: "center" }}>{quote.text}</p>

        <p style={{ fontStyle: "italic", color: "gray", fontFamily: "Arial, sans-serif", fontSize: "14px" }}>{quote.author}</p>
      </div>


      <button style={{ background: "grey", color: "white", border: "none", borderRadius: "5px", padding: "5px 10px" }} onClick={() => deleteHandler(quote.id)}>To the Shadow Realm</button>


    </div>
  );
}