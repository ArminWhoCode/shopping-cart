import { createSelector } from "reselect";

const selectUi = state => state.ui;

export const selectSidebar = createSelector(
    [selectUi],
    ui => ui.isSidebarOpen
)