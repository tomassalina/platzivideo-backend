const moviesMock = [
  {
    title: 'Waist deep',
    year: 2020,
    cover:
      'https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260',
    description:
      'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
    duration: 28,
    contentRating: 'G',
    source:
      'https://player.vimeo.com/external/353237048.sd.mp4?s=5c5b9fe2d339fad7a512119b8a5446b864c3f133&profile_id=139&oauth2_token_id=57447761',
    tags: [
      'comedy',
      'crime',
      'drama',
      'mystery',
      'action',
      'animation',
      'comedy',
    ],
  },
  {
    title: 'Bells in the beach',
    year: 2016,
    cover:
      'https://images.pexels.com/photos/1427741/pexels-photo-1427741.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260',
    description:
      'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
    duration: 94,
    contentRating: 'G',
    source:
      'https://player.vimeo.com/external/210754205.sd.mp4?s=f844a26dd3a14fbeabeae288ac391f61bc63dc9b&profile_id=164&oauth2_token_id=57447761',
    tags: ['comedy', 'drama'],
  },
  {
    title: 'Bourne Company',
    year: 1997,
    cover:
      'https://images.pexels.com/photos/705792/pexels-photo-705792.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    description:
      'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
    duration: 24,
    contentRating: 'G',
    source:
      'https://player.vimeo.com/external/472809419.sd.mp4?s=490191d76af2b496ed76e70d7ba80282353c5dca&profile_id=139&oauth2_token_id=57447761',
    tags: ['crime', 'drama', 'comedy', 'romance'],
  },
  {
    title: 'Aftermath painting',
    year: 2011,
    cover:
      'https://images.pexels.com/photos/904276/pexels-photo-904276.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    description:
      'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
    duration: 38,
    contentRating: 'G',
    source:
      'https://player.vimeo.com/external/336531450.sd.mp4?s=1d6fed6c6386d44ca29a7464c89d074cd5404574&profile_id=139&oauth2_token_id=57447761',
    tags: ['comedy', 'fantasy', 'drama', 'thriller'],
  },
  {
    title: 'Angriest Man in the river',
    year: 2019,
    cover:
      'https://images.pexels.com/photos/1172207/pexels-photo-1172207.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&w=500',
    description:
      'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    duration: 36,
    contentRating: 'G',
    source:
      'https://player.vimeo.com/external/328428416.sd.mp4?s=39df9f60fdeaeff0f4e3fbf3c1213d395792fc43&profile_id=164&oauth2_token_id=57447761',
    tags: ['comedy', 'romance', 'drama', 'crime', 'thriller'],
  },
  {
    title: 'Stage Struck',
    year: 2018,
    cover:
      'https://images.pexels.com/photos/233129/pexels-photo-233129.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    description:
      'In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
    duration: 67,
    contentRating: 'G',
    source:
      'https://player.vimeo.com/external/431573250.sd.mp4?s=9270678f4ba3ba034490bddb18c3416d42ca738e&profile_id=139&oauth2_token_id=57447761',
    tags: ['documentary', 'horror'],
  },
  {
    title: 'Every Which Way But Loose',
    year: 2010,
    cover:
      'https://images.pexels.com/photos/1666779/pexels-photo-1666779.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    description:
      'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
    duration: 12,
    contentRating: 'G',
    source:
      'https://player.vimeo.com/external/405066654.sd.mp4?s=bdc98acc182323a2cd1ebc80521401c450ba392d&profile_id=139&oauth2_token_id=57447761',
    tags: ['documentary'],
  },
  {
    title: 'Arrow functions',
    year: 2015,
    cover:
      'https://images.pexels.com/photos/413879/pexels-photo-413879.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260',
    description:
      'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
    duration: 7,
    contentRating: 'G',
    source:
      'https://player.vimeo.com/external/506977823.sd.mp4?s=267148c497c5511941722a1f5062179f3e8d6df5&profile_id=139&oauth2_token_id=57447761',
    tags: [
      'drama',
      'horror',
      'mystery',
      'crime',
      'drama',
      'musical',
      'romance',
    ],
  },
];

function filteredMoviesMock(tag) {
  return moviesMock.filter((movie) => movie.tags.includes(tag));
}

class MovieServiceMock {
  async getMovies() {
    return Promise.resolve(moviesMock);
  }

  async createMovie() {
    return Promise.resolve(moviesMock[0]);
  }
}

module.exports = {
  moviesMock,
  filteredMoviesMock,
  MovieServiceMock,
};
