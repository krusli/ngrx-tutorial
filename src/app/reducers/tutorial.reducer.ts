import { Action } from '@ngrx/store';
import { Tutorial } from '../Tutorial';
import * as TutorialActions from '../actions/tutorial.actions';

const initState: Tutorial[] = [
    {
        name: 'Initial Tutorial',
        url: 'http://google.com'
    }
];

export function reducer(state: Tutorial[] = initState, action: TutorialActions.Actions): Tutorial[] {
    switch(action.type) {
        case TutorialActions.ADD_TUTORIAL:
            return [...state, action.payload];  // concat
        default:
            return state;
    }
}