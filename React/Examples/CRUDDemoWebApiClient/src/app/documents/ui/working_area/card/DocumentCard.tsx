import * as React from 'react'
import { connect } from 'react-redux'
import { DocumentCardModel } from './DocumentCardModel'
import { getDocumentById, createDocument, updateDocument, selectDocumentById, selectEmptyDocument, DOCUMENTS_ACTIONS } from '../../../features/DocumentsSlice'

const
    mapStateToProps = (state: any) => {
        return {
            selectDocumentById: (documentId: any) => selectDocumentById(state, documentId),
            emptyDocument: selectEmptyDocument(state),
            getDocumentByIdActionState: state.documents.actionStates[DOCUMENTS_ACTIONS.GET_DOCUMENT_BY_ID],
            createDocumentActionState: state.documents.actionStates[DOCUMENTS_ACTIONS.CREATE_DOCUMENT],
            updateDocumentActionState: state.documents.actionStates[DOCUMENTS_ACTIONS.UPDATE_DOCUMENT]
        }
    },
    mapDispatchToProps = (dispatch: any) => {
        return {
            getDocumentById: (documentId: any) => dispatch(getDocumentById(documentId)),
            updateDocument: (documentData: any) => dispatch(updateDocument(documentData)),
            createDocument: (documentData: any) => dispatch(createDocument(documentData))
        }
    };

class DocumentCard extends React.Component<any, DocumentCardModel, {}>
{
    constructor(props: any)
    {
        super(props);

        this.state = {
            model: this.props.emptyDocument
        }

        this.setField = this.setField.bind(this);

        console.log('DocumentCard ctor')
    }

    private setField(fieldName: string, value: any): void
    {
        console.log('setField called');
        
        this.setState((prevState, props) => { 

            return {
                model: {
                    ...prevState.model,
                    [`${fieldName}`]: value
                }
            }
        });
    }

    componentDidMount(): void {

        this.getDocumentByIdIfNecessary();
    }

    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<DocumentCardModel>, snapshot?: {}): void {
        
        console.log('componentDidUpdate');

        if (prevProps.documentId !== this.props.documentId)
        {
            console.log('getDocumentByIdIfNecessary');
            this.getDocumentByIdIfNecessary();
        }

        else if(prevProps.getDocumentByIdActionState.status === 'pending')
        {
            const document =  this.props.selectDocumentById(this.props.documentId);

            console.log(document);

            this.setState({
                model: document
            });
        }
    }

    private getDocumentByIdIfNecessary(): void
    {
        if (this.props.documentId && this.props.getDocumentByIdActionState.status !== 'pending')
        {
            console.log('getDocumentById');

            this.props.getDocumentById(this.props.documentId);
        }
    }

    private isSaveButtonActive(): boolean
    {
        return !this.props.documentId ? 
            this.props.createDocumentActionState.status !== 'pending ' :
            this.props.updateDocumentActionState.status !== 'pending';
    }

    render(): React.ReactNode {
        
        console.log('render');

        const
            onDocumentSave = () => {
                if (!this.props.documentId)
                    this.props.createDocument(this.state.model);
        
                else this.props.updateDocument(this.state.model);
            };

        if (this.props.documentId)
        {
            if (this.props.getDocumentByIdActionState.status === 'pending')
                return <div>Загрузка документа...</div>

            if (this.props.getDocumentByIdActionState.status === 'error')
                return <div>{this.props.getDocumentByIdActionState.error}</div>
        }

        return (
            <div>
                <div>
                    <label htmlFor="title">Наименование:</label>
                    &nbsp;
                    <input 
                        type="text" 
                        id="title"
                        value={this.state?.model?.title}
                        onChange={(e) => this.setField('title', e.target.value)}
                     />
                </div>
                <div>
                    <label htmlFor="sheet_count">Количество листов:</label>
                    &nbsp;
                    <input 
                        type="number" 
                        id="sheet_count" 
                        value={this.state?.model?.sheetCount?.toString()}
                        onChange={(e) => this.setField('sheetCount', e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="has_paper">Есть бумага ?:</label>
                    &nbsp;
                    <input 
                        type="checkbox" 
                        id="has_paper"
                        checked={this.state?.model?.hasPaper}
                        onChange={(e) => this.setField('hasPaper', e.target.checked)} 
                    />
                </div>
                <div>
                    <label htmlFor="author">Автор:</label>
                    &nbsp;
                    <input 
                        type="text" 
                        id="author"
                        value={this.state?.model?.author}
                        onChange={(e) => this.setField('author', e.target.value)} 
                    />
                </div>
                <div>
                    <label htmlFor="assembly_unit">ДСЕ:</label>
                    &nbsp;
                    <input 
                        type="text" 
                        id="assembly_unit" 
                        value={this.state?.model?.assemblyUnit}
                        onChange={(e) => this.setField('assemblyUnit', e.target.value)}
                    />
                </div>
                <input type="hidden" name="id" value={this.props?.documentId || ""} />
                <button disabled={!this.isSaveButtonActive()} onClick={() => onDocumentSave()}>{ !this.props.documentId ? 'Создать': 'Сохранить'}</button>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DocumentCard);