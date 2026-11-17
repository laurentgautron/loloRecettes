import './PagePlanning.css';
import FullCalendar from "@fullcalendar/react";
import themePlugin from "@fullcalendar/react/themes/monarch"; // YOUR THEME
import dayGridPlugin from "@fullcalendar/react/daygrid";
import interactionPlugin from "@fullcalendar/react/interaction";

// stylesheets
import '@fullcalendar/react/skeleton.css'; // ALWAYS NEED SKELETON
import '@fullcalendar/react/themes/monarch/theme.css'; // YOUR THEME
import '@fullcalendar/react/themes/monarch/palettes/purple.css'; // YOUR THEME'S PALETTE
import { useReadingStore } from '../../../../Stores/useReadingStore';
import { selectChangeRecipeDate, selectRecipes } from '../../../../Stores/readingListSlice';



function PagePlanning() {
    const recipes = useReadingStore(selectRecipes);
    const changeDate = useReadingStore(selectChangeRecipeDate);

    const events = recipes.map((recipe) => {
        return {
            id: recipe.id,
            title: recipe.name,
            start: recipe.date
        }
    })

    function handleEventDrop(infos) {
        const newDate = infos.event.start.toISOString().split('T')[0]
        changeDate(infos.event.id, newDate);
        console.log(infos.event.id);
        console.log();
    }

    return (
        <FullCalendar
            plugins={[themePlugin, dayGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            editable={true}
            events={events}
            eventDrop={handleEventDrop}
        />
    );
}

export default PagePlanning;