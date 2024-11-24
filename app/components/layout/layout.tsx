import { Container, Grid, ThemePanel } from "@radix-ui/themes";
import { PropsWithChildren } from "react";
import Header from "./header";

export function Layout({ children }: PropsWithChildren) {
  return (
    <Container size="3">
      <Grid>
        <Header />
        {children}
        <ThemePanel />
      </Grid>
    </Container>
  );
}
