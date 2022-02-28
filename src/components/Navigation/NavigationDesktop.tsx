import LoginButton from "./LoginButton";
import NavigationItem from "./NavigationItem";
import { routes } from "./routes";

type Props = {};

const NavigationDesktop = (props: Props) => {
  return (
    <ul>
      <li>
        {routes.map((route) => (
          <NavigationItem
            key={route.linkTo}
            linkLabel={route.linkLabel}
            linkTo={route.linkTo}
          />
        ))}
        <LoginButton />
      </li>
    </ul>
  );
};

export default NavigationDesktop;
