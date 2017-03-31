import logoAngular from '../images/logos/logo-angular.png';
import logoAWS from '../images/logos/logo-aws.png';
import logoExpress from '../images/logos/logo-express.png';
import logoFirebase from '../images/logos/logo-firebase.png';
import logoGit from '../images/logos/logo-git.png';
import logoJavascript from '../images/logos/logo-javascript.png';
import logoJquery from '../images/logos/logo-jquery.png';
import logoMaps from '../images/logos/logo-maps.png';
import logoMongoDB from '../images/logos/logo-mongodb.png';
import logoNginx from '../images/logos/logo-nginx.png';
import logoNode from '../images/logos/logo-node.png';
import logoPostgres from '../images/logos/logo-pg.png';
import logoPhotoshop from '../images/logos/logo-photoshop.png';
import logoRabbitMQ from '../images/logos/logo-rabbitmq.png';
import logoRails from '../images/logos/logo-rails.png';
import logoReact from '../images/logos/logo-react.png';
import logoRedux from '../images/logos/logo-redux.png';
import logoWebpack from '../images/logos/logo-webpack.png';
import logoHTML5 from '../images/logos/logo-html5.png';
import logoCSS3 from '../images/logos/logo-css3.png';
import logoHeroku from '../images/logos/logo-heroku.png';
import logoPassport from '../images/logos/logo-passport.png';
import logoAJAX from '../images/logos/logo-ajax.png';
import logoBootstrap from '../images/logos/logo-bootstrap.png';
import logoHandlebars from '../images/logos/logo-handlebars.png';


import birdsThumb from '../images/thumb-birds.png';
import bricksThumb from '../images/thumb-bricks.png';
import lpThumb from '../images/thumb-lp.png';
import ninjaThumb from '../images/thumb-ninja.png';
import spaceThumb from '../images/thumb-space.png';
import spiegelThumb from '../images/thumb-spiegel.png';
import zombieThumb from '../images/thumb-zombie.png';

export const chips = [
  {
    id: 0,
    name: 'JAVASCRIPT',
    image: logoJavascript
  },
  {
    id: 1,
    name: 'REACT',
    image: logoReact
  },
  {
    id: 2,
    name: 'NODE.JS',
    image: logoNode
  },
  {
    id: 3,
    name: 'REDUX',
    image: logoRedux
  },
  {
    id: 4,
    name: 'EXPRESS.JS',
    image: logoExpress
  },
  {
    id: 5,
    name: 'ANGULAR',
    image: logoAngular
  },
  {
    id: 6,
    name: 'JQUERY',
    image: logoJquery
  },
  {
    id: 7,
    name: 'FIREBASE',
    image: logoFirebase
  },
  {
    id: 8,
    name: 'MONGODB',
    image: logoMongoDB
  },
  {
    id: 9,
    name: 'POSTGRESQL',
    image: logoPostgres
  },
  {
    id: 10,
    name: 'RABBITMQ',
    image: logoRabbitMQ
  },
  {
    id: 11,
    name: 'RUBY ON RAILS',
    image: logoRails
  },
  {
    id: 12,
    name: 'GIT',
    image: logoGit
  },
  {
    id: 13,
    name: 'AWS',
    image: logoAWS
  },
  {
    id: 14,
    name: 'GOOGLE MAPS API',
    image: logoMaps
  },
  {
    id: 15,
    name: 'NGINX',
    image: logoNginx
  },
  {
    id: 16,
    name: 'PHOTOSHOP',
    image: logoPhotoshop
  },
  {
    id: 17,
    name: 'WEBPACK',
    image: logoWebpack
  },
  {
    id: 18,
    name: 'HTML5',
    image: logoHTML5
  },
  {
    id: 19,
    name: 'CSS3',
    image: logoCSS3
  },
  {
    id: 20,
    name: 'HEROKU',
    image: logoHeroku
  },
  {
    id: 21,
    name: 'PASSPORT.JS',
    image: logoPassport
  },
  {
    id: 22,
    name: 'AJAX',
    image: logoAJAX
  },
  {
    id: 23,
    name: 'BOOTSTRAP',
    image: logoBootstrap
  },
  {
    id: 24,
    name: 'HANDLEBARS',
    image: logoHandlebars
  },
];

