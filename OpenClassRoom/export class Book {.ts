export class Book {
    title = "";
    author = "";
    description = "";
    pages = 0;
    currentPage = 0;
    read = false;

  constructor(title, author, description, pages, currentPage, read){
    this.title = title;
    this.author = author;
    this.description = description;
    this.pages = pages;
    this.currentPage = currentPage;
    this.read = read;
  }

  readbook(page) {
    if( page < 1 || page > this.pages ){
        return 0;
    }

    if( page > 0 && page < this.pages ){
        this.currentPage = page;
        return 1;
    }

    if( page == this.pages ){
        this.currentPage = page;
        this.read = true;
        return 1;
    }     
  }
}

const l1 = new Book("title", "author", "desc", 5, 0, false);
const l2 = new Book("title", "author", "desc", 5, 0, false);
const l3 = new Book("title", "author", "desc", 5, 0, false);

export const books = [l1,l2,l3];
