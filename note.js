/** Memory Cards (User view)
 * User is greeted with clickable images
 * Each image not clicked before adds a point
 * To a score board
 * If the user clicks an image clicked before score goes to 0
 * And the game resets (w/ a key)
 */
// Memory Cards (Plan)
/** Util (apiKey = "WwUEsEiDBD1DKPjSl2wuZg0itikpSQru")
 * fetchImageList()
 *  > Fetchs a list of images url ("https://api.giphy.com/v1/stickers/trending?api_key=WwUEsEiDBD1DKPjSl2wuZg0itikpSQru")
 *  > for each image of images.data
 *      > image.images.original.url
 *      > image.title
 * randomize(imageList)
 * > 'https://javascript.info/task/shuffle'
 */
// Game.jsx (Organizes elements)
/**
 * let [score, setScore] = useState(0);
 * let [highscore, setHighscore] = useState(0);
 * <Score score={score} highscore={highscore} setHighscore={setHighscore}/>
 * <CardList setScore={setScore} score={score}/>
 */
// CardList (Displays cards)
/** 'Responsible for displaying the entire Cardlist'
 * 'Takes in setScore(), score from prop'
 * > import { useState, useEffect } from 'react'
 * > import {fetchImageList, randomize} from './util.js'
 * 
 * > const [imageList, setImageList] = useState([]) // to keep track of imageCards
 * > const [key, setKey] = useState(false) // to refresh list
 * > const [clickedList, setClickedList] = useState([]) // to keep track of clicked cards
 * > setImageList to result of fetchImageList w/ useEffect (or useMemo)
 * 
 * function handleClick(id)
 *    > if id not in clickedList
 *      > add id to clickedList
 *      > randomize(imageList);
 *      > setScore(score + 1);
 *      > setKey(!key) // Refresh ul
 *    > else
 *      > clear clickedList
 *      > setScore(0);
 * return
 *    > ul with className of 'cardList' and key={key}
 *    > iterate imageList to (imageProfile) create each li
 *        > each li 's key & id ='s imageProfile.id
 *        > each li contains img & title of img
 * // Note: Didn't realize; left web server running when testing; it simply spammed the api wtf
 */
// Score (Displays score)
/** 'Responsible for displaying the scores (and highscore)'
 * 'Takes in score and highscore + setHighscore states from prop'
 * 
 * > if (score > highscore)
 *    > setHighscore(score); 
 * 
 * return
 * > div className='score'
 * > p with score
 * > p with highscore
 * > end div
 */
/** index.css - classes
 * scoreBoard
 * > score
 * > highscore
 * cardList
 * > imageCard
 */