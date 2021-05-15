import React from "react";
import { COOLBLUE, HOTRED,  DirtyGold } from "../../utils/colors";

function SignupBtn() {
  return (
    <div className="d-grid gap-2 d-md-block">
      <button style={{ background:  DirtyGold }} className="btn rounded-pill">
        SignUp
      </button>
    </div>
  );
}

export default SignupBtn;
