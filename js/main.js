const PHOTO_COUNT = 25;
const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];
const NAMES = [
  'Анна',
  'Борис',
  'Виктор',
  'Денис',
  'Екатерина',
  'Зинаида',
  'Ирина',
  'Кира',
  'Мария',
  'Нина',
];
const DESCRIPTION = [
  'Рисунок светом',
  'Для плохого кофе жизнь слишком коротка.',
  'В процессе разработки.',
  'Отвественно подхожу к возможности.',
  'Простота.',
  'Лучшее из худшего.',
  'Здесь могла бы быть ваша реклама',
];

const Likes = {
  MIN: 15,
  MAX: 200
};
const Comments = {
  MIN: 0,
  MAX: 30
};
const Acavatar = {
  MIN: 1,
  MAX: 6
};
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];
/*const randomNameIndex = getRandomInteger(0, NAMES.length - 1);
const randomMessageIndex = getRandomInteger(0, MESSAGES.length - 1);*/
const addPhoto = (index) => ({
  id: index,
  url: `photos/${index + 1}.jpg`,
  description: getRandomArrayElement(DESCRIPTION),
  likes: getRandomInteger(Likes.MIN, Likes.MAX),
});
const addComment = (index) => ({
  id: index,
  avatar: `img/avatar-${getRandomInteger(Acavatar.MIN, Acavatar.MAX)}.svg`,
  comments: getRandomArrayElement(MESSAGES)(getRandomInteger(Comments.MIN, Comments.MAX)),
  names: getRandomArrayElement(NAMES),
});

/*const addPhotos = () => {
  for (let i = 0; i < PHOTO_COUNT; i++)
    photos.push(addPhoto(i));
};*/

const addPhotos = Array.from({ length: PHOTO_COUNT }, addPhoto,addComment);

addPhotos();
