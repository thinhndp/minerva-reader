import * as MockAuthors from './mock-authors';
import * as MockGenres from './mock-genres';

export interface Book {
  id: string,
  title: string,
  authors?: MockAuthors.Author[],
  genres?: MockGenres.Genre[],
  cover?: string,
  ratingValue?: number,
  ratingCount?: number,
  sypnosis?: string,
  reviews?: Review[]
}

export interface Review {
  id: string,
  ratingValue: number,
  userId: string,
  content: string
}

export const mockBooks: Book[] = [
  {
    id: "book01",
    title: "The Tempest",
    authors: [ MockAuthors.shakespeare ],
    genres: [MockGenres.classics, MockGenres.plays, MockGenres.drama],
    cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1546081115l/12985.jpg",
    ratingValue: 4,
    ratingCount: 420,
  },
  {
    id: "book02",
    title: "The Alchemist",
    authors: [ MockAuthors.pauloCoelho ],
    genres: [MockGenres.classics, MockGenres.fiction, MockGenres.fantasy, MockGenres.philosophy ],
    cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1466865542l/18144590._SY475_.jpg",
    ratingValue: 4,
    ratingCount: 420,
    sypnosis: "Paulo Coelho's masterpiece tells the mystical story of Santiago, an Andalusian shepherd boy who yearns to travel in search of a worldly treasure. His quest will lead him to riches far different, and far more satisfying, listening to our hearts, of recognizing opportunity and learning to read the omens strewn along life's path, and, most importantly, to follow our dreams.",
    reviews: [
      {
        id: 'book02review00',
        ratingValue: 4,
        userId: 'user01',
        content: `Deception Point, Dan Brown
            Deception Point is a 2001 thriller novel written by Dan Brown.
            A NASA satellite finds evidence of a rare object buried deep in the Arctic ice, NASA proclaims a much-needed victory that has profound implications for U.S. space policy and the upcoming presidential election. With the White House in the balance, the President dispatches White House Intelligence analyst Rachel Sexton and a team of experts to the Milne Ice Shelf to confirm the authenticity of the find.`
      },
      {
        id: 'book02review01',
        ratingValue: 3.5,
        userId: 'user02',
        content: `In this work, Dan Brown made the book more interesting because he kept a light on a different direction. Our world is already ruled in the shadow of political games. The realities know they can only read between the lines.`
      },
    ],
  },
  {
    id: "book03",
    title: "The Great Gatsby",
    authors: [ MockAuthors.fitzgerald ],
    genres: [MockGenres.classics, MockGenres.fiction, MockGenres.fantasy ],
    cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1490528560l/4671._SY475_.jpg",
    ratingValue: 4,
    ratingCount: 420,
  },
  {
    id: "book04",
    title: "The Little Prince",
    authors: [ MockAuthors.saintExupery ],
    genres: [MockGenres.classics, MockGenres.fiction, MockGenres.childrens, MockGenres.fantasy ],
    cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1367545443l/157993.jpg",
    ratingValue: 4.5,
    ratingCount: 420,
  },
  {
    id: "book05",
    title: "And Then There Were None",
    authors: [ MockAuthors.agathaChristie ],
    genres: [MockGenres.classics, MockGenres.mystery, MockGenres.crime, MockGenres.thriller ],
    cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1391120695l/16299.jpg",
    ratingValue: 4.5,
    ratingCount: 420,
  },
  {
    id: "book06",
    title: "The Catcher in the Rye",
    authors: [ MockAuthors.salinger ],
    genres: [MockGenres.classics, MockGenres.fiction, MockGenres.literature ],
    cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1398034300l/5107.jpg",
    ratingValue: 4,
    ratingCount: 420,
  },
  {
    id: "book07",
    title: "The Old Man and the Sea",
    authors: [ MockAuthors.hemingway ],
    genres: [MockGenres.classics, MockGenres.fiction, MockGenres.literature ],
    cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1329189714l/2165.jpg",
    ratingValue: 4,
    ratingCount: 420,
  },
  {
    id: "book08",
    title: "The Time Machine",
    authors: [ MockAuthors.hgWells ],
    genres: [MockGenres.classics, MockGenres.scifi, MockGenres.fantasy ],
    cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1327942880l/2493.jpg",
    ratingValue: 4,
    ratingCount: 420,
  },
  {
    id: "book09",
    title: "A Study in Scarlet",
    authors: [ MockAuthors.conanDoyle ],
    genres: [MockGenres.classics, MockGenres.mystery, MockGenres.fiction, MockGenres.crime ],
    cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1519031842l/102868._SX318_.jpg",
    ratingValue: 4.5,
    ratingCount: 420,
  },
  {
    id: "book10",
    title: "Spice & Wolf, Vol. 01",
    authors: [ MockAuthors.iHasekura, MockAuthors.jAyakura ],
    genres: [MockGenres.fantasy, MockGenres.lightNovel, MockGenres.fiction, MockGenres.romance ],
    cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1340904653l/6483360.jpg",
    ratingValue: 4.5,
    ratingCount: 420,
  },
  {
    id: "book11",
    title: "Durarara!!, Vol. 1",
    authors: [ MockAuthors.rNarita, MockAuthors.sYasuda ],
    genres: [MockGenres.fantasy, MockGenres.lightNovel, MockGenres.fiction, MockGenres.mystery ],
    cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1431851926l/24409126._SY475_.jpg",
    ratingValue: 4.5,
    ratingCount: 420,
  },
  {
    id: "book12",
    title: "1984",
    authors: [ MockAuthors.georgeOrwell ],
    genres: [ MockGenres.classics, MockGenres.fiction, MockGenres.politics, MockGenres.dystopia ],
    cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1532714506l/40961427._SX318_.jpg",
    ratingValue: 4.5,
    ratingCount: 420,
  },
  {
    id: "book13",
    title: "To Kill a Mockingbird",
    authors: [ MockAuthors.harperLee ],
    genres: [ MockGenres.classics, MockGenres.fiction ],
    cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1553383690l/2657.jpg",
    ratingValue: 4.5,
    ratingCount: 420,
  },
]
