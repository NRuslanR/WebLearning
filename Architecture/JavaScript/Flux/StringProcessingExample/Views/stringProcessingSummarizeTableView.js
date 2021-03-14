const View = require('../../Core/Views/view.js');

class StringProcessingSummarizeTableView extends View
{
    render(viewModel)
    {
        $('.summarizer-body-record').last().after(
            `<tr class='summarize-body-record'> \
                <td class='summarizer-header-cell'>${viewModel.string}</td> \
                <td class='summarizer-header-cell'>${viewModel.reverseString}</td> \
                <td class='summarizer-header-cell'>${viewModel.length}</td> \
            </tr>`
        )
    }
}

module.export = StringProcessingSummarizeTableView;