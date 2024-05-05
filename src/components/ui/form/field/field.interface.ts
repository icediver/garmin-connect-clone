import { InputHTMLAttributes } from 'react';

export interface IFieldProps {
	placeholder?: string;
	error?: string;
	label?: string;
	className?: string;
	icon?: string;
	isRequired?: boolean;
}

type TypeInputPropsField = InputHTMLAttributes<HTMLInputElement> & IFieldProps;

export interface IField extends TypeInputPropsField {}
