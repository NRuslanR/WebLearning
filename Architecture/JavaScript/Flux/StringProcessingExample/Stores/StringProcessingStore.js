const ViewStore = require('../../Core/Stores/viewStore.js');

class StringProcessingStore extends ViewStore
{
    _handleAction(action)
    {
        if (action.type !== 'STRING_PROCESSING') return;

        return {

            string: action.data.string,
            length: action.data.string.length,
            reverseString: [...action.data.string].reverse().join('')
        }
    }
}

module.export = StringProcessingStore;