 export  const isAdmin = (req, res, next) => {
    // Verifica si el usuario tiene el rol de administrador
    const isAdmin = req.user.roles.some(role => role.name === 'admin');

    if (isAdmin) {
        next(); // Continúa con la siguiente función de middleware
    } else {
        return res.status(403).json({ message: 'No tienes permisos de administrador' });
    }
}


