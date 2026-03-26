const apiKey = "WwUEsEiDBD1DKPjSl2wuZg0itikpSQru";

async function fetchImageList(amt) {
  //const url = `https://api.giphy.com/v1/stickers/trending?api_key=${apiKey}`;
  //const imageList = [];
  //try {
  //  const response = await fetch(url);
  //  if (!response) {
  //    throw new Error("No Response");
  //  }
  //  const result = await response.json();
  //  if (!response) {
  //    throw new Error ("No result");
  //  }
  //  for (let imageProfile of result.data) {
  //    if (imageList.length >= amt) break;
  //    let imageUrl = imageProfile.images.original.url;
  //    let title = imageProfile.title;
  //    let id = imageProfile.id;
  //    imageList.push({url: imageUrl, title, id});
  //  }
  //  return imageList;
  // } catch(err) {
  //  console.error(err);
  // }
  return [
  {
    url: 'https://media2.giphy.com/media/v1.Y2lkPTgyYTNjZDhlNzhtazVteWJtaG5zM2NicG11dGFlbGF0b2drdndqM3hubzcxZHNvYSZlcD12MV9zdGlja2Vyc190cmVuZGluZyZjdD1z/yXhSjI8XO2CmWmsx2P/giphy.gif',
    title: 'Celebrate Happy Birthday Sticker by Molang',
    id: 'yXhSjI8XO2CmWmsx2P'
  },
  {
    url: 'https://media1.giphy.com/media/v1.Y2lkPTgyYTNjZDhlNzhtazVteWJtaG5zM2NicG11dGFlbGF0b2drdndqM3hubzcxZHNvYSZlcD12MV9zdGlja2Vyc190cmVuZGluZyZjdD1z/MV7OdAI6LEcsQLwYgi/giphy.gif',
    title: 'Happy Party Sticker',
    id: 'MV7OdAI6LEcsQLwYgi'
  },
  {
    url: 'https://media1.giphy.com/media/v1.Y2lkPTgyYTNjZDhlNzhtazVteWJtaG5zM2NicG11dGFlbGF0b2drdndqM3hubzcxZHNvYSZlcD12MV9zdGlja2Vyc190cmVuZGluZyZjdD1z/gWNarMpTibKxcfMDL8/giphy.gif',
    title: 'Happy Birthday Animation Sticker by Peanuts',
    id: 'gWNarMpTibKxcfMDL8'
  },
  {
    url: 'https://media4.giphy.com/media/v1.Y2lkPTgyYTNjZDhlNzhtazVteWJtaG5zM2NicG11dGFlbGF0b2drdndqM3hubzcxZHNvYSZlcD12MV9zdGlja2Vyc190cmVuZGluZyZjdD1z/3o7TKBxS1HArb73Pz2/giphy.gif',
    title: 'sad cry Sticker by Studios Stickers',
    id: '3o7TKBxS1HArb73Pz2'
  },
  {
    url: 'https://media4.giphy.com/media/v1.Y2lkPTgyYTNjZDhlNzhtazVteWJtaG5zM2NicG11dGFlbGF0b2drdndqM3hubzcxZHNvYSZlcD12MV9zdGlja2Vyc190cmVuZGluZyZjdD1z/eeodsmj12xwj4IDRCs/giphy.gif',
    title: 'Excited Baby Sticker by foodbabyny',
    id: 'eeodsmj12xwj4IDRCs'
  }
]
}

function randomize(imageList) {
  return imageList.sort(() => Math.random() - 0.5);
}
export {fetchImageList, randomize};