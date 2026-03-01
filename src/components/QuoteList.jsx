import Update from '../views/Update';
import QuoteItem from './QuoteItem';

export default function QuoteList({ quotes, setQuotes }) {

  return (
    <div>
      <Update quotes={quotes} setQuotes={setQuotes} />

      {quotes.map(quote => (
        <QuoteItem
          key={quote.id}
          quote={quote}
          setQuotes={setQuotes}
        />
      ))}
    </div>
  );
}