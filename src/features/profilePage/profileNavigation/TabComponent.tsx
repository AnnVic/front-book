import { NavLink, Outlet } from 'react-router-dom';
import { StyledTab, StyledTabs } from './TabComponent.styled.tsx';

function TabComponent() {
  return (
    <div>
      <StyledTabs>
        <StyledTab>
          <NavLink className="nav-link" to="/profilePage/myProfile">
            My profile
          </NavLink>
        </StyledTab>
        <StyledTab>
          <NavLink className="nav-link" to="/profile3">
            My books
          </NavLink>
        </StyledTab>
        <StyledTab>
          <NavLink className="nav-link" to="/profile2">
            My Assignments
          </NavLink>
        </StyledTab>
        <StyledTab>
          <NavLink className="nav-link" to="/profile3">
            Wanted books
          </NavLink>
        </StyledTab>
        <StyledTab>
          <NavLink className="nav-link" to="/profilePage/uploadBook">
            Upload Book
          </NavLink>
        </StyledTab>
      </StyledTabs>
      <Outlet />
    </div>
  );
}

export default TabComponent;
