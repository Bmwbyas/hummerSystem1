import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import ClientsService from "../../services/ClientsService";


export const initialState = {
    clientList: [],
    client: null
}

export const getClients = createAsyncThunk('clients/getClients', async () => {
        const response = await ClientsService.getClients()
    console.log('getClients',response)
        return response.data
})
export const clientsSlice = createSlice({
    name: 'clients',
    initialState,
    reducers: {
        setClient: (state, action) => {
           state.client=state.clientList.find(c=>c.id===action.payload)
        },
        fetchClients:(state, action) => {
            state.clientList=action.payload
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getClients.fulfilled, (state, action) => {
                console.log(state)
                state.clientList = action.payload
            })
    },
})
export const {setClient,fetchClients}=clientsSlice.actions
export default clientsSlice.reducer