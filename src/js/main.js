import $ from './lib/lib';
//
// $('#first').on('click', () => {
//   $('div').eq(1).fadeToggle(800);
// });
//
// $('[data-count="second"]').on('click', () => {
//   $('div').eq(2).fadeToggle(800);
// });
//
// $('button').eq(2).on('click', () => {
//   $('.w-500').fadeToggle(800);
// });
//
// $('[data-toggle="modal"]').modal(); //modal write in HTML
//
// $('#trigger').click(() => $('#trigger').createModal({ //modal write in JS
//   text: {
//     title: 'Modal title',
//     body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum minus doloremque nesciunt enim rem quam corporis? Dolorem pariatur magnam distinctio perferendis. Ratione dolorem voluptates iusto facilis odit veritatis, suscipit voluptatibus!'
//   },
//   btns: {
//     count: 3,
//     settings: [
//       [
//         'Close',
//         ['btn-danger', 'mr-10'],
//         true
//       ],
//       [
//         'Save changes',
//         ['btn-success'],
//         false,
//         () => {
//           alert('Данные сохранены');
//         }
//       ],
//       [
//         'Another btn',
//         ['btn-warning', 'ml-10'],
//         false,
//         () => {
//           alert('Hello World');
//         }
//       ]
//     ]
//   }
// }));
//
$('[data-target="example"]').carousel(true, 8000); //carousel write in HTML
//
$('[data-on="carousel"]').createCarousel({ //carousel write in JS
  slides: {
    0: "https://ipiccy.com/res/template/img/hp_v2/pics/ba-01s3.jpg",
    1: "https://images.pexels.com/photos/1363876/pexels-photo-1363876.jpeg?cs=srgb&dl=calm-body-of-water-1363876.jpg&fm=jpg"
  },

  length: 2
});

$('[data-on="carousel1"]').createCarousel({ //carousel write in JS
  slides: {
    0: "https://ipiccy.com/res/template/img/hp_v2/pics/ba-01s3.jpg",
    1: "https://images.pexels.com/photos/1363876/pexels-photo-1363876.jpeg?cs=srgb&dl=calm-body-of-water-1363876.jpg&fm=jpg",
    2: "https://ipiccy.com/res/template/img/hp_v2/pics/ba-01s3.jpg"
  },
  desc: {
    0: '1111111',
    1: '2222222',
    2: '3333333'
  },
  length: 3
});
// $('[data-on="carousel3"]').createCarousel({
//   slides: {
//     0: "https://ipiccy.com/res/template/img/hp_v2/pics/ba-01s3.jpg",
//     1: "https://images.pexels.com/photos/1363876/pexels-photo-1363876.jpeg?cs=srgb&dl=calm-body-of-water-1363876.jpg&fm=jpg",
//     2: "https://pixlr.com/images/best-photo-editor-cover.jpg",
//     3: "https://pixlr.com/images/best-photo-editor-cover.jpg"
//   },
//   length: 4
// });
