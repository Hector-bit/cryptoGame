import {
    FETCH_STATS_FAILED,
    FETCH_STATS_SUCCESS,
    FETCH_STATS_START,
    SEND_STATS_START,
    SEND_STATS_SUCCESS,
    SEND_STATS_FAILED
} from "./userStatsActions"
import { calculateStats } from "./userStatsActions"
import { mealPlan } from "./userStatsActions"

const initialState = {
    userStatsObj: {},
    isFetching: false,
    error: null,
    totalCalories: "",
    proteinGrams : "",
    carbsGrams : "",
    fatsGrams : "",
    Macros: {}
}


export const userStatsReducer = (state = initialState , {type , payload}) => {
    switch(type){
        case FETCH_STATS_START:
            return {
                ...state,
                isFetching: true,
                error: null,
                userStatsObj: {}
            }
            case FETCH_STATS_SUCCESS:
                const cals = calculateStats(payload)
                const Macro = mealPlan(state.proteinGrams,state.carbsGrams,state.fatsGrams,payload)
                return {
                ...state,
                isFetching: false,
                userStatsObj: payload,
                totalCalories: cals,
                proteinGrams: Math.floor(cals * 0.075),
                carbsGrams: Math.floor(cals * 0.1),
                fatsGrams: Math.floor(cals * 0.033),
                Macros: Macro
            }
        case FETCH_STATS_FAILED:
            return {
                ...state,
                isFetching: false,
                error: payload,
                userStatsObj: {}
            }
        case SEND_STATS_START:
            return{
                ...state,
                isFetching: true,
                error: null,
                userStatsObj: {}
            }
        case SEND_STATS_SUCCESS:
                const cal = calculateStats(payload)
                const Macros = mealPlan(state.proteinGrams,state.carbsGrams,state.fatsGrams,payload)
            return{
                ...state,
                isFetching: false,
                error: null,
                userStatsObj: payload,
                totalCalories: cal,
                proteinGrams: Math.floor(cal * 0.075),
                carbsGrams: Math.floor(cal * 0.1),
                fatsGrams: Math.floor(cal * 0.033),
                Macros: Macros
            }
        case SEND_STATS_FAILED:
            return{
                ...state,
                isFetching: false,
                error: payload,
                userStatsObj: {}
            }
        default:
            return state
    }
}