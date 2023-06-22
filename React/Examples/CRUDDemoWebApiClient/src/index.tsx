import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { Application } from './app/Application'
import { applicationStore } from './app/store/ApplicationStore'

const root = ReactDOM.createRoot(document.getElementById("app"));

root.render(
    <Provider store={applicationStore}>
        <Application />
    </Provider>
);