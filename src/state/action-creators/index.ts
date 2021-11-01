import axios from 'axios'
import {ActionType} from "../action-types";
import {Dispatch} from 'redux'
//to set types to dispatch
import {Action} from '../actions'

export const searchRepositories = (term: string) => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.SEARCH_REPOSITORIES
        })

        try {
            const {data} = await axios.get('https://registry.npmjs.org/-/v1/search', {
                params: {
                    text: term
                }
            })

            const names = data.objects.map((result:any) => result.package.name)
            dispatch({
                type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
                payload: names
            })

        } catch(error) {
            let errorMessage = "Failed to do something exceptional";
            if (error instanceof Error) {
                errorMessage = error.message;
            }
            dispatch({
                type: ActionType.SEARCH_REPOSITORIES_ERROR,
                payload: errorMessage
            })
        }
    }
}