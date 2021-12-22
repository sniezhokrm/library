import './lib/lib';

import $ from './lib/lib';

$('button').on('click', function() {
    $(this).hide().show().toggleClass('active');
});
console.log($("div").set('id'));
$(".active").remove("class");
