var page = require('page');

page('/', index)
page('/about', about)
page()

function index ()
{
	$('#title').text('Index');
}

function about ()
{
	$('#title').text('About');
}

