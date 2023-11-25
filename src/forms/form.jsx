
import {useSelector, useDispatch} from 'react-redux';


const Form =() =>{
    const responApi = useSelector(state => state.apiSave.responApi);
    const responApiDetail = useSelector(state => state.apiSave.apiItemId);
    return <>
        {
         responApi?.length > 0 ? 
         <>
            { 
                responApi.map((el, index) => 
                <div key={index}>{el.name}</div>
                )
            
            }
         </> : 'no data'   
        }

        <p>-----------</p>
        {
            <h4>name: {responApiDetail?.name}</h4>
        }
    </>
}
export default Form;