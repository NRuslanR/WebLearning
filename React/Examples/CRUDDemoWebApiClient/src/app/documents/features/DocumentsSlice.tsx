import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { apiClient } from '../../api/ApiClient'

export const 
    DOCUMENTS_ACTIONS = {
        GET_ALL_DOCUMENTS: 'documents/getAllDocuments',
        GET_DOCUMENT_BY_ID: 'documents/getDocumentById',
        CREATE_DOCUMENT: 'dcouments/createDocument',
        UPDATE_DOCUMENT: 'documents/updateDocument',
        REMOVE_DOCUMENT: 'documents/removeDocument'
    },
    getAllDocuments = 
        createAsyncThunk(
            DOCUMENTS_ACTIONS.GET_ALL_DOCUMENTS,
            async () => {
                const response = await apiClient.get('documents');

                return response.data;
            }
        ),
    getDocumentById = 
        createAsyncThunk(
            DOCUMENTS_ACTIONS.GET_DOCUMENT_BY_ID,
            async (documentId: any) => {
                const response = await apiClient.get(`documents/${documentId}`)

                return response.data
            }
        ),
    createDocument =
        createAsyncThunk(
            DOCUMENTS_ACTIONS.CREATE_DOCUMENT,
            async (documentData: any) => {
                const response = await apiClient.post('documents', documentData);

                return response.data;
            }
        ),
    updateDocument =
        createAsyncThunk(
            DOCUMENTS_ACTIONS.UPDATE_DOCUMENT,
            async (documentData: any) => {
                const response = await apiClient.put(`documents/${documentData.id}`, documentData);

                return response.data;
            }
        ),
    removeDocument = 
        createAsyncThunk(
            DOCUMENTS_ACTIONS.REMOVE_DOCUMENT,
            async (documentId: any) => {
                const response = await apiClient.delete(`documents/${documentId}`);

                return documentId;
            }
        );

export const
        selectAllDocuments = (state: any) => state.documents,
        selectDocumentById = 
            (state: any, documentId: any) => {
                const [document] = state.documents.data.filter((document: any) => document.id === documentId);

                return document;
            },
        selectEmptyDocument = (state: any) => {
            return {
                assemblyUnit: '',
                author: '',
                hasPaper: false,
                sheetCount: 0,
                title: ''
            };
        };

export const documentsSlice = createSlice({
    name: 'documents',
    initialState: {
        data: [],
        actionStates: {
            [DOCUMENTS_ACTIONS.GET_ALL_DOCUMENTS]: {
                status: 'idle',
                error: null
            },
            [DOCUMENTS_ACTIONS.GET_DOCUMENT_BY_ID]: {
                status: 'idle',
                error: null
            },
            [DOCUMENTS_ACTIONS.CREATE_DOCUMENT]: {
                status: 'idle',
                error: null
            },
            [DOCUMENTS_ACTIONS.UPDATE_DOCUMENT]: {
                status: 'idle',
                error: null
            },
            [DOCUMENTS_ACTIONS.REMOVE_DOCUMENT]: {
                status: 'idle',
                error: null
            }
        }
    },
    reducers: {},
    extraReducers: (builder) => {

        builder.addCase(getAllDocuments.pending, (state, action) => {
            let actionState = state.actionStates[DOCUMENTS_ACTIONS.GET_ALL_DOCUMENTS];

            actionState.status = 'pending';
        });

        builder.addCase(getAllDocuments.fulfilled, (state, action) => {
            let actionState = state.actionStates[DOCUMENTS_ACTIONS.GET_ALL_DOCUMENTS];

            state.data = action.payload;
            actionState.status = 'successed'
        });

        builder.addCase(getAllDocuments.rejected, (state, action) => {
            let actionState = state.actionStates[DOCUMENTS_ACTIONS.GET_ALL_DOCUMENTS];

            actionState.status = 'error';
            actionState.error = action.error;
        });

        builder.addCase(getDocumentById.pending, (state, action) => {
            let actionState = state.actionStates[DOCUMENTS_ACTIONS.GET_DOCUMENT_BY_ID];

            actionState.status = 'pending'

            console.log('getDocumentById.pending');
        });

        builder.addCase(getDocumentById.fulfilled, (state, action) => {
            let actionState = state.actionStates[DOCUMENTS_ACTIONS.GET_DOCUMENT_BY_ID];

            state.data = state.data.map(item => {
                if (item.id === action.payload.id)
                {
                    console.log('getDocumentById.fulfilled payload found');
                    return action.payload;
                }

                return item;
            });

            actionState.status = 'successed';

            console.log('getDocumentById.fulfilled')
        });

        builder.addCase(getDocumentById.rejected, (state, action) => {
            let actionState = state.actionStates[DOCUMENTS_ACTIONS.GET_DOCUMENT_BY_ID];

            actionState.status = 'error';
            actionState.error = action.error
        });

        builder.addCase(createDocument.pending, (state, action) => {
            let actionState = state.actionStates[DOCUMENTS_ACTIONS.CREATE_DOCUMENT];

            actionState.status = 'pending';
        });

        builder.addCase(createDocument.fulfilled, (state, action) => {
            let actionState = state.actionStates[DOCUMENTS_ACTIONS.CREATE_DOCUMENT];

            state.data.push(action.payload);
            actionState.status = 'successed';
        });

        builder.addCase(createDocument.rejected, (state, action) => {
            let actionState = state.actionStates[DOCUMENTS_ACTIONS.CREATE_DOCUMENT];

            actionState.status = 'error';
            actionState.error = action.error;
        });

        builder.addCase(updateDocument.pending, (state, action) => {
            let actionState = state.actionStates[DOCUMENTS_ACTIONS.UPDATE_DOCUMENT];

            actionState.status = 'pending';
        });

        builder.addCase(updateDocument.fulfilled, (state, action) => {
            let actionState = state.actionStates[DOCUMENTS_ACTIONS.UPDATE_DOCUMENT];

            state.data = state.data.map(item => item.id === action.payload.id ? action.payload : item);
            actionState.status = 'successed';
        });

        builder.addCase(updateDocument.rejected, (state, action) => {
            let actionState = state.actionStates[DOCUMENTS_ACTIONS.UPDATE_DOCUMENT];

            actionState.status = 'error';
            actionState.error = action.error;
        });

        builder.addCase(removeDocument.pending, (state, action) => {
            let actionState = state.actionStates[DOCUMENTS_ACTIONS.REMOVE_DOCUMENT];

            actionState.status = 'pending';
        });

        builder.addCase(removeDocument.fulfilled, (state, action) => {
            let actionState = state.actionStates[DOCUMENTS_ACTIONS.REMOVE_DOCUMENT];

            state.data = state.data.filter(item => item.id !== action.payload);
            actionState.status = 'successed';
        });

        builder.addCase(removeDocument.rejected, (state, action) => {
            let actionState = state.actionStates[DOCUMENTS_ACTIONS.REMOVE_DOCUMENT];

            actionState.status = 'error';
            actionState.error = action.error;
        });
    }
})

export const documentsReducer = documentsSlice.reducer;
