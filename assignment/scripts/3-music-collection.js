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
const myCollect = addToCollection(myCollection, "title test", 'artist test', 'publishedTest')
const myCollect2 = addToCollection(myCollection, "title test 2", 'artist test2', 'publishedTest3')
console.log(myCollect);
console.log(myCollection);



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
