class Book {
    constructor(arr) {
        this.id = arr[0]; // id
        this.name = arr[1]; // name
        this.publishYear = arr[2]; // publish year
        this.quantity = arr[3]; // quantity
        this.status = !!this.quantity; // status
    }

    setStatus() {
        this.status = !!this.quantity;
    }

}