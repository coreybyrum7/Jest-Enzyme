import App from './App';
import { shallow } from 'enzyme';
import { findByTestAttr, testStore } from './../utils'
import React from 'react';

const setUp = (initialState = {}) => {
    const store = testStore(initialState);
    const wrapper = shallow(<App store={store} />).childAt(0).dive();
    return wrapper;
};

describe('App component', () => {

    let wrapper;
    beforeEach(() => {
        const initialState = {
            posts: [{
                title: 'Example title 1',
                body: 'Some body text'
            }, {
                title: 'Example title 2',
                body: 'Some body text'
            }, {
                title: 'Example title 3',
                body: 'Some body text'
            }]
        }
        wrapper = setUp(initialState); // see utils
    });

    it('Should render without errors', () => {
        const component = findByTestAttr(wrapper, 'appComponent');
        expect(component.length).toBe(1);
    });

});