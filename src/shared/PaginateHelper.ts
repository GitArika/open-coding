export class PaginateHelper {
    public limit = 5;

    public offset: number;

    constructor(page: number) {
        this.offset = page * this.limit - this.limit;
    }
}