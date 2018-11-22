export class PaginatorState {
    page: number;
    pageSize: number;

    constructor(page: number, pageSize: number) {
        this.page = page;
        this.pageSize = pageSize;
    }
}