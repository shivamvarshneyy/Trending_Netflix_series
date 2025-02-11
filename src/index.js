import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Ensure your CSS file is correctly imported
import Card from './Card'; // The Card component
import Data from './Data'; // The Data array
import Heading from './Heading'; // The Heading component

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    <Heading />
    <div className="cards">
      {Data.map((val, index) => {
        return (
          <Card
            key={val.id}
            imgsrc={val.imgsrc}
            title={val.title}
            name={val.name}
            reference={val.reference}
          />
        );
      })}
    </div>
  </>
);
