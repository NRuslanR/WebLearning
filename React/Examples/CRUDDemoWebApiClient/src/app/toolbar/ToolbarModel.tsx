export interface ToolModel {
    caption: string
    activateHandler?: any
}

export interface ToolbarModel {
    model: Array<ToolModel>
}