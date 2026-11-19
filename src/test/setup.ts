import '@testing-library/jest-dom'
import { beforeAll, afterEach, afterAll, beforeEach } from 'vitest'
import { server } from '../../mocks/node'
import { useMealPlanStore } from '../stores/useMealPlanStore';
import Ingredient from '../features/recipes/components/Ingredient/Ingredient';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
beforeEach(() => useMealPlanStore.setState({ recipes: [], Ingredients: []}));