import { Routes, Route } from "react-router";
import PageRecipes from "./Features/recipes/pages/PageRecipes/PageRecipes";
import PageShopping from "./Features/recipes/pages/PageShopping/PageShopping";
import PagePlanning from "./Features/recipes/pages/PagePlanning/PagePlanning";
import PageDetailRecipe from "./Features/recipes/pages/PageDetailRecipe/PageDetailRecipe";
import Header from "./components/Header/Header";


function App() {
    return (<>
            <Header />
            <Routes>
                <Route path='/' element={<PageRecipes />} />
                <Route path='/shopping' element={<PageShopping />} />
                <Route path='/planning' element={<PagePlanning />} />
                <Route path='/detail/:idMeal' element={<PageDetailRecipe />} />
            </Routes>
    </>
    )
}

export default App