import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  emailValidation,
  emailValid,
  emailEmpty,
  emailInvalid,
  monthValidation,
  monthValid,
  monthInvalid,
  dayValidation,
  dayValid,
  dayInvalid,
  yearValidation,
  yearValid,
  yearInvalid,
  tosValidation,
  tosValid,
  tosInvalid,
  ageValidation,
  ageValid,
  ageInvalid
} from './validation';

import {
  ageValidation,
  ageValid,
  ageInvalid
} from './age';

describe('validation / redux', () => {
  let store;

  beforeAll(() => {
    const middlewares = [thunk];
    const mockStore = configureStore(middlewares);
    store = mockStore();
  });

  test('emailValidation dispatches validEmail if email passes', () => {
    store.dispatch(emailValidation('test@test.com'));
    expect(store.getActions()).toContainEqual(emailValid('test@test.com'));
  });

  test('emailValidation dispatches emptyEmail if no email', () => {
    store.dispatch(emailValidation(''));
    expect(store.getActions()).toContainEqual(emailEmpty(''));
  });

  test('emailValidation dispatches invalidEmail if email fails', () => {
    store.dispatch(emailValidation('testymctesterson'));
    expect(store.getActions()).toContainEqual(emailInvalid('testymctesterson'));
  });

  test('monthValidation dispatches monthValid if month passes', () => {
    store.dispatch(monthValidation('01'));
    expect(store.getActions()).toContainEqual(monthValid('01'));
  });

  test('monthValidation dispatches monthInvalid if month is default value', () => {
    store.dispatch(monthValidation('MM'));
    expect(store.getActions()).toContainEqual(monthInvalid('MM'));
  });

  test('dayValidation dispatches dayValid if month passes', () => {
    store.dispatch(dayValidation('01'));
    expect(store.getActions()).toContainEqual(dayValid('01'));
  });

  test('dayValidation dispatches dayInvalid if month is default value', () => {
    store.dispatch(dayValidation('DD'));
    expect(store.getActions()).toContainEqual(dayInvalid('DD'));
  });

  test('yearValidation dispatches yearValid if year passes', () => {
    store.dispatch(yearValidation('1969'));
    expect(store.getActions()).toContainEqual(yearValid('1969'));
  });

  test('yearValidation dispatches yearInvalid if year is default value', () => {
    store.dispatch(yearValidation('YYYY'));
    expect(store.getActions()).toContainEqual(yearInvalid('YYYY'));
  });

  test('tosValidation dispatches tosValid if checked is true', () => {
    store.dispatch(tosValidation(true));
    expect(store.getActions()).toContainEqual(tosValid(true));
  });

  test('tosValidation dispatches tosInvalid if checked is false', () => {
    store.dispatch(tosValidation(false));
    expect(store.getActions()).toContainEqual(tosInvalid(false));
  });

  test('ageValidation dispatches ageValid if dob > 18 years', () => {
    store.dispatch(ageValidation('01011969'));
    expect(store.getActions()).toContainEqual(ageValid('01011969'));
  });

  test('ageValidation dispatches ageInvalid if dob < 18 years', () => {
    store.dispatch(ageValidation('01012017'));
    expect(store.getActions()).toContainEqual(ageInvalid('01012017'));
  });
});
