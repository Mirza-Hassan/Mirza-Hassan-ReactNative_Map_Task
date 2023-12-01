import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  textInputContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderTopWidth: 0,
    borderBottomWidth: 1,
    borderBottomColor: theme.palette.divider,
    padding: theme.spacing(1),
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[1],
  },
  textInput: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    height: 40,
    color: theme.palette.text.primary,
    fontSize: 16,
    width: '100%',
    '& input': {
      padding: theme.spacing(1),
    },
  },
  predefinedPlacesDescription: {
    color: theme.palette.primary.main,
  },
}));
