import React, { useState } from "react";
import List from "./components/List";
import data from "./helper/data";

function App() {
  const [page, setPage] = useState(1);
  const itemsPerPage = 5;
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);

  return (
    <main className="container">
      {currentData.map((person, index) => (
        <section key={index}>
          {index === 0 && (
            <div className="info">
              <h2>
                Employee List "{startIndex + index + 1}"-"{endIndex}"
              </h2>
              <h5>
                (Employees {startIndex + 1} to {endIndex})
              </h5>
            </div>
          )}

          <List person={person} />
        </section>
      ))}
      <div className="btns">
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>
          Prev
        </button>
        <button onClick={() => setPage(page + 1)}>Next</button>
      </div>
    </main>
  );
}

export default App;
