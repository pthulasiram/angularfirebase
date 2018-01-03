export class Fileupload {
    $key: string;
    name = '';
    price= 0;
    description= '';
    category = 'veg';
    today = 'No';
    url: string;
    file: File;

    constructor() {

    }
    setData(data: Fileupload) {
        this.file = data.file;
        this.name = data.name;
        this.price = data.price;
        this.description = data.description;
        this.category = data.category;
        this.today = data.today;
    }
}
