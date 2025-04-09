
const jsonData = `[
    {
      "title": "Algebra and Trigonometry (4th Edition)",
      "author": "James Stewart, Lothar Redlin, Saleem Watson",
      "price": 49.99,
      "image": "book1.jpeg"
    },
    {
      "title": "Bhagavad Gita As It Is",
      "author": "A. C. Bhaktivedanta Swami Prabhupada",
      "price": 12.99,
      "image": "book2.jpeg"
    },
    {
      "title": "Architecture and Model Building",
      "author": "Alexander Schilling",
      "price": 34.50,
      "image": "book3.jpeg"
    }
  ]`;
  
  class Book {
    #price;
  
    constructor(title, author, price, image) {
      this.title = title;
      this.author = author;
      this.price = price; 
      this.image = image;
    }
  
    get price() {
      return this.#price;
    }
  
    set price(value) {
      this.#price = value < 0 ? 0 : value;
    }
  
    toString() {
      return `${this.title} by ${this.author} - $${this.price.toFixed(2)}`;
    }
  
    render() {
      const container = document.createElement('div');
      container.classList.add('book-item');
  
      const img = document.createElement('img');
      img.src = this.image;
      img.alt = this.title;
  
      const title = document.createElement('h3');
      title.textContent = this.title;
  
      const author = document.createElement('p');
      author.textContent = `Author: ${this.author}`;
  
      const price = document.createElement('p');
      price.textContent = `Price: $${this.price.toFixed(2)}`;
  
      container.appendChild(img);
      container.appendChild(title);
      container.appendChild(author);
      container.appendChild(price);
  
      return container;
    }
  }
  

  const bookArray = JSON.parse(jsonData).map(
    b => new Book(b.title, b.author, b.price, b.image)
  );
  
  const mediaContainer = document.getElementById('media-container');
  bookArray.forEach(book => {
    mediaContainer.appendChild(book.render());
  });
  