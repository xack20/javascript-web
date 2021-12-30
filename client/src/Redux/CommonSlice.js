import { createSlice } from '@reduxjs/toolkit';
import base64 from 'react-native-base64';

const recentTab = () => {
  // ((window.location.pathname).substr(1)).split('-')[0].charAt(0).toUpperCase()+((window.location.pathname).substr(1)).split('-')[0].slice(1) + " " + ((window.location.pathname).substr(1)).split('-')[1].charAt(0).toUpperCase()+((window.location.pathname).substr(1)).split('-')[1].slice(1)
  try{
    var path = window.location.pathname.split('/')[1]
    if(path === '')path = base64.decode(window.localStorage.getItem('_usrl_')) === "ADMIN" ? "admin-dashboard" : "employee-dashboard"
    var tab='';
    const tabNameParts = path.split('-')
    for(let i = 0; i < tabNameParts.length; i++){
      if(i)tab+=" "
      tab += tabNameParts[i].charAt(0).toUpperCase()+tabNameParts[i].slice(1)
    }
  }catch(e){
    tab = '';
  }
  return tab
}


export const commonSlice = createSlice({

  name: 'common',



  initialState: {
    collapsedDV: false,
    collapsedMV: false,

    windowWidth: window.innerWidth,

    activeTab: recentTab(),
    panes: [
      // {
      //   title: 'Admin Dashboard',
      //   key: 'Admin Dashboard',
      //   path: ['Main', 'Dashboard', 'Admin Dashboard'],
      // },
    ],
    user:{
      
    }
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


    changeUser: (state, action) => {
      state.user = {...action.payload};
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
  changeUser,
} = commonSlice.actions;

export default commonSlice.reducer;
