import { Container } from "@radix-ui/themes";
import { PropsWithChildren } from "react";
import Header from "./header";

import { Grid, Box } from "@radix-ui/themes";
import Footer from "./footer";

// Common layout with header, sidebar, main content, and footer
export function Layout({ children }: PropsWithChildren) {
  return (
    <Container size="3">
      <Grid
        columns={{
          initial: "1",
          sm: "minmax(200px, 1fr) minmax(400px, 3fr)",
          lg: "minmax(2000px, 1fr) minmax(500px, 4fr)",
        }}
        rows="64px minmax(calc(100vh - 128px), 1fr) 64px"
        // width="100%"
        // gap="2"
        style={{
          gridTemplateAreas: `
          "header  header header"
          "sidebar main quicklinks"
          "footer  footer footer"
        `,
        }}
      >
        <Box
          style={{
            gridArea: "header",
            borderInline: "1px solid gray",
            borderBottom: "1px solid gray",
            // borderTop: "1px solid gray",
            // borderRight: "1px solid gray",
            // borderBottom: "1px solid gray",
            // borderLeft: "1px solid gray",
          }}
        >
          <Header />
        </Box>

        <Box
          style={{
            gridArea: "sidebar",
            borderInline: "1px solid gray",
            // borderTop: "1px solid gray",
            // borderRight: "1px solid gray",
            // borderBottom: "1px solid gray",
            // borderLeft: "1px solid gray",
          }}
          p="4"
        >
          Sidebar
        </Box>

        <Box style={{ gridArea: "main" }} p="4">
          {children}
        </Box>

        <Box style={{ gridArea: "footer" }} p="4">
          <Footer />
        </Box>
      </Grid>
    </Container>
  );
}

// Dashboard layout with multiple content areas
export function DashboardLayout() {
  return (
    <Grid
      columns="repeat(4, 1fr)"
      rows="auto 1fr 1fr"
      width="100%"
      height="100vh"
      gap="3"
      p="4"
      style={{
        gridTemplateAreas: `
          "header    header     header    header"
          "sidebar   main       main      widgets"
          "sidebar   secondary  secondary widgets"
        `,
      }}
    >
      <Box style={{ gridArea: "header" }} p="4">
        Dashboard Header
      </Box>

      <Box style={{ gridArea: "sidebar" }} p="4">
        Navigation
      </Box>

      <Box style={{ gridArea: "main" }} p="4">
        Primary Content
      </Box>

      <Box style={{ gridArea: "secondary" }} p="4">
        Secondary Content
      </Box>

      <Box style={{ gridArea: "widgets" }} p="4">
        Widgets
      </Box>
    </Grid>
  );
}

// App layout with complex responsive areas
export function AppLayout() {
  return (
    <Grid
      columns={{
        initial: "1fr",
        sm: "200px 1fr",
        md: "200px 1fr 250px",
      }}
      rows="64px 1fr auto"
      width="100%"
      height="100vh"
      gap="3"
      p="4"
      style={{
        gridTemplateAreas: `initial: 
            "header"
            "main"
            "sidebar"
            "footer"
          sm: 
            "header  header"
            "sidebar main"
            "footer  footer"
          md: 
            "header  header   widgets"
            "sidebar main     widgets"
            "footer  footer   footer"
          `,
      }}
    >
      <Box style={{ gridArea: "header" }} p="4">
        App Header
      </Box>

      <Box style={{ gridArea: "sidebar" }} p="4">
        Navigation Menu
      </Box>

      <Box style={{ gridArea: "main" }} p="4">
        Main App Content
      </Box>

      <Box
        style={{ gridArea: "widgets" }}
        p="4"
        display={{ initial: "none", md: "block" }}
      >
        Widgets Panel
      </Box>

      <Box style={{ gridArea: "footer" }} p="4">
        App Footer
      </Box>
    </Grid>
  );
}

// Email client layout
export function EmailLayout() {
  return (
    <Grid
      columns="250px 1fr 300px"
      rows="64px 1fr"
      width="100%"
      height="100vh"
      gap="2"
      style={{
        gridTemplateAreas: `
          "toolbar   toolbar    details"
          "folders   messages   details"
        `,
      }}
    >
      <Box style={{ gridArea: "toolbar" }} p="3">
        Email Toolbar
      </Box>

      <Box style={{ gridArea: "folders" }} p="3">
        Folder List
      </Box>

      <Box style={{ gridArea: "messages" }} p="3">
        Message List
      </Box>

      <Box style={{ gridArea: "details" }} p="3">
        Message Details
      </Box>
    </Grid>
  );
}
