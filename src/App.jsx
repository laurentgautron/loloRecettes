import { Routes, Route } from "react-router";
import PagesRecipes from "./Features/recipes/pages/PageRecipes/PageRecipes";
import PageShopping from "./Features/recipes/pages/PageShopping/PageShopping";
import PagePlanning from "./Features/recipes/pages/PagePlanning/PagePlanning";
import DetailRecipe from "./Features/recipes/Component/DetailRecipe/DetailRecipe";
import AppProvider from "./Context/AppContext";
import Header from "./Component/Header/Header";


function App() {
    return (<>
        <AppProvider>
            <Header />
            <Routes>
                <Route path='/' element={<PagesRecipes />} />
                <Route path='/shopping' element={<PageShopping />} />
                <Route path='/planning' element={<PagePlanning />} />
                <Route path='/detail/:idMeal' element={<DetailRecipe />} />
            </Routes>
        </AppProvider>
    </>
    )
}

export default App