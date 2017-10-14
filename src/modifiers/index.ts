import Helpers from './helpers';
import ResponsiveHelpers from './responsive-helpers';
import TypograpyHelpers from './typography-helpers';


export enum Colors {
    White = 'is-white',
    Black = 'is-black',
    Light = 'is-light',
    Dark = 'is-dark',
    Primary = 'is-primary',
    Link = 'is-link',
    Info = 'is-info',
    Success = 'is-success',
    Warning = 'is-warning',
    Danger = 'is-danger',
}

export enum Sizes {
    Small = 'is-small',
    Medium = 'is-medium',
    Large = 'is-large',
}

export enum Styles {
    Outlined = 'is-outlined',
    Inverted = 'is-inverted',
}

export enum States {
    Normal = '',
    Hover = 'is-hovered',
    Focus = 'is-focused',
    Active = 'is-active',
    Loading = 'is-loading',
}

export enum Alignments {
    Centerd = 'is-centered',
}

export default {Helpers, ResponsiveHelpers, TypograpyHelpers, Colors, Sizes, Styles, States, Alignments};
