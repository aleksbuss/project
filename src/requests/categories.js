import { loadAllCategoriesAction } from "../store/reducers/categoriesReducer";

export const getAllCategories = (dispatch) => {
    fetch('http://localhost:3333/categories/all')
        .then(resp => resp.json())
        .then(json => dispatch(loadAllCategoriesAction(json)));
}

