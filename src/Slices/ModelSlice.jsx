import { createSlice } from "@reduxjs/toolkit";

const initialState={
    selectedMeshes: [],
}

const modelSlice=createSlice(

    {   name: "model",
        initialState,

        reducers: {
            addOrUpdateMesh: (state, action) => {
              const { name, color } = action.payload;
             // console.log(action.payload)
              if (!name) return; 
              const existing = state.selectedMeshes.find((mesh) => mesh.name === name);
              
              if (existing) {
                console.log("Existing")
                existing.color = color; // update color if already exists
              } else {
                state.selectedMeshes.push({ name, color }); // add new
              }
            },


        }

    }

)

export const {addOrUpdateMesh}=modelSlice.actions;
export default modelSlice.reducer;