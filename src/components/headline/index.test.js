import React from 'react';
import { shallow } from 'enzyme';

import Headline from './index';

import { findByTestAttr, checkProps } from './../../../utils/Index';

const setUp = (props={}) => {
    const component = shallow(<Headline {...props} />);
    return component;
}

describe('Headline component', () => {

    describe('Check prop types', () => {

        it('Should not throw a warning', () => {
            const expectedProps = {
                header: 'Test Header',
                desc: 'Test Description'
            }
            const propsError = checkProps(Headline, expectedProps);
            expect(propsError).toBeUndefined();
        });

    });

    describe('Have props', () => {

        let wrapper;
        beforeEach(() => {
            const props = {
                header: 'Test header',
                desc: 'Test description'
            };
            wrapper = setUp(props);
        });

        it('Should render without errors', () => {
            const component = findByTestAttr(wrapper, 'headline-component');
            expect(component.length).toBe(1);
        });

        it('Should render an H1', () => {
            const h1 = findByTestAttr(wrapper, 'header');
            expect(h1.length).toBe(1);
        });

        it('Should render a description', () => {
            const desc = findByTestAttr(wrapper, 'description');
            expect(desc.length).toBe(1);
        })

    });

    describe('Have no props', () => {

        let wrapper;
        beforeEach(() => {
            wrapper = setUp();
        });

        it('Should not render', () => {
            const component = findByTestAttr(wrapper, 'headline-component');
            expect(component.length).toBe(0);
        })

    });

});