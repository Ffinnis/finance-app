export interface dealTypes {
    id: number,
    date: string,
    name: string,
    amount: number,
    category: categoryDealTypes,
}

export interface categoryDealTypes {
    id: number,
    name: string,
}
