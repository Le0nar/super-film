import { FC } from "react";
import { Route, Switch } from "react-router-dom";
import { MainScreen } from "./MainScreen";
import { ScheduleScreen } from "./ScheduleScreen";

export const Container: FC = () => {
  return (
    <Switch>
      <Route path="/" exact render={() => <MainScreen />} />
      <Route path="/schedule" exact render={() => <ScheduleScreen />} />
    </Switch>
  );
};
