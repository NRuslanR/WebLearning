export interface DocumentListItemModel {
    id: any,
    title: string,
    sheetCount: Number,
    hasPaper: boolean,
    author: string,
    assemblyUnit: string
    selected?: boolean
}

export interface DocumentListItemComponentModel {
    model: DocumentListItemModel
    onSelectionChanged: any
}