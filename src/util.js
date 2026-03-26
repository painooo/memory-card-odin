const apiKey = "WwUEsEiDBD1DKPjSl2wuZg0itikpSQru";

async function fetchImageList(amt) {
  const url = `https://api.giphy.com/v1/stickers/trending?api_key=${apiKey}`;
  const imageList = [];
  try {
    const response = await fetch(url);
    if (!response) {
      throw new Error("No Response");
    }
    const result = await response.json();
    if (!response) {
      throw new Error ("No result");
    }
    for (let imageProfile of result.data) {
      if (imageList.length >= amt) break;
      let imageUrl = imageProfile.images["480w_still"].url;
      let title = imageProfile.title;
      let id = imageProfile.id;
      imageList.push({url: imageUrl, title, id});
    }
    return imageList;
   } catch(err) {
    console.error(err);
   }
}

function randomize(imageList) {
  return imageList.sort(() => Math.random() - 0.5);
}
export {fetchImageList, randomize};