import * as React from 'react';
import { ToolbarModel, ToolModel } from './ToolbarModel'

export class Toolbar extends React.Component<ToolbarModel, {}>
{
    constructor(props: ToolbarModel)
    {
        super(props)
    }

    private createTool(model: ToolModel): React.ReactNode
    {
        return (
            <button key={model.caption} onClick={model.activateHandler}>{model.caption}</button>
        )
    }

    render(): React.ReactNode {
        
        return (
            <div>
                {
                    this.props.model.map(tool => this.createTool(tool))
                }
            </div>
        );
    }
}