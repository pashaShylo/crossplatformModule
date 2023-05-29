interface Product {
    name: string;
    price: number;
}

interface Book extends Product {
    author: string;
    genre: string;
}

interface Clothing extends Product {
    size: string;
    color: string;
}
interface Technique extends Product {
    type: string;
}

export abstract class Shop {
    name: string;
    location: string;

    constructor(name: string, location: string) {
        this.name = name;
        this.location = location;
    }

    abstract sellProducts(): void;
}

export class Bookstore extends Shop {
    private books: Book[];

    constructor(name: string, location: string, books: Book[]) {
        super(name, location);
        this.books = books;
    }

    getBooks() {
        return this.books;
    }

    sellProducts(): void {
        alert(`Welcome to ${this.name}! We sell books.`);
    }

    quitBookStore(): void {
        alert("Goodbye!");
    }
}

export class DepartmentStore extends Shop {
    private clothing: Clothing[];
    private appliances: Product[];

    constructor(
        name: string,
        location: string,
        clothing: Clothing[],
        appliances: Technique[]
    ) {
        super(name, location);
        this.clothing = clothing;
        this.appliances = appliances;
    }

    sellProducts(): void {
        alert(`Welcome to ${this.name}! We sell clothing and appliances.`);
    }

    getClothing() {
        return this.clothing;
    }

    getTechnique() {
        return this.appliances;
    }

    quitDepartmentStore(): void {
        alert("Goodbye!");
    }
}

export class ShoppingMall {
    private stores: Shop[];

    constructor(stores: Shop[]) {
        this.stores = stores;
    }

    enterMall(): void {
        alert("Welcome to Mall");
    }
    quitMall(): void {
        alert("Goodbye!");
    }
}
