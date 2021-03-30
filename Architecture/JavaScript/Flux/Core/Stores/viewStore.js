const Store = require('./store.js');

class ViewStore extends Store
{
    constructor(dispatcher)
    {
        super(dispatcher);

        this.views = [];
    }

    addViews(views)
    {
        if (Array.isArray)
            this.views = this.views.concat(views);

        else this.views.push(views);
    }

    removeViews(views)
    {
        if (Array.isArray(views))
            views.forEach((view, idx, arr) => this.removeView(view));

        else this.removeView(views);
    }

    #removeView(view)
    {
        delete this.views[this.views.indexOf(view)];
    }

    reduce(action)
    {
        var actionResult = this._handleAction(action);

        this.views.forEach((view, index, arr) => view.render(actionResult));
    }

    _handleAction(action)
    {
        throw 'ViewStore._handleAction not implemented';
    }
}

module.exports = ViewStore;