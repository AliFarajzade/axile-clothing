import React from 'react';
import MenuItem from '../menu-item/menu-item.component';

import { selecetDirectoryData } from '../../redux/directory/directory.selectors';
import { connect } from 'react-redux';

function DirectoryMenu({ selecetDirectoryData }) {
    console.log(selecetDirectoryData);
    return (
        <div className="directory-menu">
            {selecetDirectoryData.map(
                ({ id, ...otherDataObjectProperties }) => (
                    <MenuItem key={id} {...otherDataObjectProperties} />
                )
            )}
        </div>
    );
}

const mapStateToProps = state => ({
    selecetDirectoryData: selecetDirectoryData(state),
});

export default connect(mapStateToProps)(DirectoryMenu);
