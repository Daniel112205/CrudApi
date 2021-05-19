import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form"
import { GetOptions } from "../services/GetQuote";

const CreateQuote = () => {
    const {register, handleSubmit, reset} = useForm();
    const [options, setOptions] = useState([]);
    
    const onSubmit = (values) => {
        const { quote, classOptions } = values
        const baseUrl = 'https://prof-quotes.herokuapp.com/api/quotes';
        axios.post(`${baseUrl}`,{
            quote: {quote},
            class: {classOptions}
        })
        .then(function (response) {
            console.log('sucesws',response);
          })
          .catch(function (error) {
            console.log(error);
          });
        reset()
        return
    }

    useEffect(() => {
        GetOptions()
        .then(response => {
            setOptions(response.data.classOptions);
            console.log(response.data.classOptions)
        })
    },[]);
    
    const selectOptions = options.map((value) =>{
        return (
                <option value={value}>{value}</option>
        )
    })
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="quote">New Quote</label>
            <input type="text" name="quote" id="quote" {...register('quote')}/>
            <label htmlFor="classOptions">Class Options</label>
            <select name="classOptions" id="classOptions" {...register('classOptions')}>
                {selectOptions}
            </select>
            <button>Register</button>
        </form>
    );
}
export default CreateQuote;