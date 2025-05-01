import React, { FC, InputHTMLAttributes, TextareaHTMLAttributes, ReactNode } from 'react';
import { Appearance, SemanticColor, Size, State, Width } from './types';
import ValidationMessage from './ValidationMessage';

type HTMLProps = InputHTMLAttributes<HTMLInputElement> &
  TextareaHTMLAttributes<HTMLInputElement>;

export interface Props extends Omit<HTMLProps, 'size'> {
  appearance?: Extract<Appearance, 'outlined' | 'filled'>;
  color?: Extract<SemanticColor, 'neutral' | 'negative'>;
  htmlSize?: number;
  size?: Extract<Size, 's' | 'm' | 'l'>;
  state?: Extract<State, 'enabled' | 'hover' | 'focused' | 'disabled'>;
  tag?: 'input' | 'textarea';
  width?: Width;
  validationMessage?: ReactNode;
}

const TextField: FC<Props> = (props: Props) => {
  const {
    appearance,
    color,
    htmlSize,
    size,
    state,
    tag = 'input',
    value,
    width,
    validationMessage,
    ...rest
  } = props;

  const wrapperClasses = ['in-textfield'];
  const innerClasses = ['_input'];

  if (typeof appearance !== 'undefined') {
    wrapperClasses.push(`-appearance-${appearance}`);
  }

  if (typeof color !== 'undefined') {
    wrapperClasses.push(`-color-${color}`);
  }

  if (typeof size !== 'undefined') {
    wrapperClasses.push(`-size-${size}`);
  }

  if (typeof state !== 'undefined') {
    innerClasses.push(`--${state}`);
  }

  if (typeof width !== 'undefined') {
    wrapperClasses.push(`-width-${width}`);
  }

  const inputElement = tag === 'input' ? (
    <input
      className={innerClasses.join(' ')}
      size={htmlSize}
      type="text"
      value={value}
      {...(rest as InputHTMLAttributes<HTMLInputElement>)}
    />
  ) : (
    <textarea
      className={innerClasses.join(' ')}
      {...(rest as TextareaHTMLAttributes<HTMLTextAreaElement>)}
    >
      {value}
    </textarea>
  );

  return (
    <div className={wrapperClasses.join(' ')}>
      {inputElement}
      {validationMessage && (
        <ValidationMessage color="negative">
          {validationMessage}
        </ValidationMessage>
      )}
    </div>
  );
};

export default TextField;
