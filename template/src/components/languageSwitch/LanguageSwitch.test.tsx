import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { useTranslation } from 'react-i18next';
import LanguageSwitch, { LanguageSwitchOption } from '.';
import { DEFAULT_LANGUAGE, LanguageOptions } from '../../translations/i18n';

const LanguageSwitchMock = () => {
  const { i18n } = useTranslation();
  const defaultLangVal = (i18n.language as LanguageOptions) || DEFAULT_LANGUAGE;

  const languageSwitchOptions: LanguageSwitchOption[] = [
    {
      value: LanguageOptions.EN,
      labelTranslation: 'languageChange.eng',
    },
    {
      value: LanguageOptions.PL,
      labelTranslation: 'languageChange.pl',
    },
  ];

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
