import $ from './lib/lib';

$('#first').on('click', () => {
    $('div').eq(1).fadeToggle(800);
});

$('[data-count="second"]').on('click', () => {
    $('div').eq(2).fadeToggle(800);
});

$('button').eq(2).on('click', () => {
    $('.w-500').fadeToggle(800);
});

$('#trigger').click(() => $('#trigger').createModal({
    text: {
        title: 'Modal title',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum minus doloremque nesciunt enim rem quam corporis? Dolorem pariatur magnam distinctio perferendis. Ratione dolorem voluptates iusto facilis odit veritatis, suscipit voluptatibus!'
    },
    btns: {
        count: 3,
        settings: [
            [
                'Close',
                ['btn-danger', 'mr-10'],
                true
            ],
            [
                'Save changes',
                ['btn-success'],
                false,
                () => {
                    alert('Данные сохранены');
                }
            ],
            [
                'Another btn',
                ['btn-warning', 'ml-10'],
                false,
                () => {
                    alert('Hello World');
                }
            ]
        ]
    }
}));

$('[data-on="carousel"]').createCarousel({
    slides: {
        0: "https://ipiccy.com/res/template/img/hp_v2/pics/ba-01s3.jpg",
        1: "https://images.pexels.com/photos/1363876/pexels-photo-1363876.jpeg?cs=srgb&dl=calm-body-of-water-1363876.jpg&fm=jpg"
        },
    dots: true,
    autoPlay: 2000,
    length: 2
});
$('[data-on="carousel3"]').createCarousel({
    slides: {
        0: "https://ipiccy.com/res/template/img/hp_v2/pics/ba-01s3.jpg",
        1: "https://images.pexels.com/photos/1363876/pexels-photo-1363876.jpeg?cs=srgb&dl=calm-body-of-water-1363876.jpg&fm=jpg",
        2: "https://pixlr.com/images/best-photo-editor-cover.jpg",
      },
      length: 3
});
$('[data-on="carousel2"]').createCarousel({
    slides: {
        0: "https://images.pexels.com/photos/1363876/pexels-photo-1363876.jpeg?cs=srgb&dl=calm-body-of-water-1363876.jpg&fm=jpg",
        1: "https://pixlr.com/images/best-photo-editor-cover.jpg",
        2: "https://ipiccy.com/res/template/img/hp_v2/pics/ba-01s3.jpg",
        3: "https://pixlr.com/images/best-photo-editor-cover.jpg",
        4: "https://ipiccy.com/res/template/img/hp_v2/pics/ba-01s3.jpg",
        },
    dots: true,
    autoPlay: 2000,
    length: 5
});
