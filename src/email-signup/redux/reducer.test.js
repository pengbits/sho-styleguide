import { validation, values, age } from './reducer';
import { submission } from './redux/submission';
import {
  emailValid,
  emailEmpty,
  emailInvalid,
  monthValid,
  monthInvalid,
  dayValid,
  dayInvalid,
  yearValid,
  yearInvalid,
  tosValid,
  tosInvalid
} from './validation';

import {
  ageValid,
  ageInvalid
} from './age';

describe('reducers', () => {
  let initialState;

  beforeEach(() => {
    initialState = {
      validation: [
        { type: 'empty email', error: false, message: 'Please enter an email' },
        { type: 'invalid email', error: false, message: 'Please enter a valid email' },
        { type: 'empty month', error: false, message: 'Please enter a valid month' },
        { type: 'empty day', error: false, message: 'Please enter a valid day' },
        { type: 'empty year', error: false, message: 'Please enter a valid year' },
        {
          type: 'empty terms and conditions',
          error: false,
          message: 'Please accept the Terms and Conditions'
        }
      ],
      values: {},
      age: { eligible: null, dob: null },
      submission: {
        pending: null,
        success: null
      }
    };
  });

  // validation
  describe('validation', () => {
    test('should return the default state.validation', () => {
      expect(validation(undefined, {})).toEqual(initialState.validation);
    });

    test('should return state validation no email error:true for empty email', () => {
      const expectedState = { type: 'empty email', error: true, message: 'Please enter an email' };
      expect(validation(initialState.validation, emailEmpty(''))).toContainEqual(expectedState);
    });

    test('should return state validation email error:true for incorrect email', () => {
      const expectedState = {
        type: 'invalid email',
        error: true,
        message: 'Please enter a valid email'
      };
      expect(validation(initialState.validation, emailInvalid('asfdsa'))).toContainEqual(
        expectedState
      );
    });

    test('should return state validation month error:true for empty month', () => {
      const expectedState = {
        type: 'empty month',
        error: true,
        message: 'Please enter a valid month'
      };
      expect(validation(initialState.validation, monthInvalid('MM'))).toContainEqual(expectedState);
    });

    test('should return state validation day error:true for empty day', () => {
      const expectedState = { type: 'empty day', error: true, message: 'Please enter a valid day' };
      expect(validation(initialState.validation, dayInvalid('DD'))).toContainEqual(expectedState);
    });

    test('should return state validation year error:true for empty year', () => {
      const expectedState = {
        type: 'empty year',
        error: true,
        message: 'Please enter a valid year'
      };
      expect(validation(initialState.validation, yearInvalid('2017'))).toContainEqual(
        expectedState
      );
    });

    test(
      'should return state validation empty terms and conditions error:true for unchecked tos',
      () => {
        const expectedState = {
          type: 'empty terms and conditions',
          error: true,
          message: 'Please accept the Terms and Conditions'
        };
        expect(validation(initialState.validation, tosInvalid(false))).toContainEqual(
          expectedState
        );
      }
    );

    test('should return state validation no email error:false for valid email', () => {
      const expectedState = { type: 'empty email', error: false, message: 'Please enter an email' };
      expect(validation(initialState.validation, emailValid('2legit@2legit2quit.com'))).toContainEqual(expectedState);
    });

    test('should return state validation month error:false for valid month', () => {
      const expectedState = {
        type: 'empty month',
        error: false,
        message: 'Please enter a valid month'
      };
      expect(validation(initialState.validation, monthValid('12'))).toContainEqual(expectedState);
    });

    test('should return state validation day error:false for valid day', () => {
      const expectedState = { type: 'empty day', error: false, message: 'Please enter a valid day' };
      expect(validation(initialState.validation, dayValid('12'))).toContainEqual(expectedState);
    });

    test('should return state validation year error:false for valid year', () => {
      const expectedState = {
        type: 'empty year',
        error: false,
        message: 'Please enter a valid year'
      };
      expect(validation(initialState.validation, yearValid('1917'))).toContainEqual(
        expectedState
      );
    });

    test(
      'should return state validation empty terms and conditions error:false for checked tos',
      () => {
        const expectedState = {
          type: 'empty terms and conditions',
          error: false,
          message: 'Please accept the Terms and Conditions'
        };
        expect(validation(initialState.validation, tosValid(true))).toContainEqual(
          expectedState
        );
      }
    );
  });

  // values
  describe('values', () => {
    test('should return the default state.values', () => {
      expect(values(undefined, {})).toEqual(initialState.values);
    });

    test('should return state email value for valid email', () => {
      const expectedState = { email: 'test@test.com' };
      expect(values(initialState.values, emailValid('test@test.com'))).toEqual(expectedState);
    });

    test('should return state month value for valid month', () => {
      const expectedState = { month: '01' };
      expect(values(initialState.values, monthValid('01'))).toEqual(expectedState);
    });

    test('should return state day value for valid day', () => {
      const expectedState = { day: '01' };
      expect(values(initialState.values, dayValid('01'))).toEqual(expectedState);
    });

    test('should return state year value for valid year', () => {
      const expectedState = { year: '1969' };
      expect(values(initialState.values, yearValid('1969'))).toEqual(expectedState);
    });

    test('should return state tos value for checked tos', () => {
      const expectedState = { tos: true };
      expect(values(initialState.values, tosValid(true))).toEqual(expectedState);
    });
  });

  // age
  describe('age', () => {
    test('should return the default state.age', () => {
      expect(age(undefined, {})).toEqual(initialState.age);
    });

    test('should return state age eligible === true', () => {
      expect(age(initialState.age, ageValid()).eligible).toBe(true);
    });

    test('should return state age eligible === false', () => {
      expect(age(initialState.age, ageInvalid()).eligible).toBe(false);
    });
  });
});
