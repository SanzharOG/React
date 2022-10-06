class Book{
    constructor(name, code, pages){
        this.setName(name);
        this.setCode(code);
        this.setPages(pages);
    }
    getName(){
        return this.name;
    }
    getCode(){
        return this.code;
    }
    getPages(){
        return this.pages;
    }
    setName(name){
        this.name=name;
    }
    setCode(code){
        this.code=code;
    }
    setPages(pages){
        this.pages=pages;
    }
    getBookData(){
        return this.name + " " + this.code + " " + this.pages;
    }
}

class ScientificBook extends Book{
    constructor(name, code, pages, price, publisher){
        super(name, code, pages);
        this.setPrice(price);
        this.setPublisher(publisher);
    }
    getPrice(){
        return this.price;
    }
    getPublisher(){
        return this.publisher;
    }
    setPrice(price){
        this.pages=price;
    }
    setPublisher(publisher){
        this.publisher=publisher;
    }
    getBookData(){
        return this.name + " " + this.code + " " + 
        this.pages + " " + this.price + " " + this.publisher;
    }
}

class LiteratureBook extends Book{
    constructor(name, code, pages, author, publisherYear){
        super(name, code, pages);
        this.setAuthor(author);
        this.setPublisherYear(publisherYear);
    }
    setAuthor(author){
        this.author = author;
    }
    setPublisherYear(publisherYear){
        this.publisherYear = publisherYear;
    }
    getAuthor(){
        return this.author;
    }
    getPublisherYear(){
        return this.publisherYear;
    }
    getBookData(){
        return this.name + " " + this.code + " " + 
        this.pages + " " + this.author + " " + this.publisherYear;
    }
}
let s1 = new ScientificBook("Python", "1qw2e", 300, 1000, "Sanzhar");
let s2 = new ScientificBook("SQL", "d3d57", 250, 2000, "Sanzhar");
let s3 = new ScientificBook("C++", "2d3g", 150, 1500, "Sanzhar");
let s4 = new ScientificBook("JS", "s2d3g", 330, 1200, "Sanzhar");
let s5 = new ScientificBook("Java", "2dhj2", 210, 1700, "Sanzhar");
let l1 = new LiteratureBook("War and Piece", 3000, "Tolstoy", 1865);
let l2 = new LiteratureBook("Onegin", "ky8g6", 1500,"Pushkin", 1823);
let l3 = new LiteratureBook("Revizzor", "j9j7l", 1200, "Gogol", 1888);
let l4 = new LiteratureBook("Master and Margaritta", 1000, "Bulgakov", 1900);
let l5 = new LiteratureBook("Matrenin Dvor", "9io0p", 800, "Solzhenicin", 1906);
let books = [ s1, s2, s3, s4, s5, l1, l2, l3, l4, l5];
class Library{
    constructor(name, city, country, books){
        this.setName(name);
        this.setCity(city);
        this.setCountry(country);
        this.books = books;
        this.sizeOfBooks = books.length;
    }
    setName(name){
        this.name = name;
    }
    setCity(city){
        this.city = city;
    }
    setCountry(country){
        this.country = country;
    }
    getCity(){
        return this.city;
    }
    getCountry(){
        return this.country;
    }
    getName(){
        return this.name;
    }
    addBook(books) {
        this.books = [...this.books, ...books];
        return this.books;
    }
    printLibraryData(){
        return this.books;
    }
}

let library = new Library("Halyk", "Almaty", "Kazakstan", books);
console.log(library);
console.log(library.addBook(books));