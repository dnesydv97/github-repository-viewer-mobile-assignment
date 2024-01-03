import React, {forwardRef} from 'react';
import styled, {withTheme} from 'styled-components';
import {TextInput, View} from 'react-native';
import {FormikErrors, FormikValues} from 'formik';
import {Typography} from '..';

interface FormFieldProps {
  fieldKey: string;
  errors: FormikErrors<FormikValues>;
  placeholder?: string;
  values: FormikValues;
  label?: string;
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined,
  ) => Promise<FormikErrors<FormikValues>> | Promise<void>;

  onPress?: (value: any) => void;
  handleBlur?: {
    (e: React.FocusEvent<any>): void;
  };
  onChangeText?: (text: string) => void;
  inputStyle?: any;
}

const StyleTextInput = styled(TextInput)<any>`
  border-radius: 5px;
  border: 1px solid #ccc;
  width: 100%;
  padding-horizontal: 15px;
  font-size: 14px;
  height: 50px;
  color: #000;
`;
const FormField = (props: FormFieldProps, ref: any) => {
  const value: any = props.values[props.fieldKey] || null;
  const handleChange = (text: any) => {
    props.setFieldValue(props?.fieldKey, text);
    props.onChangeText && props.onChangeText(text);
  };
  return (
    <View style={{marginBottom: 10}}>
      {props?.label && (
        <Typography
          title={props.label}
          size="md"
          color="primary"
          fontWeight={600}
          style={{marginBottom: 5}}
        />
      )}
      <StyleTextInput
        value={value}
        onChangeText={handleChange}
        ref={ref}
        {...props}
        autoCa
      />
      {props.errors[props.fieldKey] && (
        <Typography
          size="sm"
          title={props.errors[props.fieldKey] || ''}
          color="red"
          style={{marginBottom: 4, marginTop: 4}}
        />
      )}
    </View>
  );
};
const forwardedFormField = forwardRef(FormField);
export default withTheme(forwardedFormField);
