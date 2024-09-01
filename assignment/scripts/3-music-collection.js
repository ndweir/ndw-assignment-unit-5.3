console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line

let myCollection = [];

function addToCollection(collection, title, artist, yearPublished) {
  // this.title = title;
  // this.artist = artist;
  // this.yearPublished = yearPublished;

  let newAlbum = {
    title:title,
    artist:artist,
    yearPublished:yearPublished,
  };
  

  collection.push(newAlbum);

  return newAlbum;
}

const myCollect = addToCollection(myCollection, 'Bismillah', 'Peter Cat Recording Co.', '2019');
const myCollect2 = addToCollection(myCollection, "Europe '72 (Live: 2001 Remaster)", "The Grateful Dead", "2001");
const myCollect3 = addToCollection(myCollection, 'This Old Dog', 'Mac DeMarco', '2017');
const myCollect4 = addToCollection(myCollection, "Few Good Things", "Saba", '2022');
const myCollect5 = addToCollection(myCollection, 'Luv 4 Rent', 'Smino', '2022');
const myCollect6 = addToCollection(myCollection, "Apollo XXI", "Steve Lacy", '2019');

//console.log(myCollection);

function showCollection(collection) {
 for(const item of collection) {
  console.log(`${item.title} by ${item.artist}, published in ${item.yearPublished}`)
 } 
}
//console.log(showCollection(myCollection));

function findByArtist(collection, artist) {
    let matchedRes = [];
  for(const item of collection) {
    if(item.artist === artist){
      matchedRes.push(item);
    }
  }
  return matchedRes;
}

console.log(findByArtist(myCollection, 'Smino'));
console.log(findByArtist(myCollection, "The Grateful Dead"));

// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
