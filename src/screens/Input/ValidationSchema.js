import * as yup from 'yup';

export const GitHubViewerSchema = yup.object().shape({
  repository: yup.string().required('Username is required'),
});
