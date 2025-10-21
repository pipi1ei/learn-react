import { NavLink } from 'react-router';

export default function Home() {
  return (
    <>
      <div>我是 Home 页面</div>
      <NavLink to="/about" end>
        to About
      </NavLink>
    </>
  );
}
