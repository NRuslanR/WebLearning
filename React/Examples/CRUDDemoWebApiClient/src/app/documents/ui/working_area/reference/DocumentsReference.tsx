import * as React from 'react';
import { DocumentsReferenceComponentModel } from './DocumentsReferenceModel';
import { DocumentList } from '../list/DocumentList';

import { Toolbar } from '../../../../toolbar/Toolbar';

export class DocumentsReference extends React.Component<DocumentsReferenceComponentModel, {}> {

    private focusedDocumentId: any
    private selectedDocumentIds: Array<any>

    constructor(props: DocumentsReferenceComponentModel)
    {
        super(props)

        this.onDocumentAdd = this.onDocumentAdd.bind(this)
        this.onDocumentChange = this.onDocumentChange.bind(this)
        this.onDocumentRemove = this.onDocumentRemove.bind(this)
        this.onFocusedItemChanged = this.onFocusedItemChanged.bind(this)
        this.onSelectedItemsChanged = this.onSelectedItemsChanged.bind(this)
    }

    private onDocumentAdd(): void
    {
        if (Array.isArray(this.props.model.itemModels) && this.props.eventHandlers.onDocumentAdd)
            this.props.eventHandlers.onDocumentAdd();
    }

    private onDocumentChange(): void
    {
        if (this.focusedDocumentId && this.props.eventHandlers.onDocumentChange)
            this.props.eventHandlers.onDocumentChange(this.focusedDocumentId)
    }

    private onDocumentRemove(): void
    {
        if (this.selectedDocumentIds?.length > 0 && this.props.eventHandlers.onDocumentsRemove)
            this.props.eventHandlers.onDocumentsRemove(this.selectedDocumentIds)
    }   

    private onFocusedItemChanged(itemId: any): void
    {
        this.focusedDocumentId = itemId;

        if (this.props.eventHandlers.onFocusedItemChanged)
            this.props.eventHandlers.onFocusedItemChanged(itemId)
    }

    private onSelectedItemsChanged(itemIds: Array<any>): void
    {
        this.selectedDocumentIds = itemIds;

        if (this.props.eventHandlers.onSelectedItemsChanged)
            this.props.eventHandlers.onSelectedItemsChanged(itemIds)
    }

    render(): React.ReactNode {
        return (
            <div>
                <Toolbar model={[
                    {
                        caption: 'Добавить КД',
                        activateHandler: this.onDocumentAdd
                    },
                    {
                        caption: 'Изменить КД',
                        activateHandler: this.onDocumentChange
                    },
                    {
                        caption: 'Удалить КД',
                        activateHandler: this.onDocumentRemove
                    },
                    {
                        caption: 'Обновить',
                        activateHandler: this.props.eventHandlers.onDocumentsRefresh
                    }
                ]} />
                <DocumentList 
                    model={this.props.model} 
                    eventHandlers={{
                        onFocusedItemChanged: this.onFocusedItemChanged,
                        onSelectedItemsChanged: this.onSelectedItemsChanged
                    }}
                />
            </div>
        )   
    }
}