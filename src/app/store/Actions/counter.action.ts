import { createAction } from '@ngrx/store';
import { CourseItem } from '../models/courseItem.model';

export const increment = createAction('[Counter Component] Increment');
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset');
