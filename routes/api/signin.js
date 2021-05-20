const user = require("../../models/user");

const UserSession = require("../../models/UserSession");

module.exports = (app) => {
  app.post("/api/signup", (req, res, next) => {
    const { body } = req;
    const { username, password, skill, location } = body;
    let { email } = body;

    if (!email) {
      return res.send({
        success: false,
        message: "Email can not be blank",
      });
    }

    if (!username) {
      return res.send({
        success: false,
        message: "Error: Server error",
      });
    }

    if (!password) {
      res.end({
        success: false,
        message: "Password can not be empty",
      });
    }

    if (!skill) {
      res.end({
        success: false,
        message: "Error: Server error",
      });
    }

    if (!location) {
      res.end({
        success: false,
        message: "Error: Server error",
      });
    }
    email = email.toLowerCase();

    user.find(
      {
        email: email,
      },
      (err, previousUsers) => {
        if (err) {
          res.end("Error: Server error");
        } else if (previousUsers.length > 0) {
          res.end("Error: Account already exists");
        }

        const newUser = new User();
        newUser.email = email;
        newUser.username = username;
        newUser.password = newUser.generateHash(password);
        newUser.skill = skill;
        newUser.location = location;
        newUser.save((err, user) => {
          if (err) {
            res.end({
              success: true,
              message: "Signed Up",
            });
          }
        });
      }
    );
  });

  app.post("/api/login", (req, res, next) => {
    const { body } = req;
    const { username, password, skill, location } = body;
    let { email } = body;

    if (!username) {
      return res.send({
        success: false,
        message: "Username cannot be empty",
      });
    }

    if (!password) {
      res.end({
        success: false,
        message: "Password can not be empty",
      });
    }

    email = email.toLowerCase();

    user.find(
      {
        email: email,
      },
      (err, users) => {
        if (err) {
          return res.send({
            success: false,
            message: "Error: Servor Error",
          });
        }
        if (users.length !== 1) {
          return res.send({
            success: false,
            message: "Error: Invalid",
          });
        }
        const user = users[0];
        if (!user.validPassword(password)) {
          return res.send({
            success: false,
            message: "Error: Invalid",
          });
        }

        const userSession = new UserSession();
        userSession.userId = user._id;
        userSession.save((err, doc) => {
          if (err) {
            return res.send({
              success: false,
              message: "Error: Server error",
            });
          }
          return res.send({
            success: true,
            message: "Valid sign in",
            token: doc._id,
          });
        });
      });
    
  });

  app.get("/api/verify", (req, res, next) => {
    const { query } = req;
    const { token } = query;

    UserSession.find(
      {
        _id: token,
        isDeleted: false,
      },
      (err, sessions) => {
        if (err) {
          return res.send({
            success: false,
            message: "Error: Server error",
          });
        }
        if (sessions.length !== 1) {
          return res.send({
            success: false,
            message: "Error: Invalid",
          });
        } else {
          return res.send({
            success: true,
            message: "Good",
          });
        };
      }
    );
  });

  app.get("/api/logout", (req, res, next) => {
    const { query } = req;
    const { token } = query;

    UserSession.findOneAndUpdate(
      {
        _id: token,
        isDeleted: false,
      }, 
      {
        '{$set: {isDeleted: true}}'  
      }, null,
      (err, sessions) => {
        if (err) {
          return res.send({
            success: false,
            message: "Error: Server error",
          });
        }
      else {
          return res.send({
            success: true,
            message: "Good",
          });
        }
      }
    );
  });
};
