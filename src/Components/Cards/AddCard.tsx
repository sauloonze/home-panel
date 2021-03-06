// @flow
import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((_theme: Theme) => ({
  buttonCardContainer: {
    height: '100%',
    width: '100%',
    flex: 1
  },
  card: {
    position: 'relative',
    height: '100%',
    width: '100%',
    flex: 1
  },
  cardContent: {
    padding: 12,
    '&:last-child': {
      paddingBottom: 12
    }
  },
  grid: {
    height: '100%'
  },
  icon: {
    fontSize: 48
  }
}));

export interface AddCardProps {
  handleAdd: () => void;
}

function AddCard(props: AddCardProps) {
  const classes = useStyles();
  const theme = useTheme();

  const cardSize = theme.breakpoints.down('sm') ? 140 : 120;
  return (
    <Grid item>
      <ButtonBase
        className={classes.buttonCardContainer}
        focusRipple
        onClick={props.handleAdd}>
        <Card className={classes.card} elevation={1}>
          <CardContent
            className={classes.cardContent}
            style={{
              height: cardSize,
              width: cardSize,
              minHeight: cardSize,
              minWidth: cardSize,
              maxHeight: cardSize,
              maxWidth: cardSize
            }}>
            <Grid
              className={classes.grid}
              container
              alignContent="center"
              justify="center">
              <span className={classnames('mdi', 'mdi-plus', classes.icon)} />
            </Grid>
          </CardContent>
        </Card>
      </ButtonBase>
    </Grid>
  );
}

AddCard.propTypes = {
  handleAdd: PropTypes.func.isRequired
};

export default AddCard;
