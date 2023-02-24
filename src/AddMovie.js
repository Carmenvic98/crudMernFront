import React, { useState } from "react";
import uniquid from 'uniqid';
import axios from "axios";

function AddMovie(){

    //hooks
    const [title,setTitle]=useState('')
    const [year,setYear]=useState('')
    const [time,setTime]=useState('')
    const [lang,setLang]=useState('')
    const [date,setDate]=useState('')
    const [country,setCountry]=useState('')

    function addMovie(){
        var movie ={
            id: uniquid,
            title: title,
            year: year,
            time: time,
            lang: lang,
            date: date,
            country: country,
        }
        console.log(movie)

        axios.post('/api/movie/addmovie', movie)
        .then(res =>{
            alert(res.data)
        })
        .then(err => {console.log(err)})
    }

    return(
        <div className="container">
            <div className="row">
                <h2 className='mt-4'>Crear una nueva película</h2>
            </div>
            <div className="row">
                <div className='col-sm-6 offset-3'>
                    <div className='mb3'>
                        <label htmlFor='mov_title' className='form-label'>Titulo</label> 
                        <input type="text" className='form-control' value={title} onChange={(e) => {setTitle(e.target.value)}}></input>
                     </div>
                     <div className='mb3'>
                        <label htmlFor='mov_year' className='form-label'>Año</label> 
                        <input type="number" className='form-control' value={year} onChange={(e) => {setYear(e.target.value)}}></input>
                    </div>
                    <div className='mb3'>
                        <label htmlFor='mov_time' className='form-label'>Tiempo</label> 
                        <input type="number" className='form-control' value={time} onChange={(e) => {setTime(e.target.value)}}></input>
                    </div>
                    <div className='mb3'>
                        <label htmlFor='mov_lang' className='form-label'>Idioma</label> 
                        <input type="text" className='form-control' value={lang} onChange={(e) => {setLang(e.target.value)}}></input>
                    </div>
                    <div className='mb3'>
                        <label htmlFor='mov_dt_rel' className='form-label'>Fecha</label> 
                        <input type="number" className='form-control' value={date} onChange={(e) => {setDate(e.target.value)}}></input>
                    </div>
                    <div className='mb3'>
                        <label htmlFor='mov_rel_country' className='form-label'>País</label> 
                        <input type="text" className='form-control' value={country} onChange={(e) => {setCountry(e.target.value)}}></input>
                    </div>
                
                    <button onClick={addMovie} className='btn btn-success'>Guardar Película</button>
                </div>
            </div>
        </div>
    )
}

export default AddMovie;