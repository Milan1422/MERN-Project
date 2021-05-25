import React from 'react';
import {Twilight } from "../../utils/colors";


function LoginBtn () {
    return(
        <div className="d-grid gap-2 d-md-block">
      <button style={{ background:  Twilight }} className="btn rounded-pill mt-2">
        Log In
      </button>
    </div>
    )
};

export default LoginBtn;