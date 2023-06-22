import * as React from 'react';
import { DocumentListComponentModel, DocumentListItemModels, DocumentListModel } from './DocumentListModel';
import { DocumentListItem } from './item/DocumentListItem'

export class DocumentList extends React.Component<DocumentListComponentModel, any, {}> {
    
    constructor(props: DocumentListComponentModel)
    {
        super(props);

        if (Array.isArray(this.props.model.itemModels))
        {
            this.state = {
                focusedItemId: null,
                selectedItemIds:
                    this.props.model.itemModels
                        .filter(itemModel => itemModel.selected)
                        .map(itemModel => itemModel.id)
            }
        }   

        this.onItemSelectionChanged = this.onItemSelectionChanged.bind(this);
        this.onItemMouseDown = this.onItemMouseDown.bind(this);
    }

    private onItemSelectionChanged(itemId: any, selected: Boolean): void
    {
        const newSelectedItemIds = selected ? 
                [...this.state.selectedItemIds, itemId] : 
                this.state.selectedItemIds.filter((curItemId: any) => curItemId !== itemId);

        this.setState({
            selectedItemIds: newSelectedItemIds
        });

        if (this.props.eventHandlers.onSelectedItemsChanged)
            this.props.eventHandlers.onSelectedItemsChanged(newSelectedItemIds);
    }

    private onItemMouseDown(itemId: any): void {
        this.setState({ 
            focusedItemId: itemId 
        });
        
        if (this.props.eventHandlers.onSelectedItemsChanged)
            this.props.eventHandlers.onFocusedItemChanged(itemId);
    }

    render(): React.ReactNode {
        
        let tableBody, tableFooter;

        if (typeof this.props.model.itemModels === 'string')
            tableBody = <tbody><tr><td>{this.props.model.itemModels}</td></tr></tbody>

        else {
            tableBody = 
                <tbody>
                {
                    this.props.model.itemModels.map(item => 
                        <tr 
                            key={item.id}
                            onMouseDown={() => this.onItemMouseDown(item.id)}
                            style={
                                {
                                    backgroundColor: 
                                        this.state.focusedItemId === item.id ?
                                            '#8FACEE' :
                                            this.state.selectedItemIds.indexOf(item.id) != -1 ? 
                                                '#90EE90' : 'white'
                                }
                            }
                        >
                            <DocumentListItem 
                                model={item} 
                                onSelectionChanged={this.onItemSelectionChanged} 
                            />
                        </tr>
                    )
                }
                </tbody>
            
            tableFooter = 
                <tfoot>
                    <tr>
                        <td>Количество КД: {this.props.model.itemModels.length}</td>
                    </tr>
                </tfoot>
        }


        return (
            <table border={1} align="left" style={{ textAlign: 'center' }}>
                <thead>
                    <tr>
                        <th>Выбрать</th>
                        <th>Наименование</th>
                        <th>Количество листов</th>
                        <th>Есть бумага</th>
                        <th>Автор</th>
                        <th>ДСЕ</th>
                    </tr>
                </thead>
                {tableBody}
                {tableFooter}
            </table>
        )
    }
}