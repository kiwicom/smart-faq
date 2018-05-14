// @flow

import * as React from 'react';

import { LanguageContext } from '../context/Language';
import frontendLanguageToLocale from './frontendLanguageToLocale';

export const URGENCY_THRESHOLD = 48;

type Props = {|
  dateString: string,
|};

export const FormatDate = ({ dateString }: Props) => {
  const options = { weekday: 'short', month: 'short', day: 'numeric' };
  return (
    <LanguageContext.Consumer>
      {language => {
        const locale = frontendLanguageToLocale[language].replace('_', '-');

        return (
          <p>{new Date(dateString).toLocaleDateString(locale, options)}</p>
        );
      }}
    </LanguageContext.Consumer>
  );
};

export const formatCountDown = (hoursLeft: number) => {
  const nhours = Math.floor(hoursLeft);
  const nmins = Math.floor((hoursLeft - nhours) * 60);
  const ndays = Math.floor(hoursLeft / 24);
  if (hoursLeft < URGENCY_THRESHOLD) {
    return nmins ? `${nhours}h ${nmins}min` : `${nhours}h`;
  }
  return `${ndays} days`;
};

export const formatTimeDuration = (mins: number) => {
  const nhours = Math.floor(mins / 60);
  const nmins = mins - nhours * 60;
  return nhours ? `${nhours}h ${nmins}min` : `${nmins}min`;
};

export const formatHour = (date: string) => {
  const options = { hour: 'numeric', timeZone: 'UTC', minute: 'numeric' };
  return new Date(date).toLocaleString('en-US', options);
};
