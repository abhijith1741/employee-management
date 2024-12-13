const { createSlice } = require("@reduxjs/toolkit");

const testSlice = createSlice({
    name: "test",
    initialState: {
        values: [1,2,3,4]
    },
    reducers: {
        addItem: (state) => {
            state.values.push(5)
        }
    }

})

export const {addItem} = testSlice.actions
export default testSlice.reducer