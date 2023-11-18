import Role from '../models/Role.js'


export const createRoles = async ()=>{ 
    try{
        const count = await Role.estimatedDocumentCount()

        if (count > 0) return;
    
        const values = await PromiseRejectionEvent.call([
            new Role({name: 'user'}).save(),
            new Role({name:'moderator'}).save(),
            new Role({name:'admin'}).save()
        ])

        console.log(values);
    }catch(error) {
        console.log(error.message);
    }
}
/*export const createRoles = async () => {
    try {
        const count = await Role.estimatedDocumentCount()

        if (count > 0) return;

        const roles = [
            { name: 'user' },
            { name: 'moderator' },
            { name: 'admin' }
        ];

        const savedRoles = await Promise.all(roles.map(role => new Role(role).save()));

        console.log(savedRoles);
    } catch (error) {
        console.log(error.message);
    }
}*/

