const View = require('../../Core/Views/view.js');


class StringProcessingSummarizeListView extends View
{
    render(viewModel)
    {
        $('.summarizer-list').first().after(
            `<ul> \
                <li>String - ${viewModel.string}</li> \
                <li>Length - ${viewModel.length}>/li> \
                <li>Reverse String - ${viewModel.reverseString}</li> \
            </ul>`
        );
    }
}

module.exports = StringProcessingSummarizeListView;