module.exports = {
  verifySession: function verifySession(req) {
    if (typeof req.session.user !== 'undefined') {
      return true;
    }

    return false;

  },
  userRequirements: function userRequirements(req, res) {
    let username = req.body.Username;
    let password = req.body.Password;
    // uses positive look ahead to not consume match
    let usernameRequirements = /[a-zA-Z]{3,}/u;
    let passwordRequirements = /^(?=.*[0-9]{3,})(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]+$/u;
    if (usernameRequirements.test(username) == true) {
      if (passwordRequirements.test(password) == false || password.length < 6 || password.length > 30) {
        throw "<h1>Password requirements not met</h1>";
      }
    } else if (usernameRequirements.test(username) == false  || username.length < 3 || username.length > 20) {
      throw "<h1>Username requirements not met</h1>";
    } else {
      throw 403;
    }
  },

  miniverseCreationForm: function miniverseCreationForm(req) {
    if (req.body.miniverseName == '' || req.body.miniverseSummary == '' || req.body.agreementTerms != '') {
      throw "<h1>Empty values</h1>";
    } else if (req.body.miniverseName.length > 20) {
      throw "<h1>Miniverse name too long</h1>";
    }
  },

  passwordsMatch: function passwordsMatch(req, res) {
    if (req.body.Password != req.body.renteredPassword) {
      throw "<h1>Passwords do not match</h1>";
    }
  },

  sessionError: function sessionError(req, res) {
    throw "<h1>Please register, login, or enable cookies to access this content.</h1>";
  }

}
