import React from 'react';

export interface BaseProps<T> extends React.DOMAttributes<T> {
  children?: React.ReactNode;
  isTileChild?: boolean;
  [key: string]: any;
}

export class BaseComponent<P = BaseProps<any>, S = {}, SS = any> extends React.Component<P, S, SS> {

}