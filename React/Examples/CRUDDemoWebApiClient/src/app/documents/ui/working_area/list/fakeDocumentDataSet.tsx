import { DocumentListItemModel } from './item/DocumentListItemModel';

export const fakeDocumentDataSet: Array<DocumentListItemModel> = [
    
    {
        id: 1,
        title: 'test 1',
        sheetCount: 13,
        hasPaper: true,
        author: 'author',
        assemblyUnit: 'unit'
    },
    {
        id: 2,
        title: 'test 2',
        sheetCount: 55,
        hasPaper: false,
        author: 'author 2',
        assemblyUnit: 'unit 2'
    },
    {
        id: 3,
        title: 'test 3',
        sheetCount: 25,
        hasPaper: true,
        author: 'author 3',
        assemblyUnit: 'unit 3'
    }

];