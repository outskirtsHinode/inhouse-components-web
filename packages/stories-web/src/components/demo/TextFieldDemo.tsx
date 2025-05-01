import React, { FC } from 'react';
import TextField, { Props as TextFieldProps } from '../TextField';
import ValidationMessage from '../ValidationMessage';

export type Props = Pick<
  TextFieldProps,
  'appearance' | 'color' | 'size' | 'width'
>;

const TextFieldDemo: FC<Props> = (props) => (
  <>
    <div>
      <TextField {...props} />
      <TextField {...props} state="hover" />
      <TextField {...props} state="focused" />
      <TextField {...props} state="disabled" disabled />
    </div>
    <div>
      <TextField {...props} tag="textarea" />
      <TextField {...props} tag="textarea" state="hover" />
      <TextField {...props} tag="textarea" state="focused" />
      <TextField {...props} tag="textarea" state="disabled" disabled />
    </div>
    <div>
      <TextField
        {...props}
        validationMessage={
          <ValidationMessage color={props.color}>
            必須項目です
          </ValidationMessage>
        }
      />
    </div>
  </>
);

export default TextFieldDemo;
