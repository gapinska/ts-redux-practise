import {useSelector, TypedUseSelectorHook} from 'react-redux'
import {RootState} from '../state'

//to aviod using useSelector all the time
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector