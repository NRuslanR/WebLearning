export interface DocumentCardModel {
    model: {
        id: any,
        title: string,
        sheetCount: Number,
        hasPaper: boolean,
        author: string,
        assemblyUnit: string
    }
}

export interface DocumentCardComponentModel {
    documentId: any
}