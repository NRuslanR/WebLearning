import { DocumentListItemModel } from './item/DocumentListItemModel'

export type DocumentListItemModels = Array<DocumentListItemModel>

export interface DocumentListModel
{
    itemModels: DocumentListItemModels | string
}

export interface DocumentListEventHandlers {

    onSelectedItemsChanged: any
    onFocusedItemChanged: any
}

export interface DocumentListComponentModel
{
    model: DocumentListModel
    eventHandlers: DocumentListEventHandlers

}