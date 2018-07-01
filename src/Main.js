import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    height: '100%',
    width: '100%',
    maxHeight: '100%',
    maxWidth: '100%',
  },
  header: {
    textAlign: 'center',
  },
  time: {
    color: theme.palette.defaultText.main,
    fontSize: '6rem',
  },
  timePeriod: {
    marginLeft: theme.spacing.unit * 2,
    fontSize: '3rem',
  },
  date: {
    color: theme.palette.defaultText.main,
    marginTop: theme.spacing.unit * -2.5,
  },
  gridContainer: {
    height: `calc(100% - 150px)`,
    overflowY: 'auto',
    // overflowX: 'hidden',
  },
  grid: {
    height: '100%',
    width: 'fit-content',
    padding: theme.spacing.unit * 2,
    flexWrap: 'nowrap',
  },
  group: {
    width: '24rem',
    overflow: 'hidden',
  },
  gridInnerContainer: {
    height: `calc(100% - ${theme.spacing.unit * 6}px)`,
    overflowY: 'auto',
    overflowX: 'hidden',
  },
  gridInner: {
    width: '100%',
  },
  title: {
    color: theme.palette.defaultText.light,
  },
  cardContainer: {
    position: 'relative',
    width: '50%',
  },
  card: {
    minHeight: '8rem',
    height: '100%',
  },
  name: {
    fontSize: '1.2rem',
  },
});

const items = [
  {
    name: 'Scenes',
    cards: [
      {
        name: 'Reset Lights',
        entity_id: 'scene.reset_lights',
      },
      {
        name: 'Reset Kitchen Lights',
        entity_id: 'scene.reset_kitchen_lights',
      },
      {
        name: 'Lights on',
        entity_id: 'scene.lights_on',
      },
      {
        name: 'Lights off',
        entity_id: 'scene.lights_off',
      },
      {
        name: 'All Lights on',
        entity_id: 'scene.all_lights_on',
      },
      {
        name: 'Night Mode',
        entity_id: 'scene.night_mode',
      },
    ]
  },
  {
    name: 'Living Room',
    cards: [
      {
        name: 'Setee Light',
        entity_id: 'light.setee_light',
      },
      {
        name: 'TV Light',
        entity_id: 'light.tv_light',
      },
      {
        name: 'PC Light',
        entity_id: 'light.pc_light',
      },
      {
        name: 'Floor Lights',
        entity_id: 'light.floor_lights',
      },
      {
        name: 'Crystal Lights',
        entity_id: 'light.crystal_lights',
      },

    ]
  },
  {
    name: 'Dining Room',
    cards: [
      {
        name: 'Table Light',
        entity_id: 'light.table_light',
      },
    ]
  },
  {
    name: 'Desk',
    cards: [
      {
        name: 'Desk Lights',
        entity_id: 'light.desk_lights',
      },
      {
        name: 'Matrix Clock',
        entity_id: 'light.matrix_clock',
      },
    ]
  },
  {
    name: 'Kitchen',
    cards: [
      {
        name: 'Kettle Light',
        entity_id: 'light.kettle_light',
      },
      {
        name: 'Table Light',
        entity_id: 'light.table_light',
      },
      {
        name: 'Toaster Light',
        entity_id: 'light.toaster_light',
      },
      {
        name: 'Ceiling Light',
        entity_id: 'light.ceiling_light',
      },
      {
        name: 'Under Bar Light',
        entity_id: 'light.under_bar_light',
      },
      {
        name: 'Bar Light',
        entity_id: 'switch.sonoff_002_plug',
      },
      {
        name: 'Jar Lights',
        entity_id: 'light.jar_lights',
      },
    ]
  },
  {
    name: 'Outside',
    cards: [
      {
        name: 'Fountain Light',
        entity_id: 'switch.sonoff_006_plug',
      },
    ]
  },

];

class Main extends React.Component {

  render() {
    const { classes, entities, handleChange } = this.props;

    return (
      <div className={classes.root}>
        <Grid
          container
          justify="center"
          className={classes.header}
          spacing={8}>
          <Grid item zeroMinWidth>
            <Typography className={classes.time} variant="display4">
              <Moment format="hh:mm" />
              <Moment className={classes.timePeriod} format="a" />
            </Typography>
            <Typography className={classes.date} variant="display2">
              <Moment format="Do MMMM YYYY" />
            </Typography>
          </Grid>
        </Grid>
        <div className={classes.gridContainer}>
          <Grid
            container
            className={classes.grid}
            spacing={16}>
            {items && items.map((group, x) => {
              return (
                <Grid key={x} className={classes.group} item>
                  <Typography className={classes.title} variant="display1" gutterBottom>
                    {group.name}
                  </Typography>
                  <div className={classes.gridInnerContainer}>
                    <Grid
                      container
                      className={classes.gridInner}
                      alignItems="stretch"
                      spacing={8}>
                      {group.cards.map((card, y) => {
                        return (
                          <Grid key={y} className={classes.cardContainer} item>
                            <Card className={classes.card} elevation={1}>
                              <CardContent>
                                <Typography className={classes.name} variant="headline">
                                  {card.name}
                                </Typography>
                                <Typography className={classes.state}>
                                  {entities[entities.indexOf(entity => { return entity[0] === card.entity_id })]}
                                </Typography>
                              </CardContent>
                            </Card>
                          </Grid>
                        )
                      })}
                    </Grid>
                  </div>
                </Grid>
              )
            })}
          </Grid>
        </div>
      </div>
    );
  }
}

Main.propTypes = {
  classes: PropTypes.object.isRequired,
  entities: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default withStyles(styles)(Main);
