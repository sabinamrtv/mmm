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

    setAuthor(title: string, author: Author) {
        this.author = author;
    }

    getAuthor(): Author {
        return this.author;
    }

    getBookInfo(): string {
        return `Книга: "${this.title}", Автор: ${this.author.getInfo()}`;
    }
}

function createBook() {
    const nameInput = document.getElementById("authorName") as HTMLInputElement;
    const yearInput = document.getElementById("birthYear") as HTMLInputElement;
    const titleInput = document.getElementById("bookTitle") as HTMLInputElement;
    const result = document.getElementById("result") as HTMLDivElement;

    const name = nameInput.value.trim();
    const year = parseInt(yearInput.value);
    const title = titleInput.value.trim();

    if (!name || isNaN(year) || !title) {
        result.textContent = "Пожалуйста, заполните все поля корректно.";
        return;
    }

    const author = new Author(name, year);
    const book = new Book(title, author);
    result.textContent = book.getBookInfo();
}

(window as any).createBook = createBook;
