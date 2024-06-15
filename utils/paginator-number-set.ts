export const paginatorNumberSet = (currentPage: number, lastPage: number) => {
    let result:number[] = [];

    if(currentPage < 4) {
        return [2, 3, 4, 5];
    }

    if(currentPage > lastPage - 3) {
        return [lastPage - 4, lastPage - 3, lastPage - 2, lastPage - 1];
    }

    for (let i:number = 0; i < 5; i++) {
        let a = currentPage - 2 + i;
        if(a>1 && a<lastPage) {
            result.push(a);
        }
    }
    return result;
}