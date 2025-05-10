
class Author {
    name: string;
    birthYear: number;

    constructor(name: string, birthYear: number) {
        this.name = name;
        this.birthYear = birthYear;
    }

    getInfo(): string {
        return `${this.name} (род. ${this.birthYear})`;
    }
}


class Book {
    private title: string;
    private author: Author;

    constructor(title: string, author: Author) {
        this.title = title;
        this.author = author;
    }

    setAuthor(author: Author): void {
        this.author = author;
    }

    getAuthor(): Author {
        return this.author;
    }

    getBookInfo(): string {
        return `Книга: "${this.title}", Автор: ${this.author.getInfo()}`;
    }
}


const author1 = new Author("Александр Пушкин", 1799);
const book1 = new Book("Капитанская дочка", author1);

console.log(book1.getBookInfo());


const author2 = new Author("Фёдор Достоевский", 1821);
book1.setAuthor(author2);
console.log(book1.getBookInfo()); // Книга: "Война и мир", Автор: Фёдор Достоевский (род. 1821)
