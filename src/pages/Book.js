import React, { useState, useEffect } from 'react';
import BookHeader from '../components/BookHeader';
import BookDescription from '../components/BookDescription';


const Book = () => {
        return (
        <div>
            <div>
                <BookHeader
                    title='Clean code'
                    author='Robert Martin'
                    rating='5'
                />
                <BookDescription description='Even bad code can function. But if code isn’t clean, it can bring a development organization to its knees. Every year, countless hours and significant resources are lost because of poorly written code. But it doesn’t have to be that way.' />
            </div>
        </div>
    );
};

export default Book;