import { configureStore } from '@reduxjs/toolkit'
import { documentsReducer } from '../documents/features/DocumentsSlice'

export const applicationStore = configureStore({
    reducer: {
        documents: documentsReducer
    }
});

export type AppDispatch = typeof applicationStore.dispatch;