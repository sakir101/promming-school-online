import React from 'react';
import { useLoaderData } from 'react-router-dom'
import './singleCourse.css'
import jsPDF from 'jspdf';

const SingleCourse = () => {
    const course = useLoaderData()
    const { name, desc, photoUrl } = course;
    const onButtonClick = () => {
        let doc = jsPDF("p", "pt", "a4");
        doc.html(document.querySelector('#para'),{
        callback: function(pdf){
            
            pdf.save("mypdf.pdf");
        } }
        )
    }
    return (
        <div id='para'>
            <div className='d-flex mx-5'>
            <h1 className='text-primary text-decoration-underline'>{name}</h1>
            <button onClick={onButtonClick} className="mx-5">Download</button>
            </div>
            
            
            <img src={photoUrl} alt="" className='my-4 img-fluid' />
            <p>{desc}</p>
        </div>
    );
};

export default SingleCourse;