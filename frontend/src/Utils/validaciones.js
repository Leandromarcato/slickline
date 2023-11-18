const validarRoles = (roles, rolesValidos) => {
  let valido = true;

    try {
        rolesValidos.forEach((rolValido) => {
            if (!roles.includes(rolValido)) {
                valido = false;
            } else {
                valido = true;
                throw true;
            }
        });
    } catch (e) {
        return e;
    }

    return valido;
};

export { validarRoles };
