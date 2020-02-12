const { User } = require('../../src/app/models');
describe('Authentication', () => {
    it('should ', async() => {
        const user = await User.create({
            name: "Domingos",
            email: "domliraa@gmail.com",
            password_hash: "1234234123"
        });
        
        expect(user.email).toBe('domliraa@gmail.com')

    });
});
