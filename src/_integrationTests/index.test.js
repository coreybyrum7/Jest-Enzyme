import moxios from 'moxios';
import { testStore } from './../../utils'
import { fetchPosts } from './../actions/index';

describe('fetchPosts action', () => {

    beforeEach(() => {
        moxios.install();
    });

    afterEach(() => {
        moxios.uninstall();
    });

    it('Store is updated correctly', () => {

        const expectedState = [
            {
                title: "Example title 1",
                body: "Example body text"
            }, 
            {
                title: "Example title 2",
                body: "Example body text"
            }, 
            {
                title: "Example title 3",
                body: "Example body text"
            }, 
        ];

        const store = testStore();

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: expectedState
            });
        });

        return store.dispatch(fetchPosts())
        .then(() => {
            const newState = store.getState();
            expect(newState.posts).toBe(expectedState);
        });
    });

});