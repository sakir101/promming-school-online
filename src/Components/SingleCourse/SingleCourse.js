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
            <h1 className='text-primary text-decoration-underline'>{name}</h1>
            <p><button onClick={onButtonClick}>Download</button></p>
            <img src={photoUrl} alt="" className='my-4 img' />
            <p>{desc}</p>
        </div>
    );
};

export default SingleCourse;