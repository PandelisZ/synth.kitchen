import { ModuleAction } from './actions';

import { BaseState } from 'flux-fluent'
import { ModuleProps } from 'src/ts/components/module';

export interface ModuleState extends BaseState<ModuleAction> {
    moduleMap: Map<string, ModuleProps>;
    modules: string[][];
}

export const initialState: ModuleState = {
    moduleMap: new Map<string, ModuleProps>(),
    modules: [],
    dispatchStack: []
};