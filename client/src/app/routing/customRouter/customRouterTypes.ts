import { History } from 'history';

export interface ChildComponentProps {
    history: History;
    children: JSX.Element;
}
