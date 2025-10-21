import { NavLink } from 'react-router';

export default function About() {
  return (
    <>
      <div>我是 About 页面</div>
      <NavLink to="/" end>
        to Home
      </NavLink>
    </>
  );
}
