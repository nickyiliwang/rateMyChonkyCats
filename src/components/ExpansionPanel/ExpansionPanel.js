import React from "react";
// mui
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button/Button";
import { Tooltip } from "@material-ui/core";
// mui icon
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// redux
import { connect } from "react-redux";
import { removeAllCats } from "../../Redux/data/dataActions";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(12),
    fontWeight: theme.typography.fontWeightRegular
  }
}));

function SimpleExpansionPanel(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            Get Chonks from: Default(r/chonker all time + userUploads)
          </Typography>
        </ExpansionPanelSummary>

        {/* USE REDUX HERE MAKE SENSE */}
        <ExpansionPanelDetails>
          {["day", "week", "month", "year", "all"].map((time, index) => {
            return (
              <Tooltip key={index} title={`Top r/Chonks from this ${time}`}>
                <Button onClick={() => props.handleNewGetCatsFromReddit(time)}>
                  <Typography>{time}</Typography>
                </Button>
              </Tooltip>
            );
          })}
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

export default connect(null, { removeAllCats })(SimpleExpansionPanel);
