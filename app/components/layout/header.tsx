import { Flex, IconButton } from "@radix-ui/themes";
import { Link, NavLink } from "../link";
import { HomeIcon } from "@radix-ui/react-icons";

export default function Header() {
  return (
    <Flex justify="between" p="3">
      <Flex gap="2" align="center">
        <NavLink to="/">
          <IconButton size="1" radius="full" highContrast>
            <HomeIcon />
          </IconButton>
        </NavLink>
        <NavLink to="/a">NavLink Link A</NavLink>
        <NavLink to="/b">NavLink Link B</NavLink>
      </Flex>
      <Flex gap="2" align="center">
        <Link to="/a">Normal Link A</Link>
      </Flex>
    </Flex>
  );
}
