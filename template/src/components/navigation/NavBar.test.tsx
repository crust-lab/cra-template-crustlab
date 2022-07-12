import React from 'react';
import { render, screen } from '../../tests/testUtils';
import NavBar from './NavBar';

describe('Navbar', () => {
  test('render component', async () => {
    // given
    render(<NavBar />);

    // then
    screen.getByText(/home/i);
    screen.getByText(/rick and morty/i);
    screen.getByText(/protected/i);
    screen.getByText(/user authorised: false/i);
    screen.getByRole('link', { name: /go to login/i });
  });

  test('links href values', async () => {
    // given
    render(<NavBar />);
    const homePageHref = '/';
    const rickyAndMortyHref = '/rickandmorty';
    const protectedHref = '/protected';
    const authHref = '/auth/login';

    // then
    expect(
      screen.getByRole('link', { name: /home/i }).getAttribute('href')
    ).toBe(homePageHref);

    expect(
      screen.getByRole('link', { name: /rick and morty/i }).getAttribute('href')
    ).toBe(rickyAndMortyHref);

    expect(
      screen.getByRole('link', { name: /protected/i }).getAttribute('href')
    ).toBe(protectedHref);

    expect(
      screen.getByRole('link', { name: /go to login/i }).getAttribute('href')
    ).toBe(authHref);
  });
});