export const projects = [
  {
    id: 0,
    name: 'Anagram Battle',
    url: 'http://www.anagram-battle.com',
    ghUrl: 'https://github.com/mcarter78/anagram-battle',
    image: zombieThumb,
    alt: 'Anagram Battle Thumbnail Image',
    class: 'visible',
    detailClass: 'hidden',
    chips: ['JQUERY', 'JAVASCRIPT', 'PHOTOSHOP'],
    detail: 'Anagram Battle is a game that tests your ability to deconstruct words and reconstruct them into new words. Go head to head with a variety of fearsome monsters, using your word knowledge to defeat them. Come up with 3 anagrams for the word given to send your foe to his doom. Defeat all eight monsters to become the supreme champion of vocabulary wisdom!'
  },
  {
    id: 1,
    name: 'Spiegel Law',
    url: 'https://spiegel-law.herokuapp.com',
    ghUrl: null,
    image: spiegelThumb,
    alt: 'Spiegel Law Thumbnail Image',
    class: 'visible',
    detailClass: 'hidden',
    chips: ['HANDLEBARS', 'EXPRESS.JS', 'NODE.JS', 'GOOGLE MAPS API'],
    detail: 'Website redesign for the Law Office of Yasmin C. Spiegel in Davis, CA. Uses Handlebars to serve content dynamically determined by route. Uses Nodemailer to give functionality to the contact form.'
  },
  {
    id: 2,
    name: 'Birdspots',
    url: 'http://birdspots.net',
    ghUrl: 'https://github.com/mcarter78/birder_app',
    image: birdsThumb,
    alt: 'Birdspots Thumbnail Image',
    class: 'visible',
    detailClass: 'hidden',
    chips: ['MONGODB', 'ANGULAR', 'EXPRESS.JS', 'NODE.JS', 'GOOGLE MAPS API'],
    detail: 'BirdSpots allows bird watchers to record the birds they have seen. Users are able to see all of their past entries as markers on a map. It allows Birders to leave the paper diary at home and record their entries in a more user-friendly and permanent way.'
  },
  {
    id: 3,
    name: 'Spacetime Drifter',
    url: 'https://peaceful-sierra-40182.herokuapp.com/',
    ghUrl: 'https://github.com/mcarter78/spacetimedrifter',
    image: spaceThumb,
    alt: 'Spacetime Drifter Thumbnail Image',
    class: 'visible',
    detailClass: 'hidden',
    chips: ['RUBY ON RAILS', 'POSTGRESQL'],
    detail: 'SpaceTimeDrifter is a (hypothetical!) community for interplanetary travelers to share their experiences and adventures throughout the solar system. Student project to demonstrate proficiency building REST API / CRUD Operations.'
  },
  {
    id: 4,
    name: 'Ninjastar Comic',
    url: 'https://shrouded-peak-2980.herokuapp.com',
    ghUrl: 'https://github.com/mcarter78/ninjastar-comic',
    image: ninjaThumb,
    alt: 'Ninjastar Comic Thumbnail Image',
    class: 'visible',
    detailClass: 'hidden',
    chips: ['MONGODB', 'EXPRESS.JS', 'ANGULAR', 'NODE.JS'],
    detail: 'Website for Ninja Star Comic by Scott Carter.'
  },
  {
    id: 5,
    name: 'Brick Clicker 2016',
    url: 'http://brickclicker2016.win',
    ghUrl: 'https://github.com/mcarter78/brickclicker2016',
    image: bricksThumb,
    alt: 'Brick Clicker 2016 Thumbnail Image',
    class: 'visible',
    detailClass: 'hidden',
    chips: ['ANGULAR', 'FIREBASE', 'PHOTOSHOP'],
    detail: 'Ok, this one is a little outdated, but go on...you know you want to add a few bricks...for old-times sake!  If global brick count shows 0, refresh the page...a bug that I need to get back to.'
  },
  {
    id: 6,
    name: 'LP Check',
    url: 'http://lpcheck.com',
    ghUrl: 'https://github.com/mcarter78/lpcheck',
    image: lpThumb,
    alt: 'LP Check Thumbnail Image',
    class: 'visible',
    detailClass: 'hidden',
    chips: ['REACT'],
    detail: 'My first self-taught React project: LPCheck is a simple app that uses the Discogs.com API to fetch my record collection. When I find a record that I want, I can use the search feature on my app to make sure that I dont have it already. For demo purposes, use username: mcarter78'
  }
];
