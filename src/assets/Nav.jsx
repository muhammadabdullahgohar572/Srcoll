import { useSelector, useDispatch } from 'react-redux'

export const Nav=()=>{
    const count = useSelector((state) => state.counter.value)
    return(
        <>
        <span>This is a counter {count}</span>
        </>
    )
}