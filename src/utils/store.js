import {createState} from '@hookstate/core'

const store = createState({
    allData: {},
    horseData: {},
    sportData: {},
    dataReady: false,
    bonusStatus: true,
    sport: 'all',
})

export default store