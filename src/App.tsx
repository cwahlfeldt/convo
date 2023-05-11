import { Box, Button, Paper, Input } from "@suid/material";

function App() {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          height: "100%",
          maxHeight: 760,
          maxWidth: 1024,
          width: "100%",
          margin: "2rem",
          display: "grid",
          gridGap: "1.5rem",
          gridTemplateRows: "3fr 1fr",
          gridTemplateColumns: "1fr 2.5fr",
        }}
      >
        <ActionBox
          sx={{ borderBottomRightRadius: 0, borderTopRightRadius: 0 }}
        ></ActionBox>
        <ActionBox
          sx={{ borderTopLeftRadius: 0, borderBottomRightRadius: 0 }}
        ></ActionBox>
        <ActionBox sx={{ border: "none", borderTopRightRadius: 0 }}></ActionBox>
        <ActionBox sx={{ borderTopLeftRadius: 0 }}>
          <form action="">
            <Input />
          </form>
        </ActionBox>
      </Box>
    </Box>
  );
}

function ActionBox(props: any) {
  return (
    <Box
      style={props.style}
      sx={{
        border: "solid 2px black",
        borderRadius: "1rem",
        width: `100%`,
        height: `100%`,
        ...props.sx,
      }}
    >
      {props.children}
    </Box>
  );
}

export default App;
