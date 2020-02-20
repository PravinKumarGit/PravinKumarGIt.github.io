export const createPayloadAction = type => payload => ({
    type,
    payload
});

export const createEmptyAction = type => () => ({type});