import { createSelector } from 'reselect';

const selectDirectory = state => state.directory;

export const selecetDirectoryData = createSelector(
    [selectDirectory],
    directory => directory.sections
);
