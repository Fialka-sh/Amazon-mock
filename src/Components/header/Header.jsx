import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import '../../Styles/header.css';

export default function Header() {
  return (
    <div className="header centerIt">
      <img
        className="header__logo"
        width="150"
        height="35"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt="amazon logo"
      />
      <div className="header__search centerIt">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <div className="header__navOption centerIt">
          <span className="header__navOption_LineOne">Hello</span>
          <span className="header__navOption_LineTwo">Sign In</span>
        </div>
        <div className="header__navOption centerIt">
          <span className="header__navOption_LineOne">Returns</span>
          <span className="header__navOption_LineTwo">& Orders</span>
        </div>
        <div className="header__navOption centerIt">
          <span className="header__navOption_LineOne">Your</span>
          <span className="header__navOption_LineTwo">Prime</span>
        </div>
        <div className="header__cart centerIt">
          <ShoppingCartIcon />
          <p>0</p>
        </div>
      </div>
    </div>
  );
}

// blockName-elemName_modName_modVal
