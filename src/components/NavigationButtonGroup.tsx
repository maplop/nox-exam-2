import { Button, ButtonGroup, styled } from "@mui/material";
import { Link } from "react-router-dom";
import routes from "../routes/routes";

const NavigationButtonGroup = () => {
  return (
    <BtnGroup
      variant="outlined"
      aria-label="navigation button group"
      sx={{
        position: 'fixed',
        top: '42px',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 999
      }}

    >
      {routes.map((route) => (
        <Button
          key={route.path}
          component={Link}
          to={route.path}
          sx={{
            textTransform: 'none',
            fontWeight: 500
          }}
        >
          {route.name}
        </Button>
      ))}
    </BtnGroup>
  );
};

export default NavigationButtonGroup;

const BtnGroup = styled(ButtonGroup)(() => ({
  backgroundColor: '#0F172A',
  border: '1px solid #2563EB',
}))
