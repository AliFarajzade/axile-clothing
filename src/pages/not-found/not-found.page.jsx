import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <div className="not-found">
            <h1>Page Does Not Exist</h1>
            <Link className="return-home" to="/">
                Return To Home
            </Link>
        </div>
    );
}
