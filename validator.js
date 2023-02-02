const EMAIL_REG_EX =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1-3}\.[0-9]{1-3}\.[0-9]{1-3}\.[0-9]{1-3}

export const isEmail =(email) => {
    if(typeof email !== "string"){
        return false;
    }
    return EMAIL_REG_EX.test(email);
}

export const inValidUser =(user) => {
return(
    isEmail(user.email) && user.password && user.firstName && user.lastName
)
}

export default inValidUser;