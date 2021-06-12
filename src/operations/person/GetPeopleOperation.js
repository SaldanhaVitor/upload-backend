module.exports = ({ personService }) => ({
    execute: async () => {
        return [{ pessoa: 'passaro' }, { pessoa: 'passaro' }, { pessoa: 'passaro' }, { pessoa: 'passaro' }];
        //return await personService.getPeople();
    }
});