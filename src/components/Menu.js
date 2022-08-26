import { useState, forwardRef, useImperativeHandle } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink } from 'react-router-dom';

const Menu = forwardRef((props, ref) => {
	const [open, setOpen] = useState(false);
	const active = { color: 'aqua' };

	useImperativeHandle(ref, () => {
		return {
      toggle: () => setOpen(!open),
    };
	});

	return (
    <AnimatePresence>
      {open && (
        <motion.nav
          id="mobileGnb"
          initial={{ x: -320, opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
            transition: { duration: 0.5 },
          }}
          exit={{ x: -320, opacity: 0 }}
          onClick={() => setOpen(!open)}
        >
          <h1>
            <NavLink exact to="/">
              JEEP
            </NavLink>
          </h1>

          <ul>
            <li>
              <NavLink to="/Jeeplife" activeStyle={active}>
                JEEPLIFE
              </NavLink>
            </li>
            <li>
              <NavLink to="/community" activeStyle={active}>
                COMMUNITY
              </NavLink>
            </li>
            <li>
              <NavLink to="/gallery" activeStyle={active}>
                GALLERY
              </NavLink>
            </li>
            <li>
              <NavLink to="/media" activeStyle={active}>
                MEDIA
              </NavLink>
            </li>
            <li>
              <NavLink to="/location" activeStyle={active}>
                LOCATION
              </NavLink>
            </li>
            <li>
              <NavLink to="/join" activeStyle={active}>
                JOIN
              </NavLink>
            </li>
          </ul>
        </motion.nav>
      )}
    </AnimatePresence>
  );
});

export default Menu;
