import * as React from 'react';
import { connect } from 'react-redux';
import { DocumentsReference } from './reference/DocumentsReference';
import DocumentCard from './card/DocumentCard';
import { DOCUMENTS_ACTIONS, getAllDocuments, removeDocument, selectAllDocuments } from '../../features/DocumentsSlice';

const
    mapStateToProps = (state: any) => {

        const  { data, actionStates } = selectAllDocuments(state);

        return {        
            data, 
            getAllDocumentsActionState: actionStates[DOCUMENTS_ACTIONS.GET_ALL_DOCUMENTS] 
        };
    },
    mapDispatchToProps = (dispatch: any) => {

        return {
            getAllDocuments: () => dispatch(getAllDocuments()),
            removeDocument: (documentId: any) => dispatch(removeDocument(documentId)) 
        }
    };

class DocumentWorkingArea extends React.Component<any, any> {

    constructor(props: any)
    {
        super(props);

        this.state = {
            showDocumentCard: false,
            currentDocumentId: null
        }

        this.onDocumentAdd = this.onDocumentAdd.bind(this)
        this.onDocumentChange = this.onDocumentChange.bind(this)
    }

    private onDocumentAdd(): void
    {
        console.log('OnDocumentAdd called');
        
        this.setState({
            showDocumentCard: true
        })
    }

    private onDocumentChange(documentId: any): void
    {
        this.setState({
            showDocumentCard: true,
            currentDocumentId: documentId
        })
    }

    private renderDocumentCardByState(): React.ReactNode {
        if (this.state.showDocumentCard)
        {
            return (
                <DocumentCard documentId={this.state.currentDocumentId} />
            )
        }

        return <div></div>
    }

    componentDidMount(): void {
        
        this.getAllDocumentsIfNecessary();
    }

    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any): void {
       
        this.getAllDocumentsIfNecessary();
    }

    private getAllDocumentsIfNecessary(): void 
    {
        let status = this.props.getAllDocumentsActionState.status;

        if (status === 'idle')
        {
            this.props.getAllDocuments();
        }
    }

    render(): React.ReactNode {

        let documentItemModels;

        if (this.props.getAllDocumentsActionState.status === 'pending')
            documentItemModels = 'Загрузка...';

        else if (this.props.getAllDocumentsActionState.status === 'error')
            documentItemModels = this.props.getAllDocumentsActionState.error.message

        else documentItemModels = this.props.data;

        const 
            onDocumentRefresh = () => {
                if (this.props.getAllDocumentsActionState.status !== 'pending')
                    this.props.getAllDocuments();
            },
            onDocumentsRemove = (documentIds: Array<any>) => {

                documentIds.forEach(id => this.props.removeDocument(id));
            };
        
        return (
            <div>
                <DocumentsReference 
                    model={{
                        itemModels: documentItemModels
                    }} 
                    eventHandlers={{
                        onDocumentAdd: this.onDocumentAdd,
                        onDocumentChange: this.onDocumentChange,
                        onDocumentsRemove: onDocumentsRemove,
                        onDocumentsRefresh: onDocumentRefresh
                    }}
                />
                {this.renderDocumentCardByState()}
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DocumentWorkingArea);