export enum EventActionTypes {
    FETCH_EVENT='FETCH_EVENT',
    FETCH_EVENT_BY_ID='FETCH_EVENT_BY_ID',
    UPDATE_EVENT='UPDATE_EVENT'
}

export interface IEvent {
    id: string;
    participants: string[];
    title: string;
    activationLink: string;
    description: string;
    startDate: string;
}

export interface EventState {
    events: IEvent[],
    event: IEvent
}

interface FetchEventAction {
    type: EventActionTypes.FETCH_EVENT,
    payload: IEvent
}

interface FetchEventByIdAction {
    type: EventActionTypes.FETCH_EVENT_BY_ID,
    payload: IEvent
}

interface UpdatEventAction {
    type: EventActionTypes.UPDATE_EVENT,
    payload: IEvent
}

export type EventAction =
    FetchEventAction
    | FetchEventByIdAction
    | UpdatEventAction