import React, { FC, InputHTMLAttributes, TextareaHTMLAttributes, ReactNode } from 'react';
import { Appearance, SemanticColor, Size, State, Width } from './types';
import {
  TextField as AriaTextField,
  Input as AriaInput,
  TextArea as AriaTextArea,
  FieldError as AriaFieldError
} from 'react-aria-components';

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
  isRequired?: boolean;
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
    isRequired,
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

  return (
    <div className={wrapperClasses.join(' ')}>
      <AriaTextField
        value={value?.toString()}
        isDisabled={state === 'disabled'}
        isRequired={isRequired}
      >
        {tag === 'input' ? (
          <AriaInput
            className={innerClasses.join(' ')}
            size={htmlSize}
            type="text"
            {...(rest as InputHTMLAttributes<HTMLInputElement>)}
          />
        ) : (
          <AriaTextArea
            className={innerClasses.join(' ')}
            {...(rest as TextareaHTMLAttributes<HTMLTextAreaElement>)}
          />
        )}
        <AriaFieldError className="in-validation-message -color-negative">
          {({ validationDetails }) =>
            validationDetails.valueMissing
              ? '必須項目です'
              : ''
          }
        </AriaFieldError>
      </AriaTextField>
    </div>
  );
};

export default TextField;
