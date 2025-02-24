import randomId from '@shared/lib/randomId';
import { getContext, setContext } from 'svelte';
import type { IFieldContextData, IFieldContextInitialValue } from './types';

const contextName = 'field';

export const setFieldContext = (initialValue: IFieldContextInitialValue) => {
	const data: IFieldContextData = {
		...initialValue,
		id: randomId()
	};
	setContext(contextName, data);
};

export const useFieldContext = () => {
	return getContext<IFieldContextData | null>(contextName);
};
