const { createSlice } = require("@reduxjs/toolkit");

const slice = createSlice({
    name: 'photos',
    initialState: {
        list: [],
    },
    reducers: {
        loadPhotos: (state, action) => {
            state.list = action.payload.map(item => ({
                id: item.id,
                title: item.alt_description,
                author: item.user.name,
                urlFull: item.urls.full,
                urlSmall: item.urls.small,
            }))
        }
    },
})

export function fetchPhotos(dispatch, getState) {
    fetch('https://api.unsplash.com/photos/?client_id=ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9')
        .then(response => response.json())
        .then(data => dispatch(loadPhotos(data)))
}

export const { loadPhotos } = slice.actions
export default slice.reducer