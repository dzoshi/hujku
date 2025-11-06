import { CHART } from '../actions/type';

const initialState = {
    statistics: {
        name: 'Statistics',
        data: [33, 33, 34],
    },
};

const DoughnutChart = (state = initialState, action) => {
    const { payload, type } = action;
    switch (type) {
        case CHART:
            return {
                ...state,
                payload,
            };
        default:
            return state;
    }
};

export default DoughnutChart;
