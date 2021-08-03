import { makeStyles } from "@material-ui/core";
import Providers from "components/Providers";
import Jobs from "components/Jobs";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Jobs />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Providers />
      </main>
    </div>
  );
}

export default App;
