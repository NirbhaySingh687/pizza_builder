const initialState = {
    toppingOptions: {
        cheese: {
            icons: ['gluten free'],
            amount: 50
        },
        Corn: {
            icons: ['gluten free'],
            amount: 20
        },
        Capsicum: {
            icons: ['gluten free'],
            amount: 30
        },
        HandTossed: {
            icons: ['gluten free'],
            amount: 80
        },
        Normal: {
            icons: ['gluten free'],
            amount: 70
        },
        cheeseBurst: {
            icons: ['vegetarian', 'gluten free'],
            amount: 100
        },
        classic: {
            icons: ['vegetarian', 'gluten free'],
            amount: 30
        }
    }
}

const toppingReducers=(state=initialState,action)=>{
    switch (action.type){
        default: return state
    }
}

export default toppingReducers
