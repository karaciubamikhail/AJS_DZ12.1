import Movie from '../domain/Movie';

test('new Movie', () => {
  const Avengers = new Movie(1010, 'Avengers', 400, 2012, 'USA', 'Avengers Assemble!', 'фантастика, боевик, фэнтези, приключения',137);

  expect(Avengers).toEqual({
    id: 1010,
    name: 'Avengers',
    price: 400,
    year: 2012,
    origin: 'USA',
    slogan: 'Avengers Assemble!',
    genre: 'фантастика, боевик, фэнтези, приключения',
    length: 137
  });
});
