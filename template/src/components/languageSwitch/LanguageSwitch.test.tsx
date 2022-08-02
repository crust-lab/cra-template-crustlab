import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import LanguageSwitch from '.';
import { useLanguage } from '../../hooks';

const LanguageSwitchMock = () => {
  const { defaultLangVal, languageSwitchOptions } = useLanguage();

  return (
    <LanguageSwitch
      languageSwitchOptions={languageSwitchOptions}
      defaultLangVal={defaultLangVal}
    />
  );
};

beforeEach(() => {
  // This replaces the original implementation of setTimeout() and other timer functions to allow ant-d components to be animated.
  jest.useFakeTimers();
});

afterEach(() => {
  jest.useRealTimers();
});

describe('Language change', () => {
  test('render component', async () => {
    // given
    render(<LanguageSwitchMock />);

    // then
    screen.getByText(/language:/i);
  });

  test('change language to pl', async () => {
    // given
    render(<LanguageSwitchMock />);
    const languageChangeButton = screen.getByTestId(
      'language-change-button'
    ).firstElementChild;
    expect(languageChangeButton).not.toBeNull();

    // when
    if (languageChangeButton) fireEvent.mouseDown(languageChangeButton);
    const plOption = await screen.findByText('PL');
    fireEvent.click(plOption);

    // then
    screen.getByText(/język:/i);
  });
});
