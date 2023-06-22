import * as React from 'react';

import DocumentWorkingArea from './documents/ui/working_area/DocumentsWorkingArea'

export class Application extends React.Component<{}> {

    constructor(props: any)
    {
        super(props);     
    }

    render(): React.ReactNode {
        return <DocumentWorkingArea />
    }
}