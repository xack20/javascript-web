import { createSlice } from '@reduxjs/toolkit';

export const commonSlice = createSlice({
  name: 'common',
  initialState: {
    collapsedDV: false,
    collapsedMV: false,

    windowWidth: window.innerWidth,

    activeTab: '',
    panes: [
      // {
      //   title: 'Admin Dashboard',
      //   key: 'Admin Dashboard',
      //   path: ['Main', 'Dashboard', 'Admin Dashboard'],
      // },
    ],
  },
  reducers: {
    changeWidth: (state, action) => {
      state.windowWidth = action.payload;
    },

    changeDV: (state) => {
      state.collapsedDV = !state.collapsedDV;
    },
    changeMV: (state) => {
      state.collapsedMV = !state.collapsedMV;
    },
    changeActiveTab: (state, action) => {
      state.activeTab = action.payload;
    },
    addPane: (state, action) => {
      var ef = false;
      state.panes.forEach((element) => {
        ef |= element.title === action.payload.title;
      });

      if (ef) {
        state.activeTab = action.payload.title;
        return;
      }

      state.panes.push(action.payload);
      state.pane_size = state.panes.length;
    },
    removePane: (state, action) => {
      let lastIndex;
      state.panes.forEach((pane, i) => {
        if (pane.title === action.payload) {
          lastIndex = i - 1;
        }
      });
      const panes = state.panes.filter((pane) => pane.title !== action.payload);
      if (panes.length && state.activeTab === action.payload) {
        if (lastIndex >= 0) {
          state.activeTab = panes[lastIndex].title;
        } else {
          state.activeTab = panes[0].title;
        }
      }
      state.panes = panes;
      if (!panes.length) state.activeTab = 'empty';
      state.pane_size = panes.length;
    },
  },
});
export const {
  changeDV,
  changeMV,
  changeActiveTab,
  addPane,
  removePane,
  changeWidth,
} = commonSlice.actions;

export default commonSlice.reducer;
