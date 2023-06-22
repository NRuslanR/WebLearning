import { DocumentListModel } from '../list/DocumentListModel'

export interface DocumentsReferenceEventHandlers {
    onSelectedItemsChanged?: any
    onFocusedItemChanged?: any
    onDocumentAdd?: any
    onDocumentChange?: any
    onDocumentsRemove?: any
    onDocumentsRefresh?: any
} 
export interface DocumentsReferenceComponentModel {
    model?: DocumentListModel
    eventHandlers?: DocumentsReferenceEventHandlers
}