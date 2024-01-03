import React, {useState} from 'react';
import {Container, CustomButton, FormField} from '../../components';
import {View, Text, StyleSheet} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {Formik} from 'formik';
import {GitHubViewerSchema} from './ValidationSchema';
import {Services} from '../../apis';
import request from '../../utils/request';

const InputScreen = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const initialValues = {
    repository: null,
  };

  const handleSubmit = async (values: any) => {
    setLoading(true);
    await request(Services.getRepo(values.repository))
      .then((resp: any) => {
        setLoading(false);
      })
      .catch(err => {
        console.log('err', err);
        setLoading(false);
      });
  };

  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <Text style={styles.text_header}>Welcome!</Text>
      </View>
      <Animatable.View
        animation="fadeInUpBig"
        style={[
          styles.footer,
          {
            backgroundColor: '#fff',
          },
        ]}>
        <Container>
          <Formik
            initialValues={initialValues}
            validationSchema={GitHubViewerSchema}
            validateOnChange={false}
            validateOnBlur={false}
            onSubmit={(values: any) => {
              handleSubmit(values);
            }}>
            {(props: any) => {
              return (
                <>
                  <FormField
                    {...props}
                    label="Github UserName"
                    fieldKey="repository"
                    placeholder="Please enter Github username"
                  />
                  <CustomButton
                    title="Next"
                    height={48}
                    style={{marginTop: 10}}
                    onPress={props.handleSubmit}
                    loading={loading}
                    disabled={loading}
                  />
                </>
              );
            }}
          </Formik>
        </Container>
      </Animatable.View>
    </View>
  );
};

export default InputScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#009387',
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },
});
