import React from 'react'
import data from "../assets/CouncellingData.json"
import { useParams} from 'react-router-dom';



export default function CouncelBook() {
    let params = useParams();
    const [dp, setDp] = React.useState();
    React.useEffect(() => {
        let result = data.filter(i => i.id == params.id);
        console.log(params);
        setDp(result[0]);
    }, [params])
    return (
    <div id="CouncelBook" className='p-5 text-center'>
        <div className="bg-light rounded p-3 w-50 container">
            <h5 className='text-center'>Yoga Councelling Bill</h5>
            <p>Name: {dp?.title}</p>
            <p>Price: {dp?.price}</p> <br/>
            <form>
                <label>Name:</label><input type="text" className='form-control'/>
                <label>Email:</label><input type="email" className='form-control'/>
                <label>Phone:</label><input type="phone" className='form-control'/>
                <label>Adress:</label><input type="text" className='form-control'/>
                <button className='btn btn-primary p-3 mt-2'>Proceed to Payment({dp?.price})</button>
            </form>
        </div>
    </div>
  )
}
