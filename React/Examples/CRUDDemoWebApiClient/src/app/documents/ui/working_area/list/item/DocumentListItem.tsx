import * as React from 'react';
import { DocumentListItemComponentModel, DocumentListItemModel } from './DocumentListItemModel';

export class DocumentListItem extends React.Component<DocumentListItemComponentModel, DocumentListItemModel, {}>
{
    constructor(props: DocumentListItemComponentModel)
    {
        super(props)

        this.state = {
            ...this.props.model
        };

        this.onSelectionChanged = this.onSelectionChanged.bind(this);
    }

    private onSelectionChanged(e: any): void {
        this.setState((s, p) => { selected: e.target.checked});

        if (this.props.onSelectionChanged)
            this.props.onSelectionChanged(this.state.id, e.target.checked);
    }

    render(): React.ReactNode {
        
        return (
            <React.Fragment>
                <td>
                    <input 
                        type='checkbox' 
                        checked={this.state.selected}
                        onChange={(e) => this.onSelectionChanged(e)} 
                    />
                </td>
                <td>{this.props.model.title}</td>
                <td>{this.props.model.sheetCount.toString()}</td>
                <td>{this.props.model.hasPaper ? 'Да': 'Нет'}</td>
                <td>{this.props.model.author}</td>
                <td>{this.props.model.assemblyUnit}</td>
            </React.Fragment>
        )
    }
}