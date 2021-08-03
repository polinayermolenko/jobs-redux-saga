import React, { useCallback } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { filterEmployees } from "modules/app/actions";
import { selectAppState } from "modules/app/selectors";
import { useDispatch, useSelector } from "react-redux";

export default function NavigationItem({ id, jobId, title }) {
  const dispatch = useDispatch();
  const appState = useSelector(selectAppState);
  const action = useCallback(() => {
    dispatch(filterEmployees(jobId));
  }, [jobId, dispatch]);

  return (
    <ListItem button selected={jobId === appState.selectedJob} onClick={action}>
      <ListItemText primary={title} />
    </ListItem>
  );
}
