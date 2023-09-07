export const IncAction = value =>  async dispath =>{
      dispath({
            type:"INCREMENT",
            payload: value
      })
} 

export const DecAction = value => async (dispath) =>{
      dispath({
            type:"DECREMENT",
            payload: value
      })
} 