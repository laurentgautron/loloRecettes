import './PagePlanning.css';
import FullCalendar from "@fullcalendar/react";
import themePlugin from "@fullcalendar/react/themes/monarch"; // YOUR THEME
import dayGridPlugin from "@fullcalendar/react/daygrid";
import interactionPlugin from "@fullcalendar/react/interaction";
import '@fullcalendar/react/skeleton.css'; // ALWAYS NEED SKELETON
import '@fullcalendar/react/themes/monarch/theme.css'; // YOUR THEME
import '@fullcalendar/react/themes/monarch/palettes/purple.css'; // YOUR THEME'S PALETTE
import { useReadingStore } from '../../../../Stores/useReadingStore';
import { selectChangeRecipeDate, selectRecipes, selectRemoveRecipe } from '../../../../Stores/readingListSlice';
import { selectChageDateWithMealID, selectRemoveIngredientWithMealID, selectUpdateIngredient } from '../../../../Stores/readingIngredientsSlice';

function PagePlanning() {
    const recipes = useReadingStore(selectRecipes);
    const changeDate = useReadingStore(selectChangeRecipeDate);
    const chageDateIngredientWithMealId = useReadingStore(selectChageDateWithMealID);
    const removeRecipe = useReadingStore(selectRemoveRecipe);
    const removeIngredientWithMealId = useReadingStore(selectRemoveIngredientWithMealID);

    const events = recipes.map((recipe) => {
        return {
            id: recipe.id,
            title: recipe.name,
            start: recipe.date
        }
    })

    function handleEventDrop(infos) {
        changeDate(infos.event.id, infos.event.startStr);
        chageDateIngredientWithMealId(infos.event.id, infos.event.startStr);
        
    }

    function handleClick(infos) {
        removeIngredientWithMealId(infos.event.id);
        removeRecipe(infos.event.id);
        infos.event.remove();
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