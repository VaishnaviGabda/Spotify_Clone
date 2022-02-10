
export const initialState = {
    user:null,
    playlists:[],
    playing:false,
    item:null,

    //token is for testing
    //token: 'BQCG3dkwkdBkNdgWYGWVw-kIZGRy-qBSFoRikMBPTwh3_VHUs5-AQYGlCKIDK1VsDHvxnxa9xkWWKBi-ySL09Az7dylI6BwbMS9SgVd_PtzLnhhfLBtBFmT1VsIwjf4NEiBKn-SUq6da_OltyYosqHOllTJI54bpMaYyDb8w3WTi4JxPKT5U',

};


const reducer = (state , action) => {

    console.log(action);

    // action has type and playload

    switch(action.type) {
     case 'SET_USER':
        return{
            ...state,
            user: action.user
        };
     case 'SET_TOKEN':
         return{
             ...state,
             token: action.token,
         };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
  
     case "SET_DISCOVER_WEEKLY":
       return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

     default:
         return state;
    }

}

export default reducer;