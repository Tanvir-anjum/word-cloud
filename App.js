import React from 'react';
import ReactWordcloud from 'react-wordcloud';
import './common.css'

const data = [
  { text: 'apple', value: 10 },
  { text: 'orange', value: 8 },
  { text: 'banana', value: 6 },
  { text: 'grape', value: 12 },
  { text: 'pineapple', value: 5 },
  { text: 'strawberry', value: 9 },
  { text: 'watermelon', value: 11 },
  { text: 'peach', value: 7 },
  { text: 'kiwi', value: 4 },
  { text: 'blueberry', value: 6 },
  { text: 'raspberry', value: 8 },
  { text: 'mango', value: 10 },
  { text: 'pear', value: 7 },
  { text: 'lemon', value: 6 },
  { text: 'lime', value: 4 },
  { text: 'coconut', value: 9 },
  { text: 'avocado', value: 5 },
  { text: 'pomegranate', value: 7 },
  { text: 'fig', value: 3 },
  { text: 'plum', value: 8 },
  { text: 'cherry', value: 10 },
  { text: 'apricot', value: 5 },
  { text: 'blackberry', value: 9 },
  { text: 'cranberry', value: 6 },
  { text: 'pepper', value: 4 },
  { text: 'carrot', value: 8 },
  { text: 'potato', value: 11 },
  { text: 'cabbage', value: 7 },
  { text: 'broccoli', value: 5 },
  { text: 'zucchini', value: 9 },
  { text: 'tomato', value: 10 },
  { text: 'cucumber', value: 6 },
  { text: 'lettuce', value: 8 },
  { text: 'onion', value: 7 },
  { text: 'garlic', value: 4 },
  { text: 'ginger', value: 3 },
  { text: 'bell pepper', value: 9 },
  { text: 'asparagus', value: 5 },
  { text: 'celery', value: 6 },
  { text: 'mushroom', value: 8 },
  { text: 'sweet potato', value: 7 },
  { text: 'pumpkin', value: 9 },
  { text: 'spinach', value: 6 },
  { text: 'kale', value: 5 },
  { text: 'lettuce', value: 7 },
  { text: 'chard', value: 4 },
  { text: 'cabbage', value: 6 },
  { text: 'radish', value: 8 },
  { text: 'corn', value: 10 },
  { text: 'green bean', value: 7 },
  { text: 'pea', value: 5 },
  { text: 'lentil', value: 6 },
  { text: 'kidney bean', value: 4 },
  { text: 'chickpea', value: 9 },
  { text: 'quinoa', value: 8 },
  { text: 'brown rice', value: 7 },

  // ...
];



const App = () => {
  const options = {
    scale: 1.5 // smaller scale value to bring words closer together
  };
  return (
    <div className="word-cloud">
      <ReactWordcloud words={data} options={options} />
    </div>
  );
};

export default App;