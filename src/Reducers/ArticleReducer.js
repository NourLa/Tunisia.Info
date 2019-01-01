import { combineReducers } from "redux";
// Article Reducers
const ArticleReducer = (state = [], action) => {
  switch (action.type) {
    case "UPDATE_ARTICLE_LIST":
      return (state = 
        Object.values(   action.Articles.reduce((r, e) => {
           const group = e.title[0]
            if (!r[group])
            { r[group] = {group, children: [e]}}
            else r[group].children.push(e);
            return r;
          }, {})));
    case "UPDATE_ARTICLE_LIST1":
          return (state = action.Articles);
    case "ADD_PRODUCT":
      return state.concat(action.newProduct);
    case "EDIT_ARTICLE":
      return state.map(
        e =>
          e._id === action.editedArticle._id ? (e = action.editedArticle) : e
      );
      
    case "REMOVE_PRODUCT":
      return state.filter(e => e._id !== action.id);
       
    default:
      return state;
  }
};
const govReducer=(state=[],action)=>{
  switch (action.type){
    case "CALL_GOV_LIST":
      return (state=action.glinks);
    default:
      return state;
  }
} 
const catReducer=(state=[],action)=>{
  switch (action.type){
    case "CALL_CAT_LIST":
      return (state=action.clinks);
    default:
      return state;
  }
}  
const messagesReducer=(state=[],action)=>{
  switch (action.type){
    case "CALL_MESSAGES_LIST":
      return (state=action.mlinks);
    case "REMOVE_MESSAGE":
      return (
        state.filter(e => e._id!== action._id)
        )
    default:
      return state;
  }
}
const LoginReducer=(state=[],action)=>{
  switch (action.type){
    case "CALL_ADMINS_LIST":
      return (state=action.adminsList);
    case "SET_LOGGED_STATE":
    return (state=action.logged);
    default:
      return state;
  }
}
let Reducers = combineReducers({
    ArticleReducer,
    LoginReducer,
    catReducer,
    govReducer,
    messagesReducer
});
export default Reducers;
