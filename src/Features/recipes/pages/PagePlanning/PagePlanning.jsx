import './PagePlanning.css';
import FullCalendar from "@fullcalendar/react";
import themePlugin from "@fullcalendar/react/themes/monarch"; // YOUR THEME
import dayGridPlugin from "@fullcalendar/react/daygrid";
import interactionPlugin from "@fullcalendar/react/interaction";
import '@fullcalendar/react/skeleton.css'; // ALWAYS NEED SKELETON
import '@fullcalendar/react/themes/monarch/theme.css'; // YOUR THEME
import '@fullcalendar/react/themes/monarch/palettes/purple.css'; // YOUR THEME'S PALETTE
import { useMealPlanStore } from '../../../../stores/useMealPlanStore';
import { selectChangeRecipeDate, selectRecipes, selectRemoveRecipe } from '../../../../stores/plannedRecipesSlice';
import { selectChangeIngredientDatesByMealId, selectRemoveIngredientsByMealId } from '../../../../stores/ingredientsSlice';

function PagePlanning() {
    const recipes = useMealPlanStore(selectRecipes);
    const changeDate = useMealPlanStore(selectChangeRecipeDate);
    const changeIngredientDatesByMealId = useMealPlanStore(selectChangeIngredientDatesByMealId);
    const removeRecipe = useMealPlanStore(selectRemoveRecipe);
    const removeIngredientsByMealId = useMealPlanStore(selectRemoveIngredientsByMealId);

    const events = recipes.map((recipe) => {
        return {
            id: recipe.id,
            title: recipe.name,
            start: recipe.date
        }
    })

    function handleEventDrop(info) {
        changeDate(info.event.id, info.event.startStr);
        changeIngredientDatesByMealId(info.event.id, info.event.startStr);
        
    }

    function handleClick(info) {
        removeIngredientsByMealId(info.event.id);
        removeRecipe(info.event.id);
        info.event.remove();
    }

    return (
        <FullCalendar
            plugins={[themePlugin, dayGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            editable={true}
            events={events}
            eventDrop={handleEventDrop}
            eventClick={handleClick}
        />
    );
}

export default PagePlanning;
