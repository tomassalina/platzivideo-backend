const moviesMock = [
  {
    id: '9b45c155-5ab3-49c9-9cf1-a6e892fd45e0',
    title: 'Midnight in the Garden of Good and Evil',
    year: 2000,
    cover: 'http://dummyimage.com/101x178.png/5fa2dd/ffffff',
    description:
      'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
    duration: 19,
    contentRating: null,
    source:
      'https://sbwire.com/ac/diam/cras/pellentesque/volutpat/dui/maecenas.html?ultricies=sit&eu=amet&nibh=lobortis&quisque=sapien&id=sapien&justo=non&sit=mi&amet=integer&sapien=ac&dignissim=neque&vestibulum=duis&vestibulum=bibendum&ante=morbi&ipsum=non&primis=quam&in=nec&faucibus=dui&orci=luctus&luctus=rutrum&et=nulla&ultrices=tellus&posuere=in&cubilia=sagittis&curae=dui&nulla=vel&dapibus=nisl&dolor=duis&vel=ac&est=nibh&donec=fusce&odio=lacus&justo=purus&sollicitudin=aliquet&ut=at&suscipit=feugiat&a=non&feugiat=pretium&et=quis&eros=lectus&vestibulum=suspendisse&ac=potenti&est=in&lacinia=eleifend&nisi=quam&venenatis=a&tristique=odio&fusce=in&congue=hac&diam=habitasse&id=platea&ornare=dictumst&imperdiet=maecenas&sapien=ut&urna=massa&pretium=quis&nisl=augue&ut=luctus&volutpat=tincidunt&sapien=nulla&arcu=mollis&sed=molestie&augue=lorem&aliquam=quisque&erat=ut&volutpat=erat&in=curabitur&congue=gravida&etiam=nisi&justo=at&etiam=nibh&pretium=in&iaculis=hac&justo=habitasse&in=platea&hac=dictumst&habitasse=aliquam&platea=augue&dictumst=quam&etiam=sollicitudin&faucibus=vitae&cursus=consectetuer&urna=eget&ut=rutrum&tellus=at&nulla=lorem&ut=integer&erat=tincidunt&id=ante',
    tags: ['Comedy', 'Crime|Drama|Mystery', 'Action|Animation|Children|Comedy'],
  },
  {
    id: '68d92d40-786e-4697-aed5-a5b29c4ffb3c',
    title: 'Bells, The',
    year: 1998,
    cover: 'http://dummyimage.com/230x237.bmp/ff4444/ffffff',
    description:
      'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
    duration: 94,
    contentRating: null,
    source:
      'http://ucsd.edu/pretium/nisl/ut.json?elementum=proin&in=risus&hac=praesent&habitasse=lectus&platea=vestibulum&dictumst=quam&morbi=sapien&vestibulum=varius&velit=ut&id=blandit&pretium=non&iaculis=interdum&diam=in&erat=ante&fermentum=vestibulum&justo=ante&nec=ipsum&condimentum=primis&neque=in&sapien=faucibus&placerat=orci&ante=luctus&nulla=et&justo=ultrices&aliquam=posuere&quis=cubilia&turpis=curae&eget=duis&elit=faucibus&sodales=accumsan&scelerisque=odio&mauris=curabitur&sit=convallis&amet=duis&eros=consequat&suspendisse=dui&accumsan=nec&tortor=nisi&quis=volutpat&turpis=eleifend&sed=donec&ante=ut&vivamus=dolor&tortor=morbi&duis=vel&mattis=lectus&egestas=in&metus=quam',
    tags: ['Comedy', 'Comedy'],
  },
  {
    id: '8bbce50e-9b07-4e8b-a1da-8f42f5be6422',
    title: 'Bourne Legacy, The',
    year: 1997,
    cover: 'http://dummyimage.com/218x150.jpg/ff4444/ffffff',
    description:
      'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
    duration: 55,
    contentRating: null,
    source:
      'http://sogou.com/justo/morbi/ut/odio.png?convallis=sed&duis=lacus&consequat=morbi&dui=sem&nec=mauris&nisi=laoreet&volutpat=ut&eleifend=rhoncus&donec=aliquet&ut=pulvinar&dolor=sed&morbi=nisl&vel=nunc&lectus=rhoncus&in=dui&quam=vel&fringilla=sem&rhoncus=sed&mauris=sagittis&enim=nam&leo=congue&rhoncus=risus&sed=semper&vestibulum=porta&sit=volutpat&amet=quam&cursus=pede&id=lobortis&turpis=ligula&integer=sit&aliquet=amet&massa=eleifend&id=pede&lobortis=libero&convallis=quis&tortor=orci&risus=nullam&dapibus=molestie&augue=nibh&vel=in&accumsan=lectus&tellus=pellentesque&nisi=at&eu=nulla&orci=suspendisse&mauris=potenti&lacinia=cras&sapien=in&quis=purus&libero=eu&nullam=magna&sit=vulputate&amet=luctus&turpis=cum&elementum=sociis&ligula=natoque&vehicula=penatibus&consequat=et&morbi=magnis&a=dis&ipsum=parturient&integer=montes&a=nascetur&nibh=ridiculus&in=mus&quis=vivamus&justo=vestibulum&maecenas=sagittis&rhoncus=sapien&aliquam=cum&lacus=sociis&morbi=natoque&quis=penatibus&tortor=et&id=magnis&nulla=dis',
    tags: [
      'Crime|Drama|Film-Noir',
      'Comedy|Drama|Romance',
      'Drama|Romance',
      'Comedy|Drama',
    ],
  },
  {
    id: 'e0c91adc-7c9a-4479-a7d9-b04b1a60495d',
    title: 'Aftermath',
    year: 2011,
    cover: 'http://dummyimage.com/227x170.jpg/ff4444/ffffff',
    description:
      'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
    duration: 28,
    contentRating: null,
    source:
      'https://mozilla.com/lacus/morbi/sem/mauris/laoreet.aspx?donec=pellentesque&quis=viverra&orci=pede&eget=ac&orci=diam&vehicula=cras&condimentum=pellentesque&curabitur=volutpat&in=dui&libero=maecenas&ut=tristique&massa=est&volutpat=et&convallis=tempus&morbi=semper&odio=est&odio=quam&elementum=pharetra&eu=magna&interdum=ac&eu=consequat&tincidunt=metus&in=sapien&leo=ut&maecenas=nunc&pulvinar=vestibulum&lobortis=ante&est=ipsum&phasellus=primis&sit=in&amet=faucibus&erat=orci&nulla=luctus&tempus=et&vivamus=ultrices&in=posuere&felis=cubilia&eu=curae&sapien=mauris&cursus=viverra&vestibulum=diam&proin=vitae&eu=quam&mi=suspendisse&nulla=potenti&ac=nullam&enim=porttitor&in=lacus&tempor=at&turpis=turpis&nec=donec&euismod=posuere&scelerisque=metus&quam=vitae&turpis=ipsum&adipiscing=aliquam&lorem=non&vitae=mauris&mattis=morbi&nibh=non&ligula=lectus&nec=aliquam&sem=sit&duis=amet&aliquam=diam&convallis=in&nunc=magna&proin=bibendum&at=imperdiet&turpis=nullam&a=orci&pede=pede&posuere=venenatis&nonummy=non&integer=sodales&non=sed&velit=tincidunt&donec=eu&diam=felis&neque=fusce&vestibulum=posuere&eget=felis&vulputate=sed&ut=lacus&ultrices=morbi&vel=sem&augue=mauris&vestibulum=laoreet&ante=ut',
    tags: ['Comedy|Fantasy', 'Drama|Thriller'],
  },
  {
    id: '04060aaf-1711-401b-86f4-fb4d1ae6f20d',
    title: 'Angriest Man in Brooklyn, The',
    year: 1992,
    cover: 'http://dummyimage.com/205x232.bmp/ff4444/ffffff',
    description:
      'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    duration: 63,
    contentRating: null,
    source:
      'https://bigcartel.com/ut.js?lorem=libero&ipsum=quis&dolor=orci&sit=nullam&amet=molestie&consectetuer=nibh&adipiscing=in&elit=lectus&proin=pellentesque&risus=at&praesent=nulla&lectus=suspendisse&vestibulum=potenti&quam=cras&sapien=in&varius=purus&ut=eu&blandit=magna&non=vulputate&interdum=luctus&in=cum&ante=sociis&vestibulum=natoque&ante=penatibus&ipsum=et&primis=magnis&in=dis&faucibus=parturient&orci=montes&luctus=nascetur&et=ridiculus&ultrices=mus&posuere=vivamus&cubilia=vestibulum&curae=sagittis&duis=sapien&faucibus=cum&accumsan=sociis&odio=natoque&curabitur=penatibus&convallis=et&duis=magnis&consequat=dis&dui=parturient&nec=montes&nisi=nascetur&volutpat=ridiculus&eleifend=mus&donec=etiam&ut=vel&dolor=augue&morbi=vestibulum&vel=rutrum&lectus=rutrum&in=neque&quam=aenean&fringilla=auctor&rhoncus=gravida&mauris=sem&enim=praesent&leo=id&rhoncus=massa&sed=id&vestibulum=nisl&sit=venenatis&amet=lacinia&cursus=aenean&id=sit&turpis=amet&integer=justo&aliquet=morbi&massa=ut&id=odio&lobortis=cras&convallis=mi&tortor=pede',
    tags: [
      'Comedy|Romance',
      'Comedy|Drama|Romance',
      'Comedy|Crime|Drama|Thriller',
      'Comedy',
    ],
  },
  {
    id: '19458edd-09f9-4ff1-a6c1-0a75543072d5',
    title: 'Stage Struck',
    year: 1994,
    cover: 'http://dummyimage.com/148x186.jpg/dddddd/000000',
    description:
      'In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
    duration: 67,
    contentRating: null,
    source:
      'https://hostgator.com/convallis/nulla/neque/libero/convallis.html?justo=condimentum&in=id&hac=luctus&habitasse=nec&platea=molestie&dictumst=sed&etiam=justo&faucibus=pellentesque&cursus=viverra&urna=pede&ut=ac&tellus=diam&nulla=cras&ut=pellentesque&erat=volutpat&id=dui&mauris=maecenas&vulputate=tristique&elementum=est&nullam=et&varius=tempus&nulla=semper&facilisi=est&cras=quam&non=pharetra&velit=magna&nec=ac&nisi=consequat&vulputate=metus&nonummy=sapien&maecenas=ut&tincidunt=nunc&lacus=vestibulum&at=ante&velit=ipsum&vivamus=primis&vel=in&nulla=faucibus&eget=orci&eros=luctus&elementum=et&pellentesque=ultrices&quisque=posuere&porta=cubilia&volutpat=curae&erat=mauris&quisque=viverra&erat=diam&eros=vitae&viverra=quam&eget=suspendisse&congue=potenti&eget=nullam&semper=porttitor&rutrum=lacus&nulla=at&nunc=turpis&purus=donec&phasellus=posuere&in=metus&felis=vitae&donec=ipsum&semper=aliquam&sapien=non&a=mauris&libero=morbi&nam=non&dui=lectus&proin=aliquam&leo=sit&odio=amet&porttitor=diam&id=in&consequat=magna&in=bibendum&consequat=imperdiet&ut=nullam&nulla=orci&sed=pede&accumsan=venenatis&felis=non&ut=sodales&at=sed&dolor=tincidunt&quis=eu&odio=felis&consequat=fusce&varius=posuere&integer=felis&ac=sed',
    tags: ['Documentary', 'Horror'],
  },
  {
    id: 'f4f87a81-e6be-43df-854d-d0f4c8385f27',
    title: 'Every Which Way But Loose',
    year: 2010,
    cover: 'http://dummyimage.com/183x131.jpg/5fa2dd/ffffff',
    description:
      'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
    duration: 12,
    contentRating: null,
    source:
      'https://drupal.org/eu/tincidunt/in.png?nullam=morbi&varius=non&nulla=lectus&facilisi=aliquam&cras=sit&non=amet&velit=diam&nec=in&nisi=magna&vulputate=bibendum&nonummy=imperdiet&maecenas=nullam',
    tags: ['Documentary'],
  },
  {
    id: '74337b5b-5766-4095-a999-34403de7ab35',
    title: 'Waist Deep',
    year: 1997,
    cover: 'http://dummyimage.com/103x129.jpg/dddddd/000000',
    description:
      'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
    duration: 69,
    contentRating: null,
    source:
      'http://spotify.com/aliquam/augue/quam/sollicitudin.aspx?eget=fringilla&vulputate=rhoncus&ut=mauris&ultrices=enim&vel=leo&augue=rhoncus&vestibulum=sed&ante=vestibulum&ipsum=sit&primis=amet&in=cursus&faucibus=id&orci=turpis&luctus=integer&et=aliquet&ultrices=massa&posuere=id&cubilia=lobortis&curae=convallis&donec=tortor&pharetra=risus&magna=dapibus&vestibulum=augue&aliquet=vel&ultrices=accumsan&erat=tellus&tortor=nisi&sollicitudin=eu&mi=orci&sit=mauris&amet=lacinia&lobortis=sapien&sapien=quis&sapien=libero&non=nullam&mi=sit&integer=amet&ac=turpis&neque=elementum&duis=ligula&bibendum=vehicula&morbi=consequat&non=morbi&quam=a&nec=ipsum&dui=integer&luctus=a&rutrum=nibh',
    tags: ['Drama|Horror|Mystery', 'Crime|Drama|Musical|Romance'],
  },
  {
    id: 'f76c01f7-35fc-467b-af2b-37b17a96fdbf',
    title: 'Jesse James',
    year: 1985,
    cover: 'http://dummyimage.com/127x113.bmp/5fa2dd/ffffff',
    description:
      'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',
    duration: 56,
    contentRating: null,
    source:
      'http://economist.com/eu/magna/vulputate.jpg?mauris=proin&sit=risus&amet=praesent&eros=lectus&suspendisse=vestibulum&accumsan=quam&tortor=sapien&quis=varius&turpis=ut&sed=blandit&ante=non&vivamus=interdum&tortor=in&duis=ante&mattis=vestibulum&egestas=ante&metus=ipsum&aenean=primis&fermentum=in&donec=faucibus&ut=orci&mauris=luctus&eget=et&massa=ultrices&tempor=posuere&convallis=cubilia&nulla=curae&neque=duis&libero=faucibus&convallis=accumsan&eget=odio&eleifend=curabitur&luctus=convallis&ultricies=duis&eu=consequat&nibh=dui&quisque=nec&id=nisi&justo=volutpat&sit=eleifend&amet=donec&sapien=ut&dignissim=dolor&vestibulum=morbi&vestibulum=vel&ante=lectus&ipsum=in&primis=quam',
    tags: ['Crime|Drama|Film-Noir', 'War|Western'],
  },
  {
    id: '2c424036-09d2-40fb-a4e6-7c98d1d2a086',
    title: 'Good bye, Lenin!',
    year: 2004,
    cover: 'http://dummyimage.com/130x158.bmp/dddddd/000000',
    description:
      'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
    duration: 5,
    contentRating: null,
    source:
      'http://netscape.com/tellus/semper/interdum/mauris/ullamcorper/purus.jsp?nibh=vivamus&fusce=in&lacus=felis&purus=eu&aliquet=sapien&at=cursus&feugiat=vestibulum&non=proin&pretium=eu&quis=mi&lectus=nulla&suspendisse=ac&potenti=enim&in=in&eleifend=tempor&quam=turpis&a=nec&odio=euismod&in=scelerisque&hac=quam&habitasse=turpis&platea=adipiscing&dictumst=lorem&maecenas=vitae&ut=mattis&massa=nibh&quis=ligula&augue=nec&luctus=sem&tincidunt=duis&nulla=aliquam&mollis=convallis&molestie=nunc&lorem=proin&quisque=at&ut=turpis&erat=a&curabitur=pede&gravida=posuere',
    tags: ['Drama', 'Action|Musical|Sci-Fi', 'Documentary'],
  },
];

module.exports = {
  moviesMock,
};
