import axios from "axios"
import { getdata } from "../slice/dataSlice"


export const getDataYear = () => {
    return async (dispatch) => {
        await axios.get('http://192.168.29.104:3001/data').then(res => {
            // console.log('res',res.data)
            dispatch(getdata(res.data))
        })
    }
}
export const addDataYear = (obj) => {
    return async (dispatch) => {
        await axios.post('http://192.168.29.104:3001/data', obj).then(res => {
            // console.log('res',res.data)
            dispatch(getDataYear())
        })
    }
}
export const updateDataYear = (obj) => {
    return async (dispatch) => {
        await axios.put(`http://192.168.29.104:3001/data/${obj.id}`, obj).then(res => {
            // console.log('res',res.data)
            dispatch(getDataYear())
        })
    }
}
export const deleteDataYear = (id) => {
    return async (dispatch) => {
        await axios.put(`http://192.168.29.104:3001/data/${id}`).then(res => {
            // console.log('res',res.data)
            dispatch(getDataYear())
        })
    }
}