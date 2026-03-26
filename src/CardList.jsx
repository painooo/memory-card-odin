import {useState, useEffect} from 'react'
import {fetchImageList, randomize} from './util.js';

export default function CardList({setScore, score}) {
  const [imageList, setImageList] = useState([]);
  const [key, setKey] = useState(false);
  const [clickedList, setClickedList] = useState([]);
  
  useEffect(() => {
      fetchImageList(15).then(result => {
        setImageList(result);
      });
  }, []);
  
  function handleClick(id) {
    if (clickedList.indexOf(id) > -1) {
      setClickedList([]);
      setScore(0);
    } else {
      const list = clickedList.slice();
      list.push(id);
      setClickedList(list);
      setImageList(randomize(imageList));
      setScore(score + 1);
      setKey(!key);
    }
  };

 return (
 <ul className="cardList" key={key}>
  {imageList.map((imageProfile) => 
    <li onClick={() => handleClick(imageProfile.id)} className="imageCard" key={imageProfile.id}>
      <img src={imageProfile.url} />
      <p>{imageProfile.title}</p>
    </li>
  )}
 </ul>); 
}