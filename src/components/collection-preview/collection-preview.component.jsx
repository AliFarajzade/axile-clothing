import React from 'react';

import { Link } from 'react-router-dom';

import CollectionItem from '../collection-item/collection-item.component';
export default function CollectionPreview({ title, items, routeName }) {
    return (
        <div className="collection-preview">
            <h1 className="title">{<Link to={routeName}>{title}</Link>}</h1>
            <div className="preview">
                {items
                    .filter((_, index) => index < 4)
                    .map(item => (
                        <CollectionItem key={item.id} item={item} />
                    ))}
            </div>
        </div>
    );
}
