import { useEffect, useState } from "react"
import {GetQuote} from "../services/GetQuote"

const Quote = () => {
    const [data, setData] = useState([{}]);
    useEffect(() => {
        GetQuote()
        .then(response => {
            console.log(response);
            setData(response.data.quotes);
        })
    },[])
    const quote = data.map((value) =>{
        return (
            <>
                <span style={{ display: 'block' }} key={value._id} >
                    Quote: {value.quote} --
                    <button>Delete</button>
                    <button>Update</button>
                </span>
            </>
        )
    })
    return(
        <div>
            <div>
                <h1>Phrase of Profesor</h1>
                <h4>Quote: {quote}</h4>
            </div>
        </div>
    );
}

export default Quote;