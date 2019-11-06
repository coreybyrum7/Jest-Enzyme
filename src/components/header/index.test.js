import React from 'react';
import { shallow } from 'enzyme';

import Header from './index';
import { findByTestAttr } from '../../../utils/Index';

const setUp = (props={}) => {
    const component = shallow(<Header {...props} />);
    return component;
};

describe('Header Component', () => {

    let component;

    // run and grab shallow rendered component before every test
    beforeEach(() => {
        component = setUp();
        // console.log(component.debug()); will print HTML object
    });

    it('Should render without errors', () => {
        // const wrapper = component.find('.headerComponent'); using classNames gives potential for errors
        // const wrapper = component.find(`[data-test='headerComponent']`); optimize with findByTest
        const wrapper = findByTestAttr(component, 'headerComponent');
        expect(wrapper.length).toBe(1);
    });

    it('Should render a logo', () => {
        // const logo = component.find('.logoIMG'); using classNames gives potential for errors
        // const logo = component.find(`[data-test='logoIMG']`); optimize with findByTest
        const logo = findByTestAttr(component, 'logoIMG');
        expect(logo.length).toBe(1);
    });
});