import React, { createContext, useContext, useReducer } from 'react';

interface Task {
	id: string
	text: string
}

interface List {
	id: string
	text: string
	tasks: Task[]
}

type Action = {
	type: "ADD_LIST"
	payload: string
} | {
	type: "ADD_TASK"
	payload: { text: string; taskId: string }
}

export interface AppState {
	lists: List[]
}

const appData: AppState = {
	lists: [
		{
			id: '0',
			text: 'To Do',
			tasks: [{ id: 'c0', text: 'Generate app scaffold' }]
		},
		{
			id: '1',
			text: 'In Progress',
			tasks: [{ id: 'c1', text: 'Learning TypeScript' }]
		},
		{
			id: '2',
			text: 'Done',
			tasks: [{ id: 'c2', text: 'Begin using static typing' }]
		},
	]
} 

interface AppStateContextProps {
	state: AppState
}

const AppStateContext = createContext<AppStateContextProps>({} as AppStateContextProps)

export const AppStateProvider = ({ children }: React.PropsWithChildren<{}>) => {
	const [state, dispatch] = useReducer(AppStateReducer, appData)
	return (<AppStateContext.Provider value={{ state, dispatch }}>
		{ children }
	</AppStateContext.Provider>)
}

export const useAppState = () => {
	return useContext(AppStateContext)
}

const AppStateReducer = (state: AppState, action: Action) => {
	switch (action.type) {
		case 'ADD_LIST': {
			return { ...state }
		}
		case 'ADD_TASK': {
			return { ...state }
		}
		default: {
			return state
		}
	}
}